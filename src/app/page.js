import Image from "next/image";
import Navbar from "./components/navbar";
import heroD from "../../images/image-hero-desktop.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <div className="w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="grid-cols-1 ">
          <div className="block w-[780px]">
            <h1 className="text-[40px] ">Make remote work</h1>
            <p className="text-[18px] ">
              Get your team in sync, no matter your location.
            </p>
            <button>Learn More</button>
          </div>
          <Image
            src={heroD}
            alt="heroD"
            width={780}
            height={980}
            className=" "
          />
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
