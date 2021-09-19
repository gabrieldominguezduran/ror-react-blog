class HomepageController < ApplicationController
  skip_forgery_protection 
  def load_articles
    articles = Article.order(created_at: :desc).load_authors_names
    render json: articles
  end

  def create_articles
    p 'CREATE ARTICLES'
    author = Author.where(:name => params[:post][:author]).last
    if author.present?
      author = author
    else
      author = Author.create({
        :name => params[:post][:author]
      })
    end

    Article.create({
      :title => params[:post][:title],
      :text => params[:post][:text],
      :author_id => author.id
    })

    articles = Article.order(created_at: :desc).load_authors_names
    render json: articles
  end
end
