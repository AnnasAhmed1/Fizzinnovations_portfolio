import React from "react";
import styles from "../styles/Home.module.css";

const TextWithBackground = ({
  text,
  fontSize,
}: {
  text: string;
  fontSize?: string;
}) => {
  return (
    <div>
      <div
        className="
        bg-white
        text-white
        rounded-[50px]
        w-fit
        py-2
        px-7
        shadow-custom
        animate-text-bottom-fade-in
        "
      >
        <p
          className={`
            ${styles.gradientText}
            font-bold
            max-md:text-base
           ${fontSize ? `text-[${fontSize}px]` : "text-[20px]"}
            `}
        >
          {text} ~
        </p>
      </div>
    </div>
  );
};

export default TextWithBackground;
