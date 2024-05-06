import { styled, Grid, Container, Typography } from "@mui/material";
import Avatar from "../../../assets/images/avatar.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import StyledButton from "../../../components/StyledButton/StyledButton";

const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: "white",
    height: "100vh",
    display: "flex",
    alignItems: "center",
  }));

  const StyledImg = styled("img")(() => ({
    width: "80%",
    height: "auto",
    borderRadius: "50%",
    border: "3px solid",
    display: "flex",
    margin: "0 auto",
  }));

  return (
    <>
      <StyledHero id="hero">
        <Container maxWidth={"lg"}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <StyledImg src={Avatar} />
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography variant="h2" textAlign="center">
                Hi there, I'm Davi Aieta Carvalho 👋
              </Typography>
              <Typography
                variant="h6"
                textAlign="center"
                style={{ color: "#767676" }}
              >
                I'm a software developer student. A passionate about technology.
                From Rio de Janeiro, Brasil 📍
              </Typography>
              <Grid container display={"flex"} justifyContent={"center"}>
                <Grid item xs={12} display={"flex"} justifyContent={"center"}>
                  <StyledButton href="https://github.com/DaviAieta">
                    <GitHubIcon />
                  </StyledButton>

                  <StyledButton href="https://www.linkedin.com/in/davi-aieta-b44b4b263/">
                    <LinkedInIcon />
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
