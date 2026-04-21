import React from "react";

const PrimaryButton = ({
  text,
  size = "small",
  onClick
}: {
  text: string;
  size?: string;
  onClick?: ()=> void
}) => {
  return (
    <button onClick={onClick}
      className={`${
        size == "small"
          ? "text-base p-2 rounded-full"
          : "text-lg p-4 my-2 w-full"
      } bg-orange-600 text-white`}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
