"use client";

import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Info = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="info" className="min-h-screen w-screen">
      <div className="relative mb-0 mt-36 flex flex-col items-center gap-5">
        <h2 className="ja-jp text-sm text-[var(--red-300)] uppercase md:text-[10px]">
          Attention Proxies!
        </h2>
        <AnimatedTitle
          title="The <b>H</b>ollows brought humanity to its knees.<br />Only <b>N</b>ew <b>E</b>ridu remains."
          containerClass="special-font mt-5 !text-[var(--black-300)] text-center"
        />
        <div className="info-subtext">
          <p>ZZZ is set in New Eridu, the last city.</p>
          <p>As a Proxy, you fight unknown threats and uncover secrets.</p>
        </div>
        <div className="h-dvh w-screen" id="clip">
          <div className="mask-clip-path info-image">
            <Image
              src="/img/Info_Background.webp"
              alt="background"
              width={1920}
              height={1080}
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
