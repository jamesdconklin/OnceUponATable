export const getCursorPosition = function(canvas, event) {
  var rect = canvas.getBoundingClientRect();
  var x = event.clientX - rect.left;
  var y = event.clientY - rect.top;
  return [x,y];
};

export const drawGrid = function(context, width, height, options={}) {
  // Save draw settings
  let { lineWidth, globalAlpha, strokeStyle } = context;
  // Set draw Settings
  context.globalAlpha = options.globalAlpha || 0.25;
  context.lineWidth = options.lineWidth || 3;
  context.strokeStyle = options.strokeStyle || "#634515";
  var spacing = options.spacing || 80;

  // Draw vertical lines
  for (let i = 1; i <= width; i += spacing) {
    context.beginPath();
    context.moveTo(i, 0);
    context.lineTo(i, height);
    context.stroke();
  }

  // Ditto Horizontal
  for (let i = 1; i <= height; i += spacing) {
    context.beginPath();
    context.moveTo(0,i);
    context.lineTo(width, i);
    context.stroke();
  }
  // Restore draw settings
  context.globalAlpha = globalAlpha;
  context.lineWidth = lineWidth;
  context.strokeStyle = strokeStyle;
};
