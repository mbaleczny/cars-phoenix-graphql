# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     CarsApp.Repo.insert!(%CarsApp.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.
alias CarsApp.Repo
alias CarsApp.Vehicles
alias CarsApp.Vehicles.Car

Car |> Repo.delete_all()

Vehicles.create_car(%{
  model: "Volvo S60",
  description: "Black 5-door, petrol-engine sedan. Great condition."
})

Vehicles.create_car(%{
  model: "Mercedes-Benz W124",
  description: "Silver 5-door, diesel-engine. 500k milage."
})
