import { styled, Grid, Container, Typography } from "@mui/material";

const Projects = () => {
  const StyledProjects = styled("div")(() => ({
    backgroundColor: "white",
    height: "80vh",
    display: "flex",
    alignItems: "center",
  }));

  return (
    <>
      <StyledProjects id="projects">
        <Container maxWidth={"lg"}>
          <Grid container spacing={2}>
            <Grid item xs={12} textAlign={"center"}>
              <Typography variant="h4">New projects coming soon..</Typography>
            </Grid>
          </Grid>
        </Container>
      </StyledProjects>
    </>
  );
};

export default Projects;
