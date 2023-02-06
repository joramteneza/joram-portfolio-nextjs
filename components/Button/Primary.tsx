import React from "react";
import Base from "./Base";

interface ComponentProps extends React.HTMLAttributes<HTMLButtonElement> {}

const Primary: React.FC<ComponentProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <Base className={`bg-black text-primary-500 ${className}`} {...rest}>
      {children}
    </Base>
  );
};

export default Primary;
