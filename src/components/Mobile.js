import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import image from "../assets/bg.jpeg";

export default function Mobile() {
  return (
    <div style={container}>
      <div>
        <Typography variant="h3" style={{ fontWeight: "bold" }}>
          Reset Password
        </Typography>
        <Typography
          variant="caption"
          style={{
            opacity: 0.5,
            fontSize: "1em",
            left: 0,
          }}
        >
          Please choose your new password
        </Typography>
        <div style={{ marginTop: "8vw" }} />
        <Typography variant="h7" style={{ fontWeight: "600" }}>
          New Password
        </Typography>
        <Box
          component="form"
          sx={{ marginTop: "1vw" }}
          noValidate
          autoComplete="off"
        >
          <TextField
            fullWidth
            id="outlined-basic"
            variant="outlined"
            placeholder="Enter your new password"
          />
        </Box>
        <div style={{ marginTop: "2.5vw" }} />
        <Typography variant="h7" style={{ fontWeight: "600" }}>
          Confirm Password
        </Typography>
        <Box
          component="form"
          sx={{ marginTop: "1vw" }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            placeholder="Confirm your new password"
            fullWidth
            variant="outlined"
          />
        </Box>
        <Button
          fullWidth
          sx={{
            marginTop: "3vw",
            backgroundColor: "#027D84",
            textTransform: "capitalize",
          }}
          variant="contained"
        >
          Save New Password
        </Button>
      </div>
    </div>
  );
}

const container = {
  textAlign: "left",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  minHeight: "100vh",
  alignItems: "center",
  //   backgroundImage: `url(${image})`,
  //   backgroundRepeat: false,
};
