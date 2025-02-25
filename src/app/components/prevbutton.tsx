import ChevronLeftIcon from "@heroicons/react/20/solid/ChevronLeftIcon";
import { SwiperButtonProps } from "./nextbutton";

const PrevButton = ({ swiperRef }: SwiperButtonProps) => {
  return (
    <button
      onClick={() => swiperRef.current?.slidePrev()}
      className="bg-black text-white py-2 px-4 rounded hover:bg-black/60 transition"
    >
      <ChevronLeftIcon className="h-6 w-6" />
    </button>
  );
};

export default PrevButton;
