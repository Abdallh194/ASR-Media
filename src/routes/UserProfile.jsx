import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import LogoutIcon from "@mui/icons-material/Logout";
import { ActiveLogOut } from "../Redux/ASRSlice";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  let { UserDetails } = useSelector((s) => s.ASR);
  // modal handle
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //dispatch
  let dispatch = useDispatch();
  let navigate = useNavigate();
  return (
    <Box className="UserProfile">
      <Container sx={{ display: "flex" }}>
        <div className="PersonalDetails">
          <div className="userName">
            {UserDetails[0].FirstName + " " + UserDetails[0].LastName}
          </div>
          <div>{UserDetails[0].Email}</div>
          <div onClick={handleShow} className="showDetails">
            More information about you
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <div className="btn1">Profile Customization</div>
            <div className="btn1">Video Management</div>
          </div>
          <div
            className="logoutBtn"
            onClick={() => {
              dispatch(ActiveLogOut());
              navigate("/Login");
            }}
          >
            LogOut
            <LogoutIcon />
          </div>
        </div>
        <div className="PersonalImage">
          <AccountCircleIcon
            style={{ fontSize: "180px" }}
            sx={{ color: "error.main" }}
          />
        </div>
        <hr />
        <>
          <Modal show={show} onHide={handleClose} style={{ color: "black" }}>
            <Modal.Header closeButton>
              <Modal.Title>personal information </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="">
                User Name :{" "}
                {UserDetails[0].FirstName + " " + UserDetails[0].LastName}
              </div>
              <div className="">Email : {UserDetails[0].Email}</div>
              <div className="">Phone Number : {UserDetails[0].Phone}</div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </Container>
    </Box>
  );
};

export default UserProfile;
