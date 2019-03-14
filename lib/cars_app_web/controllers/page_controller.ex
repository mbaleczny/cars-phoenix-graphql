defmodule CarsAppWeb.PageController do
  use CarsAppWeb, :controller

  def index(conn, _params) do
    html(conn, File.read!("client/build/index.html"))
  end
end
