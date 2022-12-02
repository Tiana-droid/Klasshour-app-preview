import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppLayout from "./Layouts/Index";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </>
  );
}

export default App;
