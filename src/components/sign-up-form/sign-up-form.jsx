import { useState } from "react";
import {
  Stack,
  TextField,
  Button,
  Grid,
  Box,
  Container,
  Paper,
  Alert,
} from "@mui/material";
import ImageSignUp from "../../assets/signup-img.jpg";
import "./sign-up-form.scss";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const [alert, setAlert] = useState(false);
  const [alertContent, setAlertContent] = useState("");

  const resestFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resestFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setAlertContent("Email already in-use");
        setAlert(true);
      } else console.log("error creating user");
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
                  className="sign-up-image"
                  src={ImageSignUp}
                  alt="ImageSignUp"
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
                Sign up
              </Box>
              <Stack>
                <form onSubmit={handleSubmit}>
                  <Stack spacing={3.5}>
                    <TextField
                      color="secondary"
                      label="Display Name"
                      type="text"
                      variant="standard"
                      required
                      onChange={handleChange}
                      name="displayName"
                      value={displayName}
                    />

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

                    <TextField
                      color="secondary"
                      label="Confirm Password"
                      type="password"
                      variant="standard"
                      required
                      onChange={handleChange}
                      name="confirmPassword"
                      value={confirmPassword}
                    />

                    <Button variant="contained" type="submit">
                      Submit
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

export default SignUpForm;
