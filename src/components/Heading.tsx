import { twMerge } from "tailwind-merge";
import { Divider } from "./Divider";
import { MotionDiv } from "./MotionDiv";

export const Heading = ({
  label,
  title,
  className,
}: {
  label: string;
  title: string;
  className?: string;
}) => {
  return (
    <MotionDiv
      className={twMerge("text-center select-none", className ?? "")}
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        type: "spring",
        stiffness: 80,
      }}
    >
      <p>{label}</p>
      <h4 className="flex items-center gap-3 justify-center text-3xl xl:text-4xl">
        <Divider /> {title} <Divider />
      </h4>
    </MotionDiv>
  );
};
