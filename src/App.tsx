import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppLayout from "./Layouts/Index";
import UserContext from "./PublicPages/context/userContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserContext>
          <AppLayout />
        </UserContext>
      </BrowserRouter>
    </>
  );
}

export default App;
