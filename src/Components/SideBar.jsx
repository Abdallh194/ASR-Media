import React from "react";
import { categories } from "../utils/constants";
import { Button, Stack } from "@mui/material";
const SideBar = ({ setFoucused }) => {
  let ActiveIcon = "New";
  return (
    <Stack
      sx={{ flexDirection: { md: "column", xs: "row", overflow: "scroll" } }}
    >
      {categories.map((e) => {
        return (
          <Button
            className="category-btn"
            style={{
              backgroundColor: e.name === ActiveIcon && "#fc1503",
              color: "white",
              margin: "10px 0",
            }}
            key={e.name}
            onClick={() => {
              setFoucused(e.name);
            }}
          >
            <div
              style={{ width: "100%", textAlign: "left" }}
              className="headers"
            >
              <span
                style={{
                  color: e.name === ActiveIcon ? "white" : "red",
                  marginRight: "15px",
                }}
              >
                {e.icon}
              </span>
              <span className="name"> {e.name}</span>
            </div>
          </Button>
        );
      })}
    </Stack>
  );
};

export default SideBar;
