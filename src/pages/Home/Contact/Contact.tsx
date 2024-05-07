import { styled, Grid, Container, Typography } from "@mui/material";
import StyledTextLink from "../../../components/StyledTextLink/StyledTextLink";

const Contact = () => {
  const StyledContact = styled("div")(() => ({
    backgroundColor: "white",
    height: "40vh",
    display: "flex",
    alignItems: "center",
  }));

  return (
    <>
      <StyledContact id="contact">
        <Container maxWidth={"lg"}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h5" color="secondary">
                CONTACT
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">Let's work together? 👇</Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              md={6}
              lg={3}
              style={{ marginTop: "30px" }}
            >
              <Typography variant="h5">Location</Typography>
              <Typography
                variant="h6"
                style={{ marginTop: "5px", color: "#767676" }}
              >
                Salt Lake City, Utah
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              md={6}
              lg={3}
              style={{ marginTop: "30px" }}
            >
              <Typography variant="h5">Mail</Typography>
              <Typography
                variant="h6"
                style={{ marginTop: "5px", color: "#767676" }}
              >
                <StyledTextLink href="mailto:aieta.davi@gmail.com">
                  aieta.davi@gmail.com
                </StyledTextLink>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </StyledContact>
    </>
  );
};

export default Contact;
