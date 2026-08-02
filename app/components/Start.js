"use client";

import React, { useEffect, useState, useRef } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Start = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 2;
  const nextVideoRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => (prev < totalVideos ? prev + 1 : prev));
  };

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex);
  };

  useEffect(() => {
    if (loadedVideos === totalVideos) {
      setIsLoading(false);
    }
    if (!isLoading) {
      document.body.style.overflow = "auto";
      window.scrollTo({ top: 0 });
    } else {
      document.body.style.overflow = "hidden";
    }
    const fallback = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => {
      clearTimeout(fallback);
    };
  }, [loadedVideos, isLoading]);

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power.inOut",
          onStart: () => nextVideoRef.current.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true },
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
      borderRadius: "0 0 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  const getVideoSrc = (index) => `/videos/zzz-trailer-${index}.mp4`;

  return (
    <div id="start" className="relative h-dvh w-screen overflow-x-hidden">
      {/* Loading screen */}
      {isLoading && (
        <div className="fixed flex items-end justify-end z-50 h-dvh w-screen overflow-hidden bg-[var(--white-100)]">
          <Image
            src="/img/Bangboo_Net_Loading.webp"
            alt="loading_bangboo"
            width={300}
            height={300}
          />
        </div>
      )}

      {/* Main video frame */}
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-[var(--white-300)]"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVdClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                ref={nextVideoRef}
                src={getVideoSrc(upcomingVideoIndex)}
                poster="/img/start-default.webp"
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
              />
            </div>
          </div>
          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            poster="/img/start-default.webp"
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
          <video
            src={getVideoSrc(currentIndex)}
            poster="/img/start-default.webp"
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>
        <h1 className="special-font start-heading absolute bottom-5 right-5 z-40 text-[var(--white-100)]">
          <b>E</b>hn-na<b>!</b>
        </h1>
        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="start-heading text-[var(--white-300)]">
              Zenless Zone Zero
            </h1>
            <p className="mb-5 max-w-64 ja-jp text-[var(--white-100)]">
              Welcome to New Eridu —
              <br />
              Where Humanity Rises Anew!
            </p>
            <Button
              id="watch-trailer"
              title="Watch Trailer"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-[var(--yellow-300)] flex-center gap-1"
              href="https://www.youtube.com/watch?v=KGOynaQoofc"
            />
          </div>
        </div>
      </div>
      <h1 className="special-font start-heading absolute bottom-5 right-5 text-[var(--black-300)]">
        <b>E</b>hn-na<b>!</b>
      </h1>
    </div>
  );
};

export default Start;
