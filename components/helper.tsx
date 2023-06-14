import styles from "../styles/Home.module.css";

export const H1 = ({
  initialText,
  colouredText,
  endText,
  className,
}: {
  initialText: string;
  colouredText?: string;
  endText?: string;
  className?: string;
}) => {
  return (
    <h1 className={`text-[42px] font-bold ${className}
    max-lg:text-4xl
    max-md:text-[32px]
    `}>
      {initialText}
      <span
        className={`
        ${styles.gradientText}
        `}
      >
        {colouredText}
      </span>
      {endText}
    </h1>
  );
};
export const H2 = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return <h2 className={`text-2xl font-bold ${className}`}>{text}</h2>;
};
export const H4 = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return <h4 className={`text-xl font-bold ${className}`}>{text}</h4>;
};
export const H3 = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return <h2 className={`text-[22px] font-bold ${className}`}>{text}</h2>;
};
export const H5 = ({ text, className }: { text: any; className?: string }) => {
  return <h5 className={`text-lg font-bold ${className}`}>{text}</h5>;
};
export const H6 = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return <h6 className={`text-base font-bold ${className}`}>{text}</h6>;
};

export const P1 = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return <p className={`text-base ${className}`}>{text}</p>;
};
export const P2 = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return <p className={`text-base ${className}`}>{text}</p>;
};
export const P3 = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return <p className={`text-base ${className}`}>{text}</p>;
};
export const P4 = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return <p className={`text-base ${className}`}>{text}</p>;
};
export const P5 = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return <p className={`text-[15px] ${className}`}>{text}</p>;
};
export const P6 = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return <p className={`text-[14px] ${className}`}>{text}</p>;
};
