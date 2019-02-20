Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :features, :tests
    end
  end
  mount_ember_app :frontend, to: "/"
end
