import React from "react";
import { FaDiscord, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";
const links = [
  { href: "https://www.youtube.com/@ZZZ_Official", icon: <FaYoutube /> },
  { href: "https://x.com/ZZZ_EN", icon: <FaTwitter /> },
  { href: "https://www.twitch.tv/zenlesszonezero", icon: <FaTwitch /> },
  { href: "https://discord.com/invite/zenlesszonezero", icon: <FaDiscord /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[var(--purple-300)] py-4 text-[var(--black-300)]">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="ja-jp text-center text-sm md:text-left">
          &copy; 2024 Hoyoverse. All rights reserved.
        </p>
        <div className="flex justify-center gap-4 md:justify-start">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--black-300)] transition-colors duration-500 ease-in-out hover:text-[var(--white-300)]"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <a
          href="https://zenless.hoyoverse.com/en-us/company/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="ja-jp text-center text-sm hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
