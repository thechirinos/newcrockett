json.array!(@gadgets) do |gadget|
  json.extract! gadget, :id, :brand, :model, :model_no, :gunny_id, :mx_id, :device_name, :os, :os_version, :comments, :current_user, :last_user, :format, :home_location, :available, :user_id
  json.url gadget_url(gadget, format: :json)
end
