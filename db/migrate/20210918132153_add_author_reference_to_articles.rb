class AddAuthorReferenceToArticles < ActiveRecord::Migration[6.1]
  def change
    add_reference :articles, :author_id, if_not_exists: true
  end
end
