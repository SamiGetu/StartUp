import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Layout } from "../layouts/Layout";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Profile } from "../pages/Profile";
import { ScrollToTop } from "../components/Ui/ScrollToTop";

export const Protected = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="profile/:name" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
};
