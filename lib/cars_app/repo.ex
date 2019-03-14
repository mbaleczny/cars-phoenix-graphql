defmodule CarsApp.Repo do
  use Ecto.Repo,
    otp_app: :cars_app,
    adapter: Ecto.Adapters.Postgres
end
