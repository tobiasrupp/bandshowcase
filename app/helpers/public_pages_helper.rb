module PublicPagesHelper


  def facebook_sharer_url(title, path, picture=asset_url('vogel_144_b.png'))
    url = request.protocol + request.host_with_port + '/' + path
    "https://www.facebook.com/dialog/feed?app_id=1430206933893155&name=#{title}&link=#{url}&redirect_uri=#{share_callback_url + '?url=' + url}&picture=#{asset_url(picture)}"
  end

  def get_share_count(track_id)
    return unless @facebook_shares.present?
    url = modul_a_url + '/' + track_id.to_s
    share = @facebook_shares.select { |share| share.url == url }
    return share.count if share.count.present?
  end
end
