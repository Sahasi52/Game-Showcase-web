import React from "react";

const Button = ({ title, id, rightIcon, leftIcon, containerClass, href }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-[var(--white-100)] px-7 py-3 text-[var(--black-300)] ${containerClass}`}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={containerClass}
      >
        {leftIcon}
        <span className="relative incline-flex overflow-hidden ja-jp text-xs uppercase">
          <div>{title}</div>
        </span>
        {rightIcon}
      </a>
    </button>
  );
};

export default Button;
