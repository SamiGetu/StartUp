export const TestimonialCard = ({
  image,
  name,
  testimonial,
}: {
  image: string;
  name: string;
  role: string;
  testimonial: string;
}) => {
  return (
    <div className="w-[30rem] border border-gray-300 shadow-lg bg-gray-100 rounded-lg p-6 flex flex-col items-center space-y-5">
      <img
        className="w-24 h-24 rounded-full object-cover mb-4"
        src={image}
        alt={name}
      />
      <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
      <p className="text-gray-600 text-center mb-4">{testimonial}</p>
    </div>
  );
};
