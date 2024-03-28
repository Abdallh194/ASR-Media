import {
  Alert,
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useDispatch, useSelector } from "react-redux";
import { ActiveLoginn } from "../Redux/ASRSlice";

const Login = () => {
  // states
  let [EnteredUser, setEntredUser] = useState("");
  let [EnteredPass, setEnteredPass] = useState("");
  let [logginProccessSuccess, setlogginProccessSuccess] = useState(false);
  // get data from redux
  let { isloggin, UserDetails } = useSelector((s) => s.ASR);

  //redirict Page
  let navigate = useNavigate();

  // dispatch
  let dispatch = useDispatch();

  // handle Form
  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      UserDetails[0].Email === EnteredUser &&
      UserDetails[0].Password === EnteredPass
    ) {
      dispatch(ActiveLoginn());
      navigate("/UserProfile");
    } else {
      setlogginProccessSuccess(true);
    }
  };
  return (
    <div className="Login">
      {isloggin === true ? (
        navigate("/UserProfile")
      ) : (
        <Box
          className="logform"
          sx={{
            marginTop: 12,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "1px solid red",
            width: 600,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "error.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 4 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={(e) => {
                setEntredUser(e.target.value);
              }}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(e) => {
                setEnteredPass(e.target.value);
              }}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "red" }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" style={{ color: "red" }}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/SignUp" variant="body2" style={{ color: "red" }}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
          {logginProccessSuccess ? (
            <Alert
              severity="error"
              style={{ position: "absolute", top: "90px" }}
            >
              There is an error in some of your data. Please re-enter it.
            </Alert>
          ) : (
            ""
          )}
        </Box>
      )}
    </div>
  );
};

export default Login;
