import React from "react";
import "./App.css";
import { GridComponent } from "@syncfusion/ej2-react-grids";
import data from "./data.json";

const App = () => {
  return (
    <div style={{ margin: "10%", marginTop: "5%" }}>
      <GridComponent dataSource={data} />
    </div>
  );
};

export default App;
