import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
// import Home from "../home/Home";

const Home = React.lazy(() => import("../home/Home"));

const Main = () => {
  return (
    <div>
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default Main;
