class PublicPagesController < ApplicationController
  skip_before_filter :verify_authenticity_token, :only => :facebook

  def home
    redirect_to action: 'modul_a'
  end

  def test
    render file: "test"
  end
  
  def version_1
    render layout: 'bootstrap-theme'

    # render file: "/public/version_1/tabtest1.html"
  end

  def canvas_1
    # render layout: 'bootstrap-theme'

    render file: "public/version_2/tabtest1.html", layout: false

  end

  def version_2

  end

  # def modul_a
  #   render layout: 'narrow'
  # end

  def modul_a_1
    render layout: 'narrow1'
  end

  def modul_a
    @track_id = params[:track_id]
    @facebook_shares = FacebookShare.where("url LIKE '#{modul_a_url}%'").order('url ASC').all
    render layout: 'narrow2'
  end

  def modul_x
    @track_id = params[:track_id]
    render layout: 'modul_x'
  end

  def audioplayer_1
    @track_id = params[:track_id]
    @facebook_shares = FacebookShare.where("url LIKE '#{audioplayer_1_url}%'").order('url ASC').all
    render layout: 'audioplayer_1'
  end

  def facebook
    render action: 'modul_a', layout: 'narrow2'
  end
end
