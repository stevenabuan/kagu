import { useState } from "react";
import { Link } from "react-router-dom";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import {
  Stack,
  TextField,
  Button,
  Grid,
  Box,
  Container,
  Paper,
  Typography,
  Alert,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import ImageSignIn from "../../assets/signin-image.jpg";
import "./sign-in.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const [alert, setAlert] = useState(false);
  const [alertContent, setAlertContent] = useState("");

  const resestFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const logGoogleUser = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resestFormFields();
    } catch (error) {
      console.log(error);
      if (error.code === "auth/user-not-found") {
        setAlertContent("Account not found!");
        setAlert(true);
      } else if (error.code === "auth/wrong-password") {
        setAlertContent("Wrong Password!");
        setAlert(true);
      } else {
        console.log("error creating user");
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <Container maxWidth="lg">
        <Paper elevation={8}>
          <Grid
            container
            sx={{
              alignItems: "center",
              justifyContent: "center",
              mt: "1rem",
            }}
          >
            <Grid item xs={12} sm={6}>
              <Box xs={12} sm={6}>
                <img
                  className="sign-in-image"
                  src={ImageSignIn}
                  alt="ImageSignIn"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} px={4.5}>
              {alert ? (
                <Alert severity="error" mb={2}>
                  {alertContent}
                </Alert>
              ) : (
                <></>
              )}
              <Box sx={{ marginBottom: 2, fontSize: 40, marginTop: 2 }}>
                Welcome back!
              </Box>
              <Stack>
                <form onSubmit={handleSubmit}>
                  <Stack spacing={3.5}>
                    <TextField
                      color="secondary"
                      label="Email"
                      type="email"
                      variant="standard"
                      required
                      onChange={handleChange}
                      name="email"
                      value={email}
                    />

                    <TextField
                      color="secondary"
                      label="Password"
                      type="password"
                      variant="standard"
                      required
                      onChange={handleChange}
                      name="password"
                      value={password}
                    />

                    <Button variant="contained" type="submit">
                      Continue
                    </Button>
                    <Typography sx={{ textAlign: "center" }}>
                      -- or --
                    </Typography>
                    <Button
                      variant="outlined"
                      sx={{ mx: "auto" }}
                      onClick={() => {
                        logGoogleUser();
                      }}
                    >
                      <GoogleIcon
                        color="error"
                        sx={{
                          mr: "0.5rem",
                          fontSize: "small",
                        }}
                      />
                      Sign-in with Google
                    </Button>
                    <Button>
                      <Link to={"/signup"}>Create an account</Link>
                    </Button>
                  </Stack>
                </form>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default SignInForm;
