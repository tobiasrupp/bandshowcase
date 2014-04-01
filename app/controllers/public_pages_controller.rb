class PublicPagesController < ApplicationController
  skip_before_filter :verify_authenticity_token, :only => :facebook

  def home
    redirect_to action: 'modul_a'
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

    @facebook_shares = FacebookShare.where("url LIKE '#{modul_a_url }'").order('url ASC').all
    render layout: 'narrow2'
  end

  def modul_x
    @track_id = params[:track_id]
    render layout: 'modul_x'
  end


  def facebook

    # respond_to do |format|
      # if @newsletter_subscription.save
      #   format.html { redirect_to new_newsletter_path, notice: 'Newsletter subscription was successfully created.' }
      # else
        # format.html { render action: 'terms' }
        # redirect_to(root_path, notice: 'FB app success.')
      # end
    # end
    render action: 'modul_a', layout: 'narrow2'
  end
end
