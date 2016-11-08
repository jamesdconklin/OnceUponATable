json.array! @assets do |asset|
  json.partial! 'api/assets/asset', asset: asset
end
