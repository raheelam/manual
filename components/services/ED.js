const ED = () => {
  return (
    <section className="h-auto text-left bg-white  p-5 sm:py-0 my-3 sm:my-5">
      <div className="grid  grid-cols-1  sm:flex  h-auto w-full    ">
        <div className="bg-two-image m-auto bg-contain bg-no-repeat bg-right-bottom pr-20 sm:-mr-3 lg:-mr-5 xl:-mr-10 flex items-center  sm:pr-20 sm:pl-0 xl:pr-24   w-full h-auto  sm:h-64     sm:bg-right-bottom">
          <div>
            <h3 className="text-lg lg:text-3xl font-bold mb-2">
              Erecetile dysfunction
            </h3>
            <p className="block mb-2">
              Erections can be a tricky thing. But no need to feel down!
            </p>

            <p>
              We’re working around the clock to bring you a holistic approach to
              your wellness. From top to bottom, inside and out.
            </p>
          </div>
        </div>
        <div className="w-3/4  h-80    bg-ED-image m-auto  lg:bg-top bg-cover lg:bg-contain   mt-10 sm:mt-0  lg:w-4/5 xl:w-1/2  sm:h-72  bg-no-repeat "></div>
      </div>
    </section>
  );
};
export default ED;
