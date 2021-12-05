import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import image from "../assets/bg.jpeg";
import axios from "../axios";

export default function Mobile() {
  var token = window.location.search;
  token = token.substr(1);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
console.log(token); 
  const submit = async () => {
    if(password !== confirmPassword){
      return;
    }
    try {

      const res = await axios.post(`/auth/reset-password`, 
        {
          "password": password,
          "token": token
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  };

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
            onChange={(e) => setPassword(e.target.value)}
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
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Box>
        <Button onClick={() => submit()}
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
