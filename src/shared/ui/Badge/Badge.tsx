import { ReactNode } from "react";
import clsx from "clsx";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export const Badge = ({ children, className }: BadgeProps) => {
  return (
    <span
      className={clsx(
        "absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center",
        className
      )}
    >
      {children}
    </span>
  );
};
