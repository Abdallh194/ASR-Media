import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Index from "./Components/Index";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { CssBaseline, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import UserProfile from "./routes/UserProfile";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "video/:id",
        element: <div>Video Details</div>,
      },
      {
        path: "SignUp",
        element: <SignUp />,
      },
      {
        path: "Login",
        element: <Login />,
      },
      {
        path: "userProfile",
        element: <UserProfile />,
      },
      {
        path: "channel/:id",
        element: <div>Channel Details</div>,
      },
      {
        path: "search/:SearchTerm",
        element: <div>SearchTerm Details</div>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
