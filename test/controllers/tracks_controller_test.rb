require 'test_helper'

class TracksControllerTest < ActionController::TestCase
  test "should get player" do
    get :player
    assert_response :success
  end

end
