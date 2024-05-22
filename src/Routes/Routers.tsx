import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Layout } from "../layouts/Layout";
import { Home } from "../pages/Home";

export const Protected = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};
