import { styled, Grid, Container, Typography } from "@mui/material";
import AboutImage from "../../../assets/images/about.jpg";

const About = () => {
  const StyledAbout = styled("div")(() => ({
    backgroundColor: "white",
    height: "100vh",
    display: "flex",
    alignItems: "center",
  }));

  const StyledImg = styled("img")(() => ({
    width: "80%",
    height: "auto",
    borderRadius: "10%",
    display: "block",
    margin: "0 auto",
  }));

  return (
    <>
      <StyledAbout id="about">
        <Container maxWidth={"lg"}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                textAlign="center"
                style={{ marginTop: "25px" }}
              >
                About me
              </Typography>
              <Typography
                variant="h4"
                textAlign="center"
                style={{ marginTop: "5px" }}
              >
                Software development student in Rio de Janeiro, Brazil 📍
              </Typography>
              <Typography
                variant="h6"
                textAlign="center"
                style={{ marginTop: "25px", color: "#767676" }}
              >
                Hey, my name is Davi Aieta Carvalho, I am a software development
                student. My passion for software began when I was 13 years old.
                Since then I have been studying, dedicating myself.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledImg src={AboutImage} />
            </Grid>
          </Grid>
        </Container>
      </StyledAbout>
    </>
  );
};

export default About;
