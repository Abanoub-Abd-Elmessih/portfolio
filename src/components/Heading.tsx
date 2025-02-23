import { twMerge } from "tailwind-merge";
import { Divider } from "./Divider";

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
    <div className={twMerge("text-center", className ?? "")}>
      <p>{label}</p>
      <h4 className="flex items-center gap-3 justify-center text-4xl">
        <Divider /> {title} <Divider />
      </h4>
    </div>
  );
};
