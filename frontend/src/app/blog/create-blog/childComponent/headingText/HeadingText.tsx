import "./heading-text.css";
type THeadingTextProps = {
  heading: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
};

const HeadingText = ({ heading, children }: THeadingTextProps) => {
  switch (heading) {
    case "h1":
      return <h1 className="en-h1">{children}</h1>;
    case "h2":
      return <h2 className="en-h2">{children}</h2>;
    case "h3":
      return <h3 className="en-h3">{children}</h3>;
    case "h4":
      return <h4 className="en-h4">{children}</h4>;
    case "h5":
      return <h5 className="en-h5">{children}</h5>;
    case "h6":
      return <h6 className="en-h6">{children}</h6>;
    default:
      return <div>{children}</div>;
  }
};

export default HeadingText;
