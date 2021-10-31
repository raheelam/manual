import Image from "next/image";

const SocialIcon = ({ alt, src, href }) => {
  return (
    <a className=" hover:bg-primarySolid hover:rounded " href={href}>
      <Image width="15px" height="15px" alt={alt} src={src} />
    </a>
  );
};
export default SocialIcon;
