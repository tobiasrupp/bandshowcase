class PublicPagesController < ApplicationController
  skip_before_filter :verify_authenticity_token, :only => :facebook

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

  def modul_a
    render layout: 'narrow'
  end

  def modul_a_1
    render layout: 'narrow1'
  end

  def modul_a_2
    @track_id = params[:track_id]
    render layout: 'narrow2'
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
    render action: 'modul_a_2', layout: 'narrow2'
  end
end
