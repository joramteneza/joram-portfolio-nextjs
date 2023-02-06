import React from "react";
import Base from "./Base";

interface ComponentProps extends React.HTMLAttributes<HTMLButtonElement> {}

const Secondary: React.FC<ComponentProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <Base className={`border-2 border-black text-black ${className}`} {...rest}>
      {children}
    </Base>
  );
};

export default Secondary;
