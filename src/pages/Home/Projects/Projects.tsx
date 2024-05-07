import { styled, Grid, Container, Typography } from "@mui/material";

const Projects = () => {
  const StyledProjects = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      height: "50vh",
    },
    [theme.breakpoints.up("sm")]: {
      height: "50vh",
    },
    [theme.breakpoints.up("md")]: {
      height: "50vh",
    },
    [theme.breakpoints.up("lg")]: {
      height: "50vh",
    },
  }));

  return (
    <>
      <StyledProjects id="projects">
        <Container maxWidth={"lg"}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={12} marginBottom="60px" textAlign={"center"}>
              <Typography variant="h4">New projects coming soon..</Typography>
            </Grid>
          </Grid>
        </Container>
      </StyledProjects>
    </>
  );
};

export default Projects;
