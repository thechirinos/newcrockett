require 'test_helper'

class GadgetsControllerTest < ActionController::TestCase
  setup do
    @gadget = gadgets(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:gadgets)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create gadget" do
    assert_difference('Gadget.count') do
      post :create, gadget: { available: @gadget.available, brand: @gadget.brand, comments: @gadget.comments, current_user: @gadget.current_user, device_name: @gadget.device_name, format: @gadget.format, gunny_id: @gadget.gunny_id, home_location: @gadget.home_location, last_user: @gadget.last_user, model: @gadget.model, model_no: @gadget.model_no, mx_id: @gadget.mx_id, os: @gadget.os, os_version: @gadget.os_version, user_id: @gadget.user_id }
    end

    assert_redirected_to gadget_path(assigns(:gadget))
  end

  test "should show gadget" do
    get :show, id: @gadget
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @gadget
    assert_response :success
  end

  test "should update gadget" do
    patch :update, id: @gadget, gadget: { available: @gadget.available, brand: @gadget.brand, comments: @gadget.comments, current_user: @gadget.current_user, device_name: @gadget.device_name, format: @gadget.format, gunny_id: @gadget.gunny_id, home_location: @gadget.home_location, last_user: @gadget.last_user, model: @gadget.model, model_no: @gadget.model_no, mx_id: @gadget.mx_id, os: @gadget.os, os_version: @gadget.os_version, user_id: @gadget.user_id }
    assert_redirected_to gadget_path(assigns(:gadget))
  end

  test "should destroy gadget" do
    assert_difference('Gadget.count', -1) do
      delete :destroy, id: @gadget
    end

    assert_redirected_to gadgets_path
  end
end
