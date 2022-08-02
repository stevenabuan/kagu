import { Stack, Divider, Container } from "@mui/material";

const Footer = () => {
  return (
    <Container
      className="bottom-nav"
      sx={{
        bottom: 0,
        right: 0,
        left: 0,
        position: "absolute",
        fontSize: "0.8rem",
        justifySelf: "center",
      }}
      maxWidth="xl"
    >
      <Divider color="#fff" sx={{ marginBottom: "0.6rem" }} />
      <Stack textAlign="center">
        <p>Copyright &copy; KAGU 2022 </p>
        <p>All rights reserved.</p>
      </Stack>
    </Container>
  );
};

export default Footer;
