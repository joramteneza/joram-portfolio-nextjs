import React from "react";

interface ComponentProps extends React.HTMLAttributes<HTMLButtonElement> {}
const Base: React.FC<ComponentProps> = ({ children, className, ...rest }) => {
  return (
    <button
      className={`px-2 py-2 rounded-full items-center justify-center font-semibold text-base tracking-wider ${className} min-w-[300px] min-h-[85px]`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Base;
