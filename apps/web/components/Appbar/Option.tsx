import { ChevronDown } from "lucide-react";

export const Option = ({
  text,
  option = false,
}: {
  text: string;
  option?: boolean;
}) => {
  return (

    <button className="flex items-center cursor-pointer">

      <p className="px-4 py-6 ">{text}</p>
      {option && <ChevronDown />}
    </button>
    
  );
};
