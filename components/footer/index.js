import SocialIcon from "./SocialIcon";

const Footer = () => {
  return (
    <footer className="bg-primaryLight pt-3 sm:px-10 xl:px-40 pb-5 text-xs  sm:text-base lg:text-lg  ">
      <section className="flex justify-between p-3">
        <div>
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
        <div className="sm:w-24">
          <h3 className="pb-3 font-bold">Follow us</h3>
          <div className="flex flex-col justify-center grid gap-2  sm:gap-3 sm:grid-cols-3 ">
            <SocialIcon
              alt="facebook_logo"
              src="/images/facebook.svg"
              href="/"
            />
            <SocialIcon alt="google_logo" src="/images/google.svg" href="/" />

            <SocialIcon alt="twitter_logo" src="/images/twitter.svg" href="/" />
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
