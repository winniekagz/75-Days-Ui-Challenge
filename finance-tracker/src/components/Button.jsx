import React from "react";

export default function Button({ label, isOutlined, fontSize }) {
  return (
    <button
      className={` justify-center w-auto p-2 flex text-[12px] items-center max-h-[48px] shadow hover:bg-green/30 font-bold border ${
        isOutlined
          ? "text-green border-green bg-white/50"
          : "bg-green text-white border-none"
      } px-6 py-3 rounded-full `}
    >
      {label}
    </button>
  );
}
