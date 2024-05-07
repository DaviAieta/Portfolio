import { styled, Grid, Container, Typography } from "@mui/material";

const About = () => {
  const StyledAbout = styled("div")(() => ({
    backgroundColor: "white",
    height: "80vh",
    display: "flex",
    alignItems: "center",
  }));

  const StyledImg = styled("img")(({ theme }) => ({
    width: "8%",
    paddingRight: "15px",
    [theme.breakpoints.up("xs")]: {
      width: "20%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "14%",
    },
    [theme.breakpoints.up("md")]: {
      width: "14%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "8%",
    },
    transition: "0.4s",
    "&:hover": { transform: "scale(1.2)", cursor: "pointer" },
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
                color="secondary"
                style={{ marginTop: "25px" }}
              >
                ABOUT ME
              </Typography>
              <Typography
                variant="h4"
                textAlign="center"
                style={{ marginTop: "5px" }}
              >
                Software development student
              </Typography>
              <Typography
                variant="h6"
                textAlign="center"
                color="#767676"
                style={{ marginTop: "20px" }}
              >
                Hey, my name is Davi Aieta Carvalho, I'm a software development
                student. My passion for software began when I was 13 years old,
                watching videos about programming logic and computational
                thinking. Since then I've been studying and dedicating myself.
              </Typography>
              <Typography
                variant="h6"
                textAlign="center"
                color="#767676"
                style={{ marginTop: "20px" }}
              >
                I've been dedicated to creating systems for the web, an area
                that I really enjoy and feel enormous pleasure about. I'm
                studying languages such as Typescript, Javascript, Python, to
                use directly in software on the web
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}></Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography
                variant="h5"
                textAlign="center"
                style={{ marginTop: "15px" }}
              >
                Studying Tech
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography textAlign="center">
                <StyledImg src="https://skillicons.dev/icons?i=js"></StyledImg>
                <StyledImg src="https://skillicons.dev/icons?i=ts"></StyledImg>
                <StyledImg src="https://skillicons.dev/icons?i=py"></StyledImg>
                <StyledImg src="https://skillicons.dev/icons?i=nodejs"></StyledImg>
                <StyledImg src="https://skillicons.dev/icons?i=mysql"></StyledImg>
                <StyledImg src="https://skillicons.dev/icons?i=react"></StyledImg>
                <StyledImg src="https://skillicons.dev/icons?i=html"></StyledImg>
                <StyledImg src="https://skillicons.dev/icons?i=css"></StyledImg>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </StyledAbout>
    </>
  );
};

export default About;
