import styled from "@emotion/styled";
import { AppBar, MenuItem, Toolbar } from "@mui/material";

const Navbar = () => {
  const StyledTooBar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "flex-end",
  }));
  return (
    <>
      <AppBar position="absolute">
        <StyledTooBar>
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Projects</MenuItem>
          <MenuItem>Contact</MenuItem>
        </StyledTooBar>
      </AppBar>
    </>
  );
};

export default Navbar;
