export const StatementsCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 border-l border-neutral-300">
      <img src={icon} alt="" className="w-[7rem]" />
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-neutral-600 w-[70%] text-center">{description}</p>
      </div>
    </div>
  );
};
