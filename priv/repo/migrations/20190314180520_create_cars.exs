defmodule CarsApp.Repo.Migrations.CreateCars do
  use Ecto.Migration

  def change do
    create table(:cars) do
      add :model, :string, null: false
      add :description, :string, null: false

      timestamps()
    end

  end
end
