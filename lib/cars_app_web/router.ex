defmodule CarsAppWeb.Router do
  use CarsAppWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  scope "/" do
    pipe_through :api

    forward "/graphql", Absinthe.Plug,
      schema: CarsAppWeb.Graph.Schema,
      json_codec: Phoenix.json_library()

    if Mix.env() == :dev do
      forward "/graphiql", Absinthe.Plug.GraphiQL,
        schema: CarsAppWeb.Graph.Schema,
        interface: :simple,
        json_codec: Phoenix.json_library()
    end
  end

  scope "/", CarsAppWeb do
    pipe_through :browser

    get "/*path", PageController, :index
  end
end
