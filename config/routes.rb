Bandshowcase::Application.routes.draw do

  root to: "public_pages#home"
  resources :facebook_shares
  get "test" => "public_pages#test"
  get "share_callback" => "facebook_shares#share_callback", as: :share_callback
  # get "tracks/:id" => "tracks#player", as: :tracks
  get "audioplayer_1(/:track_id)" => "public_pages#audioplayer_1", as: :audioplayer_1
  get "modul_a(/:track_id)" => "public_pages#modul_a", as: :modul_a
  get "modul_x(/:track_id)" => "public_pages#modul_x"
  get "bootstrap" => "public_pages#version_1"
  # get "canvas_1" => "public_pages#canvas_1"
  get "modul_a_2(/:track_id)" => "public_pages#modul_a"
  # get "modul_a_1" => "public_pages#modul_a_1"

  # Facebook app url - FB uses POST to load the page
  post 'facebook' => "public_pages#facebook", as: :facebook
  get 'facebook' => "public_pages#facebook", as: :facebook_get
  post 'facebook/modul_x' => "public_pages#modul_x"
  get 'facebook/modul_x' => "public_pages#modul_x"
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end
  
  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
