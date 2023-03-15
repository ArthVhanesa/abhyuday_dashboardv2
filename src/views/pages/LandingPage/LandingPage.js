import React from "react";
import img from "../../../assets/images/logo.png";
import earth from "../../../assets/images/planet-earth.png";
import metamask from "../../../assets/images/Metamask.png";
import document from "../../../assets/images/documentation.png";
import secure from "../../../assets/images/secure-document.png";
import transaction from "../../../assets/images/transaction.png";
import { Link } from "react-router-dom";
import "./index.css";
import "./animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { useRef } from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import LiveChat from "../../../ui-component/LiveChat";
import { LoginUser } from "functions/UserFunctions/LoginUser";

function Home() {
	AOS.init();
	AOS.refresh();

	const tawkMessengerRef = useRef();

	function handleMinimize() {
		tawkMessengerRef.current.minimize();
	}



	return (
    <>
      {/* logo */}
      <div className="flex flex-row content-center p-8 animate__animated animate__fadeInLeft">
        <img src={img} alt="Logo" className="h-16" />
        {/* <div className='pl-2 pt-1'>
					<p className='text-left font-medium'>Revenue Department</p>
					<p className='text-sm text-left'>Government Of India</p>
				</div> */}
      </div>

      {/* earth image */}
      {/* <img
        src={earth}
        alt="earth"
        className="absolute top-0 right-0 w-1/3 animate__animated animate__fadeInRight"
      /> */}
      <div>
        <Player
          autoplay
          loop
          src="https://lottie.host/7681071c-9c42-4078-a2da-464bdc874f7d/Fz4y7qRpyM.json"
          // style={{ height: "300px", width: "300px" }}
          className="absolute top-16 -right-16  w-3/5"
        >
          {/* <Controls
          visible={true}
          buttons={["play", "repeat", "frame", "debug"]}
        /> */}
        </Player>
      </div>

      {/* main text */}
      <div className="p-24 grid content-start w-3/5 mt-16 mb-16 ">
        <h4 className="animate__animated animate__fadeInLeft animate__delay-1s lg:text-7xl md:text-5xl text-left local font-medium text-[#402A8C] ">
          Land Registry Using SSI
        </h4>
        <p
          className="text-left lg:text-3xl sm:text-xl 
         font-medium pt-5 reg-font text-[#402A8C] animate__animated animate__fadeInLeft animate__delay-2s"
        >
          The Future of Secure Property Transfers.
        </p>
        <div className="flex space-x-2 justify-start pt-5 animate__animated animate__fadeIn animate__delay-3s">
          <button
            type="button"
            className="inline-block px-5 py-2.5 bg-[#402A8C] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            <div className="flex flex-row content-center">
              <img src={metamask} alt="metamask" className="h-8 pr-1" />
              <a onClick={LoginUser}>
                {" "}
                <p className="text-base m-1">Login with metamask</p>
              </a>
            </div>
          </button>
        </div>
      </div>

      {/* feature card */}
      <div className="flex flex-row w-4/5 m-auto gap-4 mb-48">
        <div className="flex flex-col w-1/2 grid gap-4 ">
          <div
            className="bg-[#FEF4EC] w-full relative rounded-xl "
            data-aos="fade-down-right"
            data-aos-duration="2000"
          >
            <img
              src={secure}
              alt="Secure-transaction"
              className="h-36 absolute top-0 right-0 pr-4 pt-8"
            />
            <h4 className="feature font-semibold text-2xl text-left pt-40 pl-12 pb-8 text-[#402A8C]">
              Improved security
            </h4>
          </div>

          <div
            className="bg-[#EFF1FF] w-full relative rounded-xl "
            data-aos="fade-up-right"
            data-aos-duration="2000"
          >
            <img
              src={document}
              alt="Secure-transaction"
              className="h-36 absolute top-0 right-0 pr-8 pt-4"
            />
            <h4 className="feature font-semibold text-2xl text-left  pt-40 pl-12 pb-8 text-[#402A8C]">
              Tamper proof data
            </h4>
          </div>
        </div>

        <div
          className="bg-[#D7FCEB] w-1/2 rounded-xl"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <img
            src={transaction}
            alt="High-speed transaction"
            className="h-64 mx-auto mt-8"
          />
          <p className="feature font-semibold text-2xl text-left mt-8 text-center px-12 pb-8 text-[#402A8C]">
            High-speed transaction with successful track record
          </p>
        </div>
      </div>
      <LiveChat />
    </>
  );
}
export default Home;
