defmodule CarsAppWeb.Graph.Types.CarType do
  use Absinthe.Schema.Notation

  @desc "A Car with model and description"
  object :car do
    field :id, non_null(:id)
    field :model, non_null(:string)
    field :description, non_null(:string)
  end
end
