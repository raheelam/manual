import ED from "./ED";
import Hair from "./Hair";

const Services = () => {
  return (
    <div className="w-full mb-6 sm:mb-16 xl:mt-16 xl:mb-20 sm:w-5/6 xl:w-3/5  h-auto mx-auto text-base sm:text-lg  xl:text-xl">
      <h1 className="text-center text-2xl my-3 sm:my-10 sm:text-4xl xl:text-5xl">
        What we can help with
      </h1>
      <Hair />
      <ED />
    </div>
  );
};
export default Services;
