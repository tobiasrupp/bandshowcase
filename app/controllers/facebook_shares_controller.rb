class FacebookSharesController < ApplicationController
  before_action :set_facebook_share, only: [:show, :edit, :update, :destroy]

  def share_callback
    if params[:post_id].present? && params[:url].present?
      @facebook_share = FacebookShare.find_or_initialize_by(url: params[:url])
      @facebook_share.count += 1
      @facebook_share.save!
    end
    redirect_to root_path
  end

  # GET /facebook_shares
  # GET /facebook_shares.json
  def index
    @facebook_shares = FacebookShare.all
  end

  # GET /facebook_shares/1
  # GET /facebook_shares/1.json
  def show
  end

  # GET /facebook_shares/new
  def new
    @facebook_share = FacebookShare.new
  end

  # GET /facebook_shares/1/edit
  def edit
  end

  # POST /facebook_shares
  # POST /facebook_shares.json
  def create
    @facebook_share = FacebookShare.new(facebook_share_params)

    respond_to do |format|
      if @facebook_share.save
        format.html { redirect_to @facebook_share, notice: 'Facebook share was successfully created.' }
        format.json { render action: 'show', status: :created, location: @facebook_share }
      else
        format.html { render action: 'new' }
        format.json { render json: @facebook_share.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /facebook_shares/1
  # PATCH/PUT /facebook_shares/1.json
  def update
    respond_to do |format|
      if @facebook_share.update(facebook_share_params)
        format.html { redirect_to @facebook_share, notice: 'Facebook share was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @facebook_share.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /facebook_shares/1
  # DELETE /facebook_shares/1.json
  def destroy
    @facebook_share.destroy
    respond_to do |format|
      format.html { redirect_to facebook_shares_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_facebook_share
      @facebook_share = FacebookShare.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def facebook_share_params
      params.require(:facebook_share).permit(:url, :post_id, :count)
    end
end
