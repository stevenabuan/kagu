import { Stack, Grid, Divider, Container, Link } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Container maxWidth="xl">
      <Stack marginBottom={2}>
        <Divider color="#fff" sx={{ marginBottom: "1rem" }} />
        <Grid container>
          <Grid item xs={12} md={6}>
            <p>About us</p>
            <p style={{ marginBottom: "1rem", maxInlineSize: "40rem" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, asperiores beatae animi nam illum nobis libero facere
              doloribus quis, esse qui corrupti rerum quaerat distinctio saepe
              tenetur nemo eaque sit!
            </p>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <p>Contact us</p>
              <Stack direction="row" spacing={2} marginTop={1}>
                <Link>
                  <LocalPhoneIcon />
                </Link>
                <p>+12 345 6789</p>
              </Stack>
              <Stack direction="row" spacing={2}>
                <Link>
                  <EmailIcon />
                </Link>
                <p>kagu@email.com</p>
              </Stack>
              <p>Copyright &copy; KAGU 2022 </p>
              <p>All rights reserved.</p>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};

export default Footer;
