class HomepageController < ApplicationController
  def load_articles
    articles = Article.load_authors_names
    render json: articles
  end
end
