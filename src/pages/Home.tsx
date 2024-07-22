import Marquee from "react-fast-marquee";
import cbe from "../assets/icon/Commercial Bank of Ethiopia Logo (1).svg";
import opp from "../assets/icon/Cooperative Bank of Oromia Logo.svg";
import dashen from "../assets/icon/Dashen Bank Logo.svg";
import awash from "../assets/icon/Awash International Bank Logo.svg";
import ethiotele from "../assets/icon/Ethio Telecom Logo.svg";
import national from "../assets/icon/National Bank of Ethiopia Logo.svg";
import ab from "../assets/images/macro-shot-financial-concept.jpg";
import lucy from "../assets/icon/lucy_mobile_logo.png";
import saving from "../assets/icon/salary.png";
import loan from "../assets/icon/loan.png";
import { Card } from "../components/Ui/Card";
import { TestimonialCard } from "../components/Ui/TestimonialCard";
import { Button } from "../components/Ui/Button";
import { ImagesSlideShow } from "../components/Ui/ImagesSlideShow";

export const Home = () => {
  const mediaIcons = [
    { Img: cbe },
    { Img: opp },
    { Img: dashen },
    { Img: awash },
    { Img: national },
    { Img: lucy },
    { Img: ethiotele },
  ];

  const testimonials = [
    {
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      name: "Avinash Kr",
      role: "Co-Founder at xyz",
      testimonial:
        "Like this video and ask your questions in the comment section. Don't forget to subscribe to Easy Tutorials YouTube channel to watch more videos of website designing, digital marketing, and Photoshop.",
    },
    {
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      name: "Bharat Kunal",
      role: "Manager at xyz",
      testimonial:
        "Like this video and ask your questions in the comment section. Don't forget to subscribe to Easy Tutorials YouTube channel to watch more videos of website designing, digital marketing, and Photoshop.",
    },
    {
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      name: "Prabhakar D",
      role: "Founder / CEO at xyz",
      testimonial:
        "Like this video and ask your questions in the comment section. Don't forget to subscribe to Easy Tutorials YouTube channel to watch more videos of website designing, digital marketing, and Photoshop.",
    },
  ];
  return (
    <>
      <section>
        <ImagesSlideShow />
      </section>
      <section className="mt-[5rem] py-[10rem]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-center p-10">SERVICES</h1>

          <div className="flex  justify-center items-center gap-10">
            <Card
              Url={saving}
              Title={"Saving"}
              Description={
                "Secure your future with our trusted saving services. Whether you're planning for a rainy day or working towards"
              }
            />
            <Card
              Url={loan}
              Title={"Loan"}
              Description={
                "Achieve your financial goals with our flexible loan offerings. Whether you're starting a business, investing"
              }
            />
            <Card
              Url={loan}
              Title={"Loan"}
              Description={
                "Achieve your financial goals with our flexible loan offerings. Whether you're starting a business, investing"
              }
            />
          </div>
        </div>
      </section>

      <section>
        {" "}
        <div className="py-20">
          <div className="flex flex-col md:flex-row items-center justify-center md:items-start gap-10 px-6 py-12 bg-gray-100 rounded-lg shadow-lg">
            <img
              src={ab}
              alt="About Us"
              className="w-full md:w-[40rem] h-auto rounded-2xl shadow-md"
            />
            <div className="w-[30%] max-w-lg">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                About
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
                pariatur sed iure repudiandae quaerat cum totam dignissimos
                eveniet rem accusamus itaque inventore tempora natus nam
                recusandae vel quos officiis, necessitatibus esse molestiae hic
                fuga veritatis! Explicabo nulla corporis dignissimos quaerat!
              </p>
              <Button
                title={"View More"}
                icon={""}
                Style={"bg-[#EFC45A] text-neutral-800"}
                onclick={() => {
                  ("");
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-[10rem]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-center p-10">TESTIMONIALS</h2>

          <div className="flex justify-center items-center gap-10">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                image={testimonial.image}
                name={testimonial.name}
                role={testimonial.role}
                testimonial={testimonial.testimonial}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="mt-20 h-[50vh]">
        <h1 className="text-4xl font-bold text-center my-5 font-mono">
          Our Partners
        </h1>
        <Marquee autoFill={false} pauseOnClick={false} speed={60}>
          <div className="flex justify-center items-center gap-[10rem] mr-[10rem] mt-10">
            {mediaIcons.map((icon, index) => (
              <img
                key={index}
                src={icon.Img}
                className="object-fit w-[10rem]"
                alt={""}
              />
            ))}
          </div>
        </Marquee>
      </section>
    </>
  );
};
