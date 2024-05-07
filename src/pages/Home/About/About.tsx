import { styled, Grid, Container, Typography } from "@mui/material";

const About = () => {
  const StyledAbout = styled("div")(() => ({
    backgroundColor: "white",
    height: "80vh",
    display: "flex",
    alignItems: "center",
  }));

  return (
    <>
      <StyledAbout id="about">
        <Container maxWidth={"lg"}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Typography
                variant="h6"
                textAlign="center"
                style={{ marginTop: "25px" }}
              >
                ABOUT ME
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
          </Grid>
        </Container>
      </StyledAbout>
    </>
  );
};

export default About;
