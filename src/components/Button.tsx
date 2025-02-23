import { ReactNode } from "react";

export const Button = ({
  children,
  type = "button",
}: {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
}) => {
  return (
    <button
      className="bg-black text-white text-sm px-7 py-2 rounded-md hover:bg-black/90 duration-300"
      type={type}
    >
      {children}
    </button>
  );
};
