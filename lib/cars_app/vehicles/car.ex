defmodule CarsApp.Vehicles.Car do
  use Ecto.Schema
  import Ecto.Changeset

  schema "cars" do
    field :description, :string
    field :model, :string

    timestamps()
  end

  @doc false
  def changeset(car, attrs) do
    car
    |> cast(attrs, [:model, :description])
    |> validate_required([:model, :description])
  end
end
