defmodule CarsApp.VehiclesTest do
  use CarsApp.DataCase

  alias CarsApp.Vehicles

  describe "cars" do
    alias CarsApp.Vehicles.Car

    @valid_attrs %{description: "some description", model: "some model"}
    @update_attrs %{description: "some updated description", model: "some updated model"}
    @invalid_attrs %{description: nil, model: nil}

    def car_fixture(attrs \\ %{}) do
      {:ok, car} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Vehicles.create_car()

      car
    end

    test "list_cars/0 returns all cars" do
      car = car_fixture()
      assert Vehicles.list_cars() == [car]
    end

    test "get_car!/1 returns the car with given id" do
      car = car_fixture()
      assert Vehicles.get_car!(car.id) == car
    end

    test "create_car/1 with valid data creates a car" do
      assert {:ok, %Car{} = car} = Vehicles.create_car(@valid_attrs)
      assert car.description == "some description"
      assert car.model == "some model"
    end

    test "create_car/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Vehicles.create_car(@invalid_attrs)
    end

    test "update_car/2 with valid data updates the car" do
      car = car_fixture()
      assert {:ok, %Car{} = car} = Vehicles.update_car(car, @update_attrs)
      assert car.description == "some updated description"
      assert car.model == "some updated model"
    end

    test "update_car/2 with invalid data returns error changeset" do
      car = car_fixture()
      assert {:error, %Ecto.Changeset{}} = Vehicles.update_car(car, @invalid_attrs)
      assert car == Vehicles.get_car!(car.id)
    end

    test "delete_car/1 deletes the car" do
      car = car_fixture()
      assert {:ok, %Car{}} = Vehicles.delete_car(car)
      assert_raise Ecto.NoResultsError, fn -> Vehicles.get_car!(car.id) end
    end

    test "change_car/1 returns a car changeset" do
      car = car_fixture()
      assert %Ecto.Changeset{} = Vehicles.change_car(car)
    end
  end
end
