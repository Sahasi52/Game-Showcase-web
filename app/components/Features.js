"use client";

import { React, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef();
  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;
    const tiltX = (relativeY - 0.5) * 10;
    const tiltY = (relativeX - 0.5) * -10;
    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;

    setTransformStyle(newTransform);
  };
  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

const BentoCard = ({ src, poster, title, description }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        poster={poster}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-[var(--white-100)]">
        <div>
          <h1 className="bento-title text-[2.25rem] special-font">{title}</h1>
          {description && (
            <p className="neue-a mt-3 max-w-64 text-xs md:text-base">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="bg-[var(--black-300)] pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="ja-jp text-lg text-[var(--white-100)]">
            Inside the Action RPG
          </p>
          <p className="max-w-md en-us text-lg text-[var(--white-100)] opacity-50">
            Into a post-apocalyptic semi–open world with a retro-futuristic
            style, featuring fast-paced combat using Agents with Specialties and
            Attributes.
          </p>
        </div>
        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            poster="/img/cutscene-1-default.webp"
            src="/videos/zzz-cutscene-1.mp4"
            title={
              <>
                Pre<b>v</b>iew
              </>
            }
            description="A cross-platform live-service game with regular updates and rewards."
          />
        </BentoTilt>
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 col-span-2 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              poster="/img/agent-default.webp"
              src="/videos/zzz-agent.mp4"
              title={
                <>
                  A<b>g</b>ent
                </>
              }
              description="Agents are unique playable characters with abilities and combat."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 col-span-2 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              poster="/img/wengine-default.webp"
              src="/videos/zzz-wengine.mp4"
              title={
                <>
                  <b>W</b>-eng<b>i</b>ne
                </>
              }
              description="W-Engines are special weapons with stats and effects."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 col-span-2 me-14 md:col-span-1 md:me-0">
            <BentoCard
              poster="/img/bangboo-default.webp"
              src="/videos/zzz-bangboo.mp4"
              title={
                <>
                  <b>B</b>angb0<b>o</b>
                </>
              }
              description="Bangboos are robot companions with boosts and skills."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_2">
            <div className="flex flex-col justify-between bg-[var(--purple-300)] p-5">
              <h1 className="bento-title text-[1.75rem] special-font max-w-32 text-[var(--black-300)] md:text-[2.25rem]">
                <b>M</b>ore <b>c</b>oming <b>s</b>oon!
              </h1>
              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </BentoTilt>
          <BentoTilt className="bento-tilt_2">
            <video
              poster="/img/cutscene-2-default.webp"
              src="/videos/zzz-cutscene-2.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
