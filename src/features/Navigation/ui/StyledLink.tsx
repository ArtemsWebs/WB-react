import { Link } from "@tanstack/react-router";

import { LinkProps } from "@tanstack/react-router";

const StyledLink = ({ children, ...props }: LinkProps) => {
  return (
    <Link
      className="flex flex-col items-center transition-colors duration-300 text-slate-200 hover:text-white"
      {...props}
    >
      {children}
    </Link>
  );
};

export default StyledLink;
