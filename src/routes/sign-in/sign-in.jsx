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
  Container,
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
        <Grid
          className="sign-in-grid"
          container
          sx={{
            alignItems: "center",
            justifyContent: "center",
            mt: "1.5rem",
          }}
        >
          <Grid className="signin-img-container" item xs={12} md={6}>
            <img
              className="sign-in-image"
              src={ImageSignIn}
              alt="ImageSignIn"
            />
          </Grid>
          <Grid className="signin-container" item xs={12} sm={6}>
            {alert ? (
              <Alert severity="error" mb={2}>
                {alertContent}
              </Alert>
            ) : (
              <></>
            )}
            <p className="welcome-text">Welcome back!</p>
            <Stack className="signin-form-container">
              <form onSubmit={handleSubmit}>
                <Stack spacing={3.5}>
                  <TextField
                    sx={{
                      "& .MuiInputLabel-root": { color: "#039be5" },
                      "& .MuiFormLabel-root.Mui-focused": {
                        color: "#039be5",
                      },
                      "& .MuiOutlinedInput-root": {
                        "& > fieldset": { borderColor: "#039be5" },
                      },
                      "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                          borderColor: "#039be5",
                        },
                      },
                    }}
                    label="Email"
                    type="email"
                    variant="outlined"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                  />

                  <TextField
                    sx={{
                      "& .MuiInputLabel-root": { color: "#039be5" },
                      "& .MuiFormLabel-root.Mui-focused": {
                        color: "#039be5",
                      },
                      "& .MuiOutlinedInput-root": {
                        "& > fieldset": { borderColor: "#039be5" },
                      },
                      "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                          borderColor: "#039be5",
                        },
                      },
                    }}
                    label="Password"
                    type="password"
                    variant="outlined"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                  />

                  <Button
                    className="sign-in-btn"
                    variant="contained"
                    type="submit"
                  >
                    Continue
                  </Button>
                  <Typography sx={{ textAlign: "center" }}>-- or --</Typography>
                  <Button
                    className="sign-in-google"
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
      </Container>
    </div>
  );
};

export default SignInForm;
