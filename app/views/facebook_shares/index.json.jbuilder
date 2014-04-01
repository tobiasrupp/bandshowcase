json.array!(@facebook_shares) do |facebook_share|
  json.extract! facebook_share, :id, :url, :post_id, :count
  json.url facebook_share_url(facebook_share, format: :json)
end
