Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # need to implement nested routes

  # get '/login' => "sessions#new"

  post '/sessions' => 'sessions#create'
  get '/logout' => 'sessions#destroy'
  post '/signup' => 'users#create'

  # need to fix nested routing problem

  resources :users

  resources :books

  resources :book_ownerships

end