import styled from "@emotion/styled";
import { ReactNode } from "react";

interface StyledButtonProp {
  children: ReactNode;
  href: string;
}

const StyledButton: React.FC<StyledButtonProp> = ({ children, href }) => {
  const StyledButton = styled("a")(() => ({
    borderRadius: "3px",
    padding: "5px 15px",
    width: "0%",
    textDecoration: "none",
    color: "white",
    transition: "0.5s",
    "&:hover": { transform: "scale(1.2)" },
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
