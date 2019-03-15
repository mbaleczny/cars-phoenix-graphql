defmodule CarsAppWeb.Graph.Schema do
  use Absinthe.Schema
  alias CarsApp.Repo
  alias CarsApp.Vehicles
  alias CarsApp.Vehicles.Car

  import_types(CarsAppWeb.Graph.Types.CarType)

  query do
    @desc "Get cars list"
    field :cars, non_null(list_of(non_null(:car))) do
      arg(:keywords, :string, default_value: nil)

      resolve(fn _, args, _ ->
        cars =
          Car
          |> Vehicles.search_cars(args[:keywords])
          |> Repo.all()

        {:ok, cars}
      end)
    end

    @desc "Fetch a car by id"
    field :car, :car do
      arg(:id, non_null(:id))

      resolve(fn _, args, _ ->
        car = Vehicles.get_car!(args[:id])
        {:ok, car}
      end)
    end
  end
end
