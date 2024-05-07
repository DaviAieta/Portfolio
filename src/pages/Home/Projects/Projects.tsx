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
            <Grid item xs={12} md={12}>
              <Typography variant="h4" textAlign={"center"}>
                New projects coming soon..
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </StyledProjects>
    </>
  );
};

export default Projects;
