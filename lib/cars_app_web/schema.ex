defmodule CarsAppWeb.Graph.Schema do
  use Absinthe.Schema
  alias CarsApp.Repo
  alias CarsApp.Vehicles
  alias CarsApp.Vehicles.Car

  import_types CarsAppWeb.Graph.Types.CarType

  query do

    @desc "Get cars list"
    field :cars, non_null(list_of(non_null(:car))) do
      resolve fn _, _, _ ->
        {:ok, Repo.all(Car)}
      end
    end

  end
end
