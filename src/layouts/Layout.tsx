import { Header } from "./Header/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer/Footer";

export const Layout = () => {
  return (
    <>
      <div>
        <Header />
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};
