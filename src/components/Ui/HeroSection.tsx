export const HeroSection = ({ Title }: { Title: string }) => {
  return (
    <div className="h-[80vh] w-full flex justify-center items-center bg-[url('/images/about.jpg')] bg-center bg-cover bg-no-repeat bg-fixed">
      <h1 className="text-[7rem] font-bold text-white">{Title}</h1>
    </div>
  );
};
