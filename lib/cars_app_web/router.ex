defmodule CarsAppWeb.Router do
  use CarsAppWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/" do
    pipe_through :api

    forward "/graphql", Absinthe.Plug, schema: CarsAppWeb.Graph.Schema

    if Mix.env == :dev do
      forward "/graphiql", Absinthe.Plug.GraphiQL,
        schema: CarsAppWeb.Graph.Schema,
        interface: :simple,
        json_codec: Phoenix.json_library()
    end
  end
end
