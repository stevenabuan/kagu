import { useState } from "react";
import { Link } from "react-router-dom";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import {
  Stack,
  TextField,
  Button,
  Grid,
  Container,
  Alert,
} from "@mui/material";
import ImageSignUp from "../../assets/signup-img.jpg";
import "./sign-up-form.scss";

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
      setAlertContent("Passwords do not match!");
      setAlert(true);
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
      } else console.log("error creating user", error);
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
          className="sign-up-grid"
          container
          sx={{
            alignItems: "center",
            justifyContent: "center",
            mt: "1.5rem",
          }}
        >
          <Grid className="signup-img-container" item xs={12} sm={6}>
            <img
              className="sign-up-image"
              src={ImageSignUp}
              alt="ImageSignUp"
            />
          </Grid>
          <Grid className="signup-container" item xs={12} sm={6}>
            {alert ? (
              <Alert severity="error" mb={2}>
                {alertContent}
              </Alert>
            ) : (
              <></>
            )}
            <p className="signup-text">Sign up</p>
            <Stack className="signup-form-container">
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
                    label="Display Name"
                    type="text"
                    variant="outlined"
                    required
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
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
                    label="Confirm Password"
                    type="password"
                    variant="outlined"
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                  />

                  <Button
                    className="sign-up-btn"
                    variant="contained"
                    type="submit"
                  >
                    Submit
                  </Button>
                  <Button>
                    <Link to={"/signin"}>Login</Link>
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

export default SignUpForm;
