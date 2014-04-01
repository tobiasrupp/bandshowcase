class RenameCountInFacebookShares < ActiveRecord::Migration
  def change
    rename_column :facebook_shares, :count, :sharecount
  end
end
