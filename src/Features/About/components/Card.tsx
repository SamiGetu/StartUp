import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Card = ({
  id,
  image,
  title,
  name,
  desc,
}: {
  id: number;
  image: string;
  title: string;
  name: string;
  desc: string;
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/profile/${id}`, { state: { image, title, name, desc } });
  };
  return (
    <div className="flex flex-col justify-center items-center w-[25rem] p-10  relative cursor-pointer">
      <img
        src={image}
        alt=""
        className="w-[15rem] h-[15rem] rounded-full"
        onClick={handleClick}
      />

      <div
        className="flex flex-col justify-center items-center my-5"
        onClick={handleClick}
      >
        <p className="text-[#EFC45A] text-md font-bold ">{title}</p>

        <h1 className="text-2xl font-bold hover:underline">{name}</h1>

        <p className="text-neutral-600 w-[80%] h-[15vh] overflow-hidden  text-center">
          {desc}
        </p>
      </div>
      <div className="flex justify-center items-center gap-10">
        <div className="flex justify-center items-center w-7 h-7 rounded-full bg-[#EFC45A] text-white hover:bg-white hover:text-black">
          <FaFacebookF />
        </div>
        <div className="flex justify-center items-center w-7 h-7 rounded-full bg-[#EFC45A] text-white hover:bg-white hover:text-black">
          <FaXTwitter />
        </div>
        <div className="flex justify-center items-center w-7 h-7 rounded-full bg-[#EFC45A] text-white hover:bg-white hover:text-black">
          <FaLinkedinIn />
        </div>
      </div>
    </div>
  );
};
