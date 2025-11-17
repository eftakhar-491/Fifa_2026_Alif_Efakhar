import { Button } from "@/components/ui/button";
import "./button-box.css";

type TButtonBoxProps = {
  children: React.ReactNode;
};

const ButtonBox = ({ children }: TButtonBoxProps) => {
  return (
    <Button
      variant="outline"
      size="sm"
      className=" en-primary-btn border-neutral-700"
    >
      {children}
    </Button>
  );
};

export default ButtonBox;
