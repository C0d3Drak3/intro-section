import Image from "next/image";
import Navbar from "./components/navbar";
import heroD from "../../images/image-hero-desktop.png";
import heroM from "../../images/image-hero-mobile.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <div className="flex w-full items-center justify-center ">
        <div className="grid sm:grid-flow-col sm:items-center justify-center sm:p-6 sm:mt-[20px] ">
          <div className=" bg-orange-300 block sm:hidden ">
            <Image
              src={heroM}
              alt="heroM"
              width={360}
              height={300}
              className=" "
            />
          </div>
          <div className=" flex flex-col sm:block w-[360px] sm:w-[500px] sm:h-[650px] bg-slate-400 sm:text-balance   ">
            <h1 className=" text-[30px] sm:text-[60px] font-bold mt-5 sm:mt-28 bg-slate-500  font-Epilogue text-center sm:text-left ">
              Make remote work
            </h1>
            <p className="text-[18px] mt-8 font-Epilogue text-center sm:text-left  ">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <button className=" mt-8 rounded-2xl w-[130px] h-[50px] text-white bg-black place-self-center ">
              Learn More
            </button>
          </div>
          <div className="w-[500px] ml-10 bg-orange-300 hidden sm:block ">
            <Image
              src={heroD}
              alt="heroD"
              width={780}
              height={980}
              className=" "
            />
          </div>
        </div>
      </div>

      {/*Footer*/}
      <div className="mt-auto mb-4 text-[13px] sm:text-[16px] w-[375px] sm:w-[440px]">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="#" className="text-blue-500 hover:underline">
          Martín Otero
        </a>
        .
      </div>
    </main>
  );
}
