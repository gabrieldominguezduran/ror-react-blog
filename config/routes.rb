Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root 'homepage#index'
  get 'load_articles' => 'homepage#load_articles'
  post 'create_articles' => 'homepage#create_articles'
  
end
