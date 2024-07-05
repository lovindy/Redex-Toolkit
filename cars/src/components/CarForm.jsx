import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store";

const CarForm = () => {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };

  const handleCostChange = (event) => {
    const carCost = parseInt(event.target.value) || 0;
    dispatch(changeCost(carCost));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCar({ name, cost }));
    console.log("Click Submit");
  };

  return (
    <div className="car-form panel">
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          {/* Car Name */}
          <h1>Car Price</h1>
          <div className="field">
            <label className="label">Car Name : </label>
            <input
              className="input is-expanded border border-black"
              value={name}
              onChange={handleNameChange}
            />
          </div>

          {/* Car Value */}
          <h1>Car Value</h1>
          <div className="field">
            <label className="label">Car Value : </label>
            <input
              className="input is-expanded border border-black"
              value={cost || ""}
              onChange={handleCostChange}
              type="number"
            />
          </div>
        </div>

        <div className="field">
          <button className="button is-link bg-green-500 px-2 py-1 rounded-full border border-black">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
