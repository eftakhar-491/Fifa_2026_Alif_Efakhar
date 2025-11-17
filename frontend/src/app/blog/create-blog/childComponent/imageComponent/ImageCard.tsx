import "./image-card.css";
import Image from "next/image";
type TImageProps = {
  // children?: React.ReactNode;
  URL: string;
  ALT: string;
};

const ImageCard = ({ URL, ALT }: TImageProps) => {
  return (
    <>
      <Image
        className={`en-image-card`}
        src={URL}
        alt={ALT}
        width={100}
        height={100}
      />
    </>
  );
};

export default ImageCard;
