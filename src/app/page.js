import Image from "next/image";
import Navbar from "./components/navbar";
import heroD from "../../images/image-hero-desktop.png";
import heroM from "../../images/image-hero-mobile.png";
import databiz from "../../images/client-databiz.svg";
import audiophile from "../../images/client-audiophile.svg";
import maker from "../../images/client-maker.svg";
import meet from "../../images/client-meet.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50  ">
      <Navbar />
      <div className="flex w-full items-center justify-center ">
        <div className="grid md:grid-flow-col md:items-center justify-center md:p-6 md:mt-[20px] ">
          <div className="  block md:hidden ">
            <Image
              src={heroM}
              alt="heroM"
              width={360}
              height={300}
              className=" "
            />
          </div>
          <div className=" flex flex-col md:block w-[360px] md:w-[500px] md:h-[650px] md:text-balance   ">
            <h1 className=" text-black text-[30px] md:text-[60px] font-bold mt-5 md:mt-28  font-Epilogue text-center md:text-left ">
              Make remote work
            </h1>
            <p className=" text-gray-500 text-[14px] md:text-[18px] mt-8 font-Epilogue font-semibold text-center md:text-left  ">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <button className=" mt-8 rounded-2xl w-[130px] h-[50px] text-white bg-black place-self-center font-Epilogue ">
              Learn More
            </button>
            <div className=" mt-10 md:mt-32 p-2 md:pt-2 h-[50px] flex flex-row items-center justify-center md:justify-start ">
              <Image
                src={databiz}
                alt="databiz"
                width={100}
                height={40}
                className=" mr-5 w-auto h-[10px] md:h-[15px] "
              />
              <Image
                src={audiophile}
                alt="audiophile"
                width={100}
                height={40}
                className="mr-5 w-auto  h-[20px] md:h-[30px] "
              />
              <Image
                src={meet}
                alt="meet"
                width={100}
                height={40}
                className="mr-5 w-auto  h-[17px] md:h-[22px] "
              />
              <Image
                src={maker}
                alt="maker"
                width={100}
                height={40}
                className=" w-auto  h-[15px] md:h-[25px] "
              />
            </div>
          </div>
          <div className="w-[500px] h-auto ml-10 hidden md:block ">
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
      <div className="mt-auto mb-4 text-[11px] md:text-[16px] w-[290px] md:w-[430px] place-self-center text-black ">
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
