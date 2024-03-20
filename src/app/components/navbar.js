import Image from "next/image";
import logo from "../../../images/logo.svg";

export default function Navbar() {
  return (
    <div className=" bg-slate-400 w-full h-16">
      <div className="m-6">
        <Image src={logo} alt="logo" width={84} height={27} className=" " />
      </div>
    </div>
  );
}
