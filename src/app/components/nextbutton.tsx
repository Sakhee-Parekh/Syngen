import ChevronRightIcon from "@heroicons/react/20/solid/ChevronRightIcon";
import SwiperInstance from "swiper";

export interface SwiperButtonProps {
  swiperRef: React.RefObject<SwiperInstance | null>; // Define the type for swiperRef
}

const NextButton = ({ swiperRef }: SwiperButtonProps) => {
  return (
    <button
      onClick={() => swiperRef.current?.slideNext()}
      className="bg-black text-white py-2 px-4 rounded hover:bg-black/60 transition"
    >
      <ChevronRightIcon className="h-6 w-6" />
    </button>
  );
};

export default NextButton;
