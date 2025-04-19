import { ReactNode } from "react";
import { IoClose } from "react-icons/io5";
import clsx from "clsx";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

export const Modal = ({ isOpen, onClose, children, className }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      <div
        className={clsx(
          "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
          "bg-white rounded-lg shadow-xl z-50",
          "p-6 max-w-[90vw] max-h-[90vh] overflow-auto",
          className
        )}
      >
        <button
          onClick={onClose}
          className="absolute cursor-pointer right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <IoClose size={24} />
        </button>
        {children}
      </div>
    </>
  );
};
