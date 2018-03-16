Rails.application.routes.draw do
  namespace :api do
    get 'tweets', to: 'tweets#index'
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
