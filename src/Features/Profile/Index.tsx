import { useLocation, useParams } from "react-router-dom";
import { HeroSection } from "../../components/Ui/HeroSection";

export const Index = () => {
  useParams<{ id: string }>();
  const { state } = useLocation();
  const { image, title, name, desc } = state || {};

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <HeroSection Title={""} />
      <div className="flex justify-center items-start gap-20 pt-20 my-20">
        <img src={image} alt="" className="w-[30rem]" />
        <div className="w-[50%]">
          <h1 className="text-5xl font-bold">{name}</h1>
          <p className="text-xl font-medium">{title}</p>
          <div className="my-5">
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
