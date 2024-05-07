import { styled, Grid, Container, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import StyledButtonFooter from "../../../components/StyledButton/StyledButtonFooter";

const Footer = () => {
  const StyledFooter = styled("div")(() => ({
    backgroundColor: "#2D2E32",
    color: "white",
    height: "15vh",
    display: "flex",
    alignItems: "center",
  }));

  return (
    <>
      <StyledFooter id="contact">
        <Container maxWidth={"lg"}>
          <Grid container style={{ textAlign: "left" }}>
            <Grid item xs={10}>
              <Typography variant="h6">
                Copyright © 2024. All rights are reserved
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <StyledButtonFooter href="https://github.com/DaviAieta">
                <GitHubIcon />
              </StyledButtonFooter>
              <StyledButtonFooter href="https://www.linkedin.com/in/davi-aieta/">
                <LinkedInIcon />
              </StyledButtonFooter>
            </Grid>
          </Grid>
        </Container>
      </StyledFooter>
    </>
  );
};

export default Footer;
