module PublicPagesHelper


  def facebook_sharer_url(title, path)
    # "https://www.facebook.com/sharer.php?s=100 &p[url]=#{request.protocol + request.host_with_port + '/' + path}&p[images][0]=#{asset_url('vogel_144_b.png')}&p[title]=#{title}&p[summary]=#{@fb_description}"
    "https://www.facebook.com/dialog/feed?app_id=1430206933893155 &display=popup&caption=#{title} &link=#{request.protocol + request.host_with_port + '/' + path}&redirect_uri=#{request.protocol + request.host_with_port + request.fullpath}"
  end
end
