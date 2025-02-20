import React from "react";

export const CollapseBtn = ({
  id,
  text,
  children,
  prevText,
}: {
  id: string;
  text: string;
  prevText: string;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <p className="m-0 d-inline">{prevText}</p>
      <div className="collapse" id={id}>
        {children}
      </div>
      <button
        className="bg-transparent border-0 fw-bold"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#${id}`}
        aria-expanded="false"
        aria-controls={id}
      >
        {text}
      </button>
    </div>
  );
};
