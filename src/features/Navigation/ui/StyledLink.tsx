import { Link } from "@tanstack/react-router";
import { LinkProps } from "@tanstack/react-router";
import clsx from "clsx";

interface StyledLinkProps extends LinkProps {
  className?: string;
}

const StyledLink = ({ children, className, ...props }: StyledLinkProps) => {
  return (
    <Link
      className={clsx(
        "flex flex-col items-center transition-colors duration-300 text-slate-200 hover:text-white",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export default StyledLink;
