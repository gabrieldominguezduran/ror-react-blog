class AddAuthorColumnToArticlesTable < ActiveRecord::Migration[6.1]
  def change
    add_reference :articles, :author, after: :text
  end
end
