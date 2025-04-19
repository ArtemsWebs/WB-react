import { InputHTMLAttributes } from "react";
import { TbCameraAi } from "react-icons/tb";
import clsx from "clsx";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isMobile?: boolean;
}

export const SearchInput = ({
  placeholder,
  isMobile,
  ...props
}: SearchInputProps) => {
  return (
    <div
      className={clsx(
        "flex items-center relative",
        isMobile ? "w-full" : "w-1/2"
      )}
    >
      <label htmlFor="main-search-input" className="absolute right-[3%]">
        <TbCameraAi size={32} />
      </label>
      <input
        {...props}
        placeholder={placeholder}
        type="text"
        className={clsx(
          "bg-white py-[17px] pl-[20px] pr-[100px] rounded-2xl outline-none w-full",
          props.className
        )}
      />
    </div>
  );
};
