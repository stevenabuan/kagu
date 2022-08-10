import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import CloseIcon from "@mui/icons-material/Close";
import { Button, Alert } from "@mui/material";
import saleImage from "../../assets/Sale.png";

import { Grid, Stack, TextField } from "@mui/material";

import "./popup.scss";

const Popup = (props) => {
  const form = useRef();

  const [alert, setAlert] = useState(false);
  const [alertContent, setAlertContent] = useState("");

  const popupClose = () => {
    props.setTrigger(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dpj1nqh",
        "template_l6m044e",
        form.current,
        "7D_sJLZlZZz6OEzfc",
        setAlertContent("subscribed"),
        setAlert(true)
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return props.trigger ? (
    <div className="popup">
      <Grid container className="popup-inner">
        <Grid item>
          <img className="saleImage" src={saleImage} alt="saleImage" />
        </Grid>
        <Grid
          alignSelf="center"
          padding={4}
          item
          component="form"
          ref={form}
          onSubmit={sendEmail}
          xs={12}
          md={6}
        >
          <Button className="popup-close-btn" onClick={popupClose}>
            <CloseIcon fontSize="large" sx={{ color: "#000" }} />
          </Button>
          <Stack marginBottom={2} textAlign="center">
            <p className="saleHeader">
              Subscribe to our Newsletter <br /> and <br /> get 30% off!
            </p>
            <p>
              Sign up to get exclusive deals, special offers and discount
              vouchers.
            </p>
          </Stack>
          <Stack spacing={2}>
            <TextField
              sx={{
                "& .MuiInputLabel-root": { color: "#fc3e06" },
                "& .MuiFormLabel-root.Mui-focused": {
                  color: "#fc3e06",
                },
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": { borderColor: "#fc3e06" },
                },
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    borderColor: "#fc3e06",
                  },
                },
                "& .MuiOutlinedInput-root:hover": {
                  "& > fieldset": {
                    borderColor: "#fc3e06",
                  },
                },
                "& .MuiInputBase-root": {
                  color: "#fc3e06",
                },
              }}
              required
              label="Email"
              name="email"
              variant="outlined"
              type="email"
            />
            <Button
              sx={{
                bgcolor: "#fc3e06",
                "&:hover": {
                  backgroundColor: "#e65100",
                  color: "#fff",
                },
              }}
              variant="contained"
              type="submit"
            >
              Subscribe
            </Button>
            {alert ? (
              <Alert variant="filled" severity="success" mb={2}>
                {alertContent}
              </Alert>
            ) : (
              <></>
            )}
          </Stack>
        </Grid>
        {props.children}
      </Grid>
    </div>
  ) : (
    ""
  );
};

export default Popup;
