class Article < ApplicationRecord
  belongs_to :author

  def self.load_authors_names
    articles = []

    all.each do |ar|
      article = ar.as_json
      article[:author] = ar.author.name

      articles.push article
    end
    return articles
  end
end
