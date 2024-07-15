import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

function CarList() {
  const dispatch = useDispatch();
  const { cars, name } = useSelector(({ form, cars: { data, searchTerm } }) => {
    const filteredCars = data.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    return {
      cars: filteredCars,
      name: form.name,
    };
  });

  const handleCarDelete = (car) => {
    // assuming dispatch is a Redux dispatch function
    // dispatch(removeCar(car.id));
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    // decide if this car should be bold
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
    return (
      <div
        key={car.id}
        className="panel max-w-screen-sm flex justify-center items-center space-y-4 gap-4">
        <p className={bold ? "font-bold" : ""}>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger px-2 py-1 bg-red-500 border border-black rounded-full"
          onClick={() => handleCarDelete(car)}>
          Delete
        </button>
        <hr />
      </div>
    );
  });

  return (
    <div className="car-list">
      <h1>List Of Cars</h1>
      <div>{renderedCars}</div>
    </div>
  );
}

export default CarList;
