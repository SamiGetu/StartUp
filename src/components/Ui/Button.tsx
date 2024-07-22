type ButtonProps = {
  title: string;
  icon: string;
  Style: string;
  onclick: () => void;
};

export const Button = ({ title, icon, Style, onclick }: ButtonProps) => {
  return (
    <div>
      <button
        className={`flex justify-center items-center gap-2 w-[8rem] p-2 rounded-md font-bold ${Style}`}
        onClick={onclick}
      >
        <span className="text-2xl font-semibold">{icon}</span>
        {title}
      </button>
    </div>
  );
};
