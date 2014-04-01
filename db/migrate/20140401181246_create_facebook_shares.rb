class CreateFacebookShares < ActiveRecord::Migration
  def change
    create_table :facebook_shares do |t|
      t.string :url
      t.string :post_id
      t.integer :count

      t.timestamps
    end
  end
end
