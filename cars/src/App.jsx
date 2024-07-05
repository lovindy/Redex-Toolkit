import React from "react";
import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import CarValue from "./components/CarValue";
import CarSearch from "./components/CarSearch";

function App() {
  return (
    <div className="App">
      <CarForm />
      <CarValue />
      <CarList />
      <CarSearch />
    </div>
  );
}

export default App;
