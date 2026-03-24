"use client";
import { useState, useRef, useEffect, ReactNode } from "react";
import { FaCaretDown } from "react-icons/fa";
interface DropdownProps {
  label: ReactNode; 
  options?: string[]; 
  onSelect?: (option: string) => void;
  children?: ReactNode; 
  className?: string;
}

const Dropdown = ({
  label,
  options,
  onSelect,
  children,
  className,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`relative inline-block ${className}`} ref={dropdownRef}>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 ">
        <FaCaretDown />
      </div>

      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        {label}
      </div>

      {isOpen && (
        <div className="absolute top-full mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-xl z-60 py-2">
          {options?.map((opt) => (
            <div
              key={opt}
              className="px-4 py-2 hover:bg-emerald-50 hover:text-gold cursor-pointer transition-colors"
              onClick={() => {
                onSelect?.(opt);
                setIsOpen(false);
              }}
            >
              {opt}
            </div>
          ))}

          {children && <div onClick={() => setIsOpen(false)}>{children}</div>}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
