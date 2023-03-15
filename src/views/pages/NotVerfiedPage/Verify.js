import React from 'react'
import "../LandingPage/index.css";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

function Not_Verified() {
    return (
      <div>
        <Player
          autoplay
          loop
          src="https://assets10.lottiefiles.com/packages/lf20_ttvteyvs.json"
          // style={{ height: "300px", width: "300px" }}
          className="m-auto w-1/4"
        >
          {/* <Controls
          visible={true}
          buttons={["play", "repeat", "frame", "debug"]}
        /> */}
        </Player>
        <h1 className="text-5xl pt-16 font-bold local text-center">
          You are not verified yet!
        </h1>
        <h1 className="text-xl pt-16 font-bold reg-font text-center">
          We will Verify you soon!
        </h1>
      </div>
    );
}

export default Not_Verified;