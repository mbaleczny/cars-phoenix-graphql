use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :cars_app, CarsAppWeb.Endpoint,
  http: [port: 4002],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
config :cars_app, CarsApp.Repo,
  username: "postgres",
  password: "postgres",
  database: "cars_app_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox
