import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";

function CarSearch() {
  // define the useDispatch and useSelector
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.cars.searchTerm);

  // define the handleSearchTermChange function
  const handleSearchTermChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };

  return (
    <div className="">
      <h3>My Cars</h3>
      <div>
        <label>Search : </label>
        <input
          className="border border-black"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
    </div>
  );
}

export default CarSearch;
