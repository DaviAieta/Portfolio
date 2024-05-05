import styled from "@emotion/styled";
import { ReactNode } from "react";

interface StyledButtonProp {
  children: ReactNode;
  href: string;
}

const StyledButton: React.FC<StyledButtonProp> = ({ children, href }) => {
  const StyledButton = styled("a")(() => ({
    backgroundColor: "transparent",
    border: "1px solid white",
    borderRadius: "3px",
    padding: "5px 15px",
    width: "0%",
    textDecoration: "none",
    color: "#5e5e5e",
    "&:hover": {
      color: "black",
    },
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  return (
    <>
      <StyledButton href={href} target="_blank">
        {children}
      </StyledButton>
    </>
  );
};

export default StyledButton;
