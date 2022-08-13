import { Stack, Divider, Container } from "@mui/material";

const Footer = () => {
  return (
    <Container
      sx={{
        bottom: 0,
        right: 0,
        left: 0,
        position: "fixed",
        fontSize: "0.8rem",
        justifySelf: "center",
        marginBottom: "0.6rem",
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
