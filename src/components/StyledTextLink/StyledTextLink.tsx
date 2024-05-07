import styled from "@emotion/styled";
import { ReactNode } from "react";

interface StyledTextLinkProp {
  children: ReactNode;
  href: string;
}

const StyledTextLink: React.FC<StyledTextLinkProp> = ({ children, href }) => {
  const StyledTextLink = styled("a")(() => ({
    textDecoration: "none",
    color: "#767676",
    transition: "color 0.3s",
    "&:hover": {
      color: "#3a3a3a",
    },
  }));

  return (
    <>
      <StyledTextLink href={href} target="_blank">
        {children}
      </StyledTextLink>
    </>
  );
};

export default StyledTextLink;
