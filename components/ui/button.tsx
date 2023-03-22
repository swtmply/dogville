import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const Button = ({ icon, children, ...props }: ButtonProps) => {
  return (
    <button {...props}>
      {icon && icon}
      {children}
    </button>
  );
};

export default Button;
