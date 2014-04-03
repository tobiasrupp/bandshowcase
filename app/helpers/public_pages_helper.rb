module PublicPagesHelper


  def facebook_sharer_url(title, path, picture=asset_url('vogel_144_b.png'))
    url = request.protocol + request.host_with_port + '/' + path
    "https://www.facebook.com/dialog/feed?app_id=1430206933893155&name=#{title}&link=#{url}&redirect_uri=#{share_callback_url + '?url=' + url}&picture=#{asset_url(picture)}"
  end

  def get_share_count(track_id)
    return nil unless @facebook_shares.present?
    
    url = modul_a_url + '/' + track_id.to_s
    share = @facebook_shares.select { |share| share.url == url }.first
    return "0 shares" if share.nil?
    return share.sharecount.to_s + " share" if share.sharecount == 1
    return share.sharecount.to_s + " shares"
  end


  def get_svg_icon(icon_name)
    case 
      when 'play'
        return "<svg><circle cx=\"143.3\" cy=\"143.3\" r=\"143.3\"/><g><path d=\"M100.2,83.1c-0.1-5.3,4-9.8,11.2-6.1c14.7,8.5,97.8,57.1,106.7,62.6c4.9,3,4.8,6.6-0.1,9.6c-16,9.6-103.1,60.9-108.6,64.2c-4.3,2.6-9.4,0.6-9.3-6.2C100.1,186.3,100.1,96.9,100.2,83.1z\"/></g></svg>"
    end
  end
end
