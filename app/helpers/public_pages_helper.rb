module PublicPagesHelper


  def facebook_sharer_url(title, path, picture=asset_url('vogel_144_b.png'))
    "https://www.facebook.com/dialog/feed?app_id=1430206933893155&caption=Cssone Showcase&name=#{title}&link=#{request.protocol + request.host_with_port + '/' + path}&redirect_uri=#{root_url}&picture=#{asset_url(picture)}"
  end
end
