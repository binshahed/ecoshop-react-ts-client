import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../home/Home";

// const Home = React.lazy(() => import("../home/Home"));

const Main = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
