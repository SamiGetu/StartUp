import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Button } from "./Button";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

export const ImagesSlideShow = () => {
  const properties = {
    prevArrow: (
      <button className="z-auto w-10 h-10 bg-white rounded-full flex justify-center items-center mx-5">
        <GrFormPrevious />
      </button>
    ),
    nextArrow: (
      <button className="w-10 h-10 bg-white rounded-full flex justify-center items-center mx-5">
        <MdOutlineNavigateNext />
      </button>
    ),
  };

  const images = [
    {
      url: "images/money.jpg",
      header: "Kefetcon",
      title: "Small Loans, Big Impact",
      descTitle: "Welcome",
      description:
        " to KefetaMicrofinance, your gateway to financial empowerment and growth! At KefetaMicrofinance, we are dedicated to making a positive impact on individuals and communities by providing accessible and innovative microfinance solutions.",
      path: "",
    },
    {
      url: "images/business.webp",
      header: "kefeta",
      title: "Micro Solutions, Major Opportunities",
      descTitle: "Welcome",
      description:
        " to KefetaMicrofinance, your gateway to financial empowerment and growth! At KefetaMicrofinance, we are dedicated to making a positive impact on individuals and communities by providing accessible and innovative microfinance solutions.",
      path: "",
    },
  ];

  return (
    <div className="-z-10">
      <Fade duration={2000} infinite={true} {...properties}>
        {images.map((item, index) => (
          <div key={index} className="">
            <div
              className="flex items-center justify-center w-full h-screen bg-cover"
              style={{ backgroundImage: `url(${item.url})` }}
            >
              <div className="bg-black/60 w-full h-full ">
                <div className="absolute top-[20rem] left-[10rem] space-y-2 z-10">
                  <p className="text-xl font-bold text-blue-300">
                    {item.header}
                  </p>
                  <h1 className="text-6xl text-white font-bold pb-5">
                    {item.title}
                  </h1>
                  <p className="w-[50%] text-white text-xl font-semibold pb-3 font-mono">
                    <span className="text-2xl font-bold text-[#EFC45A]">
                      {item.descTitle}
                    </span>
                    {item.description}
                  </p>
                  <Button
                    title={"Contact Us"}
                    icon={""}
                    Style={"bg-[#EFC45A] text-white "}
                    onclick={() => ""}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};
