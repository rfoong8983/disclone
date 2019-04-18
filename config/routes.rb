Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :servers, only: [:index, :create, :destroy]
    resources :server_subs, only: [:index, :create]
    resources :channels, only: [:index, :create, :destroy]
    resources :conversations, only: [:index, :create]
    resources :messages, only: [:create]
    mount ActionCable.server => '/cable'
  end
  
  root to: 'static_pages#root'
end
