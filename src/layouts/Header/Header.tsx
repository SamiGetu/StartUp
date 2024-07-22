import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [change, setChange] = useState(false);
  const Links = [
    { Name: "Home", path: "/" },
    { Name: "Services", path: "/" },
    { Name: "Document", path: "/" },
    { Name: "About Us", path: "/about" },
  ];

  const ChangeColor = () => {
    if (window.scrollY >= 80) {
      setChange(true);
    } else {
      setChange(false);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(ChangeColor);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={`${
          change
            ? "w-full h-[5rem] bg-white text-black font-medium fixed  flex justify-center items-center  duration-[1s] z-20"
            : "w-full h-[5rem] flex items-center justify-center  top-7 z-50 text-white absolute"
        } `}
      >
        <ul className="flex justify-center items-center gap-10  font-medium">
          <span className="absolute left-10">
            <h1 className="text-4xl font-bold ">
              Kefta <span className="text-2xl text-[#EFC45A]">MF</span>
            </h1>
          </span>
          {Links.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>{item.Name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
