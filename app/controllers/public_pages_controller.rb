class PublicPagesController < ApplicationController


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
    render layout: 'narrow2'
  end
end
