import React from "react";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={`${clipClass} w-64 h-64`}>
    <img src={src} className="size-full object-cover" alt="" />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-[var(--black-300)] py-24 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-visible sm:block lg:left-20 lg:w-96">
          <ImageClipBox clipClass="contact-clip-path-1" src="/img/AI.webp" />
          <ImageClipBox
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
            src="/img/Bangboo.webp"
          />
        </div>
        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            clipClass="absolute md:scale-125 z-10 rotate-90"
            src="/img/Proxies.webp"
          />
          <ImageClipBox
            clipClass="character-clip-path md:scale-125 rotate-45"
            src="/img/Character_Background.webp"
          />
        </div>
        <div className="flex flex-col items-center text-center">
          <p className="ja-jp text-[10px] uppercase text-[var(--blue-300)]">
            Join Zenless Zone Zero
          </p>
          <p className="special-font mt-10 w-full en-us uppercase text-5xl text-[var(--blue-100)] leading-[0.9] md:text-[6rem]">
            Let&apos;<b>s</b> Play the <br /> New Er<b>a </b> of <br /> R
            <b>P</b>G Together
          </p>
          <Button
            title="Contact Us"
            containerClass="mt-10 cursor-pointer"
            href="https://support.hoyoverse.com/hc/en-us/sections/49608667148569-Zenless-Zone-Zero"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
