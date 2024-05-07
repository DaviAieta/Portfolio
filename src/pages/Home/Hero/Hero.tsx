import { styled, Grid, Container, Typography } from "@mui/material";
import Avatar from "../../../assets/images/avatar.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import StyledButton from "../../../components/StyledButton/StyledButton";

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    height: "80vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      paddingTop: "100px",
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: "110px",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "0",
    },
  }));

  const StyledImg = styled("img")(() => ({
    width: "80%",
    height: "auto",
    borderRadius: "50%",
    border: "5px solid",
    display: "flex",
    margin: "0 auto",
    transform: "rotate(5deg)",
    transition: "transform 1.6s",
    "&:hover": {
      transform: "rotate(360deg)",
    },
  }));

  return (
    <>
      <StyledHero id="hero">
        <Container maxWidth={"lg"}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6} lg={5}>
              <StyledImg src={Avatar} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={7}>
              <Typography
                variant="h2"
                textAlign="center"
                style={{ marginTop: "50px" }}
              >
                Hey, I'm Davi Aieta Carvalho 👋🏻
              </Typography>
              <Typography
                variant="h6"
                textAlign="center"
                style={{ color: "#767676" }}
              >
                I'm a software developer student. A passionate about technology.
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
