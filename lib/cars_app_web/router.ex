defmodule CarsAppWeb.Router do
  use CarsAppWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", CarsAppWeb do
    pipe_through :api
  end
end
