import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

function CarList() {
  const dispatch = useDispatch();
  const cars = useSelector((state) => {
    return state.cars.data;
  });

  const handleCarDelete = (car) => {
    // assuming dispatch is a Redux dispatch function
    // dispatch(removeCar(car.id));
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    return (
      <div key={car.id} className="panel">
        <p>
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
