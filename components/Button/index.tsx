import React from "react";
import Primary from "./Primary";
import Secondary from "./Secondary";

interface ComponentProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}
const Button: React.FC<ComponentProps> = ({ variant, children, ...rest }) => {
  if (variant === "secondary")
    return <Secondary {...rest}>{children}</Secondary>;
  return <Primary {...rest}>{children}</Primary>;
};

export default Button;
