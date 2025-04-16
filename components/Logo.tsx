import Image from "next/image";

const Logo = () => {
  return (
    <div className="relative w-32 h-10">
      <Image alt="Genformic Logo" src={"/Genformic-logo.svg"} fill/>
    </div>
  );
};

export default Logo;
