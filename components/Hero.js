const Hero = ({ setIsQuizMode }) => {
  return (
    <section className="flex bg-white pl-8 sm:l-12  sm:bg-heroBg bg-top sm:bg-right bg-no-repeat bg-hero-image bg-contain landscape:bg-cover h-1/3  landscape:h-full tablet:h-3/5 laptop:h-full   ">
      <div className="mt-3 sm:mt-6  md:mt-5 lg:mt-8 desktop:mt-11  tablet:ml-20 desktop:ml-48  w-1/2 h-3/4">
        <img className=" w-6 sm:w-10" alt="logo" src="/images/logo.png" />
        <div className="mt-3 landscape:mt-10 laptop:mt-20 2xl:mt-40 w-full sm:w-5/6  tablet:w-3/5">
          <h1 className="text-base mb-1 landscape:mb-2 laptop:mb-5 font-extrabold sm:font-normal sm:text-lg landscape:text-3xl laptop:text-5xl 2xl:text-7xl">
            <span className="sm:block mb-0"> Be good </span>
            to yourself
          </h1>
          <p className="text-xs sm:text-sm lg:text-lg">
            We’re working around the clock to bring you a holistic approach to
            your wellness. From top to bottom, inside and out.
          </p>
          <button
            onClick={() => setIsQuizMode(true)}
            className="inline-block  bg-sonAccent hover:bg-red-800 mt-2 sm:mt-5 text-white p-1 sm:p-3 text-xs sm:text-sm"
          >
            Take the quiz
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
