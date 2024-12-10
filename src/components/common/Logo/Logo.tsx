import Image from "next/image";

const Logo = () => {
  return (
    <Image src={"/common/logo.png"} alt="логотип" width={200} height={50} />
  );
};

export default Logo;
