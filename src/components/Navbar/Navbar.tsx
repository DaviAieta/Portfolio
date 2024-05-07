import styled from "@emotion/styled";
import { AppBar, MenuItem, Toolbar } from "@mui/material";

const Navbar = () => {
  const StyledTooBar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "flex-end",
    "& .MuiMenuItem-root": {
      margin: "0 -4px",
      fontSize: "19px",
      fontFamily: "Poppins, sans-serif",
      cursor: "pointer",
      transition: "color 0.3s",
    },
    "& .MuiMenuItem-root:hover": {
      backgroundColor: "white",
      color: "#147EFB",
    },
  }));

  const itemClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <AppBar position="fixed" elevation={0}>
        <StyledTooBar>
          <MenuItem onClick={() => itemClick("hero")}>Home</MenuItem>
          <MenuItem onClick={() => itemClick("about")}>About</MenuItem>
          <MenuItem onClick={() => itemClick("projects")}>Projects</MenuItem>
          <MenuItem onClick={() => itemClick("contact")}>Contact</MenuItem>
        </StyledTooBar>
      </AppBar>
    </>
  );
};

export default Navbar;
