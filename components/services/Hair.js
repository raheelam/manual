const Hair = () => {
  return (
    <section className="h-auto text-left bg-white  p-5 sm:py-0 my-3 sm:my-10 xl:mb-20">
      <div className="grid  grid-cols-1  sm:flex sm:flex-row-reverse h-auto w-full    ">
        <div className="bg-one-image m-auto bg-contain bg-no-repeat bg-right-bottom pr-20 sm:-ml-3 lg:-ml-5 xl:-ml-7 flex items-center  sm:pl-20 sm:pr-0 xl:pl-24   w-full h-auto  sm:h-64     sm:bg-left-bottom">
          <div>
            <h3 className="text-lg lg:text-3xl font-bold mb-2">Hair loss</h3>
            <p className="block mb-2">
              Hair loss needn’t be irreversible. We can help!
            </p>

            <p>
              We’re working around the clock to bring you a holistic approach to
              your wellness. From top to bottom, inside and out.
            </p>
          </div>
        </div>
        <div className="w-3/4  h-80   bg-hair-image m-auto  lg:bg-top bg-cover lg:bg-contain   mt-10 sm:mt-0  lg:w-4/5 xl:w-1/2  sm:h-72  bg-no-repeat "></div>
      </div>
    </section>
  );
};

export default Hair;
