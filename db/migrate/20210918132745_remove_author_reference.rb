class RemoveAuthorReference < ActiveRecord::Migration[6.1]
  def change
    remove_column :articles, :author_id, if_exists: true
    remove_column :articles, :author_id_id, if_exists: true
  end
end
