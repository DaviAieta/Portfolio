import styled from "@emotion/styled";
import { AppBar, MenuItem, Toolbar } from "@mui/material";

const Navbar = () => {
  const StyledTooBar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "flex-end",
    "& .MuiMenuItem-root": {
      margin: "0 -4px",
      fontSize: "19px",
      fontFamily: "Arial, sans-serif",
      cursor: "pointer",
      transition: "color 0.3s",
    },
    "& .MuiMenuItem-root:hover": {
      backgroundColor: "white",
      color: "#767676",
    },
  }));

  const handleMenuItemClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <AppBar position="fixed" elevation={0}>
        <StyledTooBar>
          <MenuItem onClick={() => handleMenuItemClick("hero")}>Home</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("about")}>
            About
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("projects")}>
            Projects
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("contact")}>
            Contact
          </MenuItem>
        </StyledTooBar>
      </AppBar>
    </>
  );
};

export default Navbar;
