"use client";

import { React, useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import RoundedCorners from "./RoundedCorners";
import Button from "./Button";
import Image from "next/image";

const Story = () => {
  const frameRef = useRef("null");
  const handleMouseLeave = () => {
    const element = frameRef.current;

    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: "power1.out",
    });
  };
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 1000,
      ease: "power1.out",
    });
  };

  return (
    <section
      id="story"
      className="min-h-dvh w-screen bg-[var(--black-300)] text-[var(--blue-100)]"
    >
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="ja-jp text-sm uppercase md:text-[10px]">
          A World Beyond the Hollows
        </p>
        <div className="relative size-full pl-30">
          <AnimatedTitle
            title="Jo<b>u</b>rney of the Pro<b>x</b>ies <br /> in New E<b>r</b>idu"
            sectionId="#story"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10 text-center special-font"
          />
          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <Image
                  ref={frameRef}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                  src="/img/Story_Front.webp"
                  alt="front"
                  width={1000}
                  height={1000}
                  className="object-contain"
                />
              </div>
            </div>
            <RoundedCorners />
          </div>
        </div>
        <div className="-mt-10 flex w-full justify-center md:-mt-32 md:me-44 md:justify-end">
          <div className="h-full w-fit items-center md:items-start">
            <p className="-mt-125 md:-mt-100 lg:mt-45 max-w-sm text-center ja-jp text-[var(--purple-100)] md:text-start mix-blend-difference">
              Proxies guide people through dangerous Hollows using advanced
              technology. After losing their AI system, Fairy, they uncover
              secrets and conspiracies across New Eridu.
            </p>
            <Button
              id="story-button"
              title="discover prologue"
              containerClass="mt-5"
              href="https://zenless-zone-zero.fandom.com/wiki/Prologue:_Intermission"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
