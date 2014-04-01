require 'test_helper'

class FacebookSharesControllerTest < ActionController::TestCase
  setup do
    @facebook_share = facebook_shares(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:facebook_shares)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create facebook_share" do
    assert_difference('FacebookShare.count') do
      post :create, facebook_share: { count: @facebook_share.count, post_id: @facebook_share.post_id, url: @facebook_share.url }
    end

    assert_redirected_to facebook_share_path(assigns(:facebook_share))
  end

  test "should show facebook_share" do
    get :show, id: @facebook_share
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @facebook_share
    assert_response :success
  end

  test "should update facebook_share" do
    patch :update, id: @facebook_share, facebook_share: { count: @facebook_share.count, post_id: @facebook_share.post_id, url: @facebook_share.url }
    assert_redirected_to facebook_share_path(assigns(:facebook_share))
  end

  test "should destroy facebook_share" do
    assert_difference('FacebookShare.count', -1) do
      delete :destroy, id: @facebook_share
    end

    assert_redirected_to facebook_shares_path
  end
end
