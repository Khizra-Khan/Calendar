import React from "react";
import moment from "moment";
import CalendarHeading from "./components/Calendar/CalendarHeading";
import Container from "./components/Container/Container";
import "./App.css";

function App() {
  const year = moment().format("YYYY");
  return (
    <div className="App">
      <CalendarHeading key={Math.random} year={year} />
      <Container year={year} />
    </div>
  );
}

export default App;
