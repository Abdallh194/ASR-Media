import React, { useEffect, useState } from "react";
import { FetchFromApi } from "../utils/FetachDataApi";
import { Col, Row } from "react-bootstrap";
import SideBar from "./SideBar";
import { Typography } from "@mui/material";
import Videos from "./Videos";

const Index = () => {
  let [selectedCategory, setselectedCategory] = useState("New");
  let [videos, setVideos] = useState([]);
  useEffect(() => {
    FetchFromApi(`search?part=Snippet&q=${selectedCategory}`).then((res) => {
      setVideos(res.items);
    });
  }, [selectedCategory]);
  return (
    <div className="homePage">
      <Row>
        <Col md={3 / 2} sm={12} className="sidebar">
          <SideBar setFoucused={setselectedCategory} />
          <Typography
            className="copyright"
            variant="body2"
            sx={{ mt: 1.5, color: "#fff" }}
          >
            copyright 2024 ASR Media
          </Typography>
        </Col>
        <Col md={10} sm={12} className="feeds">
          <h4>
            {selectedCategory}{" "}
            <span style={{ color: "red", fontWeight: "bold" }}>Videos</span>
          </h4>
          <Videos videos={videos} />
        </Col>
      </Row>
    </div>
  );
};

export default Index;
