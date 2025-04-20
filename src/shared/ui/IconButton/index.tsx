import { ButtonHTMLAttributes } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const IconButton = ({ children, ...props }: IconButtonProps) => {
  return (
    <button
      className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};
