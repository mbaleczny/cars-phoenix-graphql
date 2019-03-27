defmodule CarsApp.Repo.Migrations.UpdateCars do
  use Ecto.Migration

  def change do
    alter table(:cars) do
      add :make, :string, default: "", null: false
      add :year, :integer, default: 2004, null: false
      add :fuel_type, :string, default: "", null: false
      add :millage, :integer, default: 0, null: false
    end
  end
end
