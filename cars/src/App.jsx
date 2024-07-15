import React from "react";
import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import CarValue from "./components/CarValue";
import CarSearch from "./components/CarSearch";

function App() {
  return (
    <div className="App flex flex-col max-w-screen-xl mx-auto items-center justify-center mt-36">
      <CarForm />
      <CarList />
      <CarValue />
      <CarSearch />
    </div>
  );
}

export default App;
