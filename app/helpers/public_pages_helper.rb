module PublicPagesHelper


  def facebook_sharer_url(title, path, picture=asset_url('vogel_144_b.png'))
    url = request.protocol + request.host_with_port + '/' + path
    "https://www.facebook.com/dialog/feed?app_id=1430206933893155&name=#{title}&link=#{url}&redirect_uri=#{share_callback_url + '/' + url}&picture=#{asset_url(picture)}"
  end
end
