class Message < ActiveRecord::Base
  validates :body, :user, :game, presence: true
  after_initialize :set_roll_result

  belongs_to :game
  belongs_to :user

  def set_roll_result
    if self.body =~ /\/roll\s+\S+/
      rolls = self.body.split(/\s+/).drop(1)
      self.result = (rolls.map {|roll| self.class.eval_roll(roll)}) # .join(', ')
    end
  end

  def self.op(expr)
    pattern = /[\+\-\/\*]/
    left, right = expr.split(pattern).map(&:to_i)
    operator = expr.match(pattern).to_s
    case operator
    when "/"
      return left / right
    when "+"
      return left + right
    when "-"
      return left - right
    when "*"
      return left * right
    else
      raise ArgumentError.new("Invalid Operator: #{operator}")
    end
  end

  def self.calculate(expr)
    pattern_md = /\d+[\*\/]\d+/
    while expr =~ pattern_md
      expr = expr.sub(pattern_md) do |match|
        op(match)
      end
    end
    pattern_as = /\d+[\+\-]\d+/
    while expr =~ pattern_as
      expr = expr.sub(pattern_as) do |match|
        op(match)
      end
    end
    expr.to_i
  end

  def self.paren_slice(roll_string)
    idx_left, idx_right = 0, roll_string.length - 1
    while roll_string[idx_left] != '('
      idx_left += 1
      break if idx_left == roll_string.length
    end
    while roll_string[idx_right] != ')'
      idx_right -= 1
      break if idx_right.zero?
    end
    if idx_left >= idx_right
      raise ArgumentError.new("Mismatched Parentheticals")
    end
    [idx_left + 1, idx_right]
  end

  def self.roll(xdy)
    x, y = xdy.split(/d/)
    x = !x.empty? ? x.to_i : 1
    y = y.to_i
    roll_result = (1..x).inject(0) do |accum, _|
      accum + (1 + (Random.rand * y).to_i)
    end
    roll_result
  end

  def self.eval_roll(roll_string)
    begin
      eval_string = roll_string
      if roll_string =~ /^[^\)]*\(.*\)[^\(]*/
        left, right = paren_slice(roll_string)
        eval_string = "#{eval_string[0...left-1]}"
        eval_string = "#{eval_string}#{eval_roll(roll_string[left...right])}"
        eval_string = "#{eval_string}#{roll_string[right+1, roll_string.length]}"
      end
      eval_string = eval_string.gsub(/\d*d\d+/) {|match| roll(match)}

      begin
        return calculate(eval_string)
      rescue
        raise ArgumentError.new("Malformed Roll String: #{roll_string}")
      end
    rescue ArgumentError => ae
      return ae.message
    end
  end
end
