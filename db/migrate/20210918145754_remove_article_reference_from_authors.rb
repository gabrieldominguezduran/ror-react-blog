class RemoveArticleReferenceFromAuthors < ActiveRecord::Migration[6.1]
  def change
    remove_column :authors, :article_id, if_exists: true
  end
end
