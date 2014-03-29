module PublicPagesHelper


  def facebook_sharer_url(title, path)
    "https://www.facebook.com/sharer.php?s=100 &p[url]=#{request.protocol + request.host_with_port + path}&p[images][0]=#{asset_url('vogel_144_b.png')}&p[title]=#{title}&p[summary]=#{@fb_description}"
  end
end
