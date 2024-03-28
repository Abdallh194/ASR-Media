import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { logo } from "../utils/constants";
import { Link } from "react-router-dom";
import { Badge, Box, IconButton } from "@mui/material";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { AccountCircle } from "@mui/icons-material";
import { useState } from "react";
import { useSelector } from "react-redux";

function NavScrollExample() {
  let [SearchItem, setSearchItem] = useState(null);
  let { isloggin } = useSelector((s) => s.ASR);
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container fluid>
        <div>
          <img src={logo} className="img-fluid logo" alt="" />
          <Link className="navbar-brand" to="/">
            ASR Media
          </Link>
        </div>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Form className="d-flex searchBar">
          <Form.Control
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => {
              setSearchItem(e.target.value);
            }}
          />
          <Button variant="outline-danger" color="white" type="submit">
            Search
          </Button>
        </Form>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="light"
              >
                <Badge badgeContent={4} color="error">
                  <MarkEmailUnreadIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="light"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Box>
            {isloggin === true ? (
              <Link to="UserProfile">
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-haspopup="true"
                  color="light"
                >
                  <AccountCircle />
                </IconButton>
              </Link>
            ) : (
              <Link to="login">
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-haspopup="true"
                  color="light"
                >
                  <AccountCircle />
                </IconButton>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
      <hr />
    </Navbar>
  );
}

export default NavScrollExample;
