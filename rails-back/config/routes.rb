Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :features, :tests
    end
  end
  get '/features/:id', to: 'api/v1/features#show'
  mount_ember_app :frontend, to: "/"
end
