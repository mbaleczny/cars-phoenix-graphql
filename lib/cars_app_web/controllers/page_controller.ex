defmodule CarsAppWeb.PageController do
  use CarsAppWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
