class CreateGadgets < ActiveRecord::Migration
  def change
    create_table :gadgets do |t|
      t.string :brand
      t.string :model
      t.string :model_no
      t.string :gunny_id
      t.string :mx_id
      t.string :device_name
      t.string :os
      t.string :os_version
      t.text :comments
      t.string :current_user
      t.string :last_user
      t.string :format
      t.string :home_location
      t.boolean :available
      t.references :user, index: true

      t.timestamps
    end
  end
end
