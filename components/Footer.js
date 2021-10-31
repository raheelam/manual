const Footer = () => {
  return (
    <footer className="bg-primaryLight   pt-3 sm:px-10 xl:px-40 pb-5 text-xs  sm:text-base lg:text-lg  ">
      <section className="flex justify-between p-3">
        <div className="">
          <img width="25px" src="/images/logo.png" />
        </div>
        <div>
          <h3 className="pb-3 font-bold"> Product</h3>
          <p> Popular</p>
          <p>Trending</p>
          <p>Guided</p>
          <p>Products</p>
        </div>
        <div>
          <h3 className="pb-3 font-bold"> Company</h3>
          <p>Press</p>
          <p>Mission</p>
          <p>Strategy</p>
          <p>About</p>
        </div>
        <div>
          <h3 className="pb-3 font-bold">Info</h3>
          <p>Support</p>
          <p>Customer Service</p>
          <p>Get started</p>
        </div>
        <div>
          <h3 className="pb-3 font-bold">Follow us</h3>
          <div className="grid gap-1 grid-cols-3 ">
            <a className=" hover:bg-primarySolid hover:rounded-full" href="#">
              <img className="w-4 sm:w-4 h-4 " src="/images/facebook.svg" />
            </a>
            <a className="hover:bg-primarySolid hover:rounded-full" href="#">
              <img className="w-4 sm:w-5 h-4" src="/images/google.svg" />
            </a>
            <a className="hover:bg-primarySolid hover:rounded-full" href="#">
              <img className="w-5 sm:w-8 h-4" src="/images/twitter.svg" />
            </a>
          </div>
        </div>
      </section>
      <hr className="border-hr"></hr>
      <p className="text-center mt-5">
        &copy; 2021 Manual. All rights reserved
      </p>
    </footer>
  );
};
export default Footer;
