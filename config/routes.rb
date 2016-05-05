Rails.application.routes.draw do
  root 'home#index'
  
  get 'pokemon_link', to: 'pokemon#pokemon_link'
  resources :pokemon
end
