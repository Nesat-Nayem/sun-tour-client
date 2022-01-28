import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./NotFound.css";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const NotFound = () => {
  return (
    <Box className="notFound-container">
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to="/home" style={{ textDecoration: "none", marginTop: "80px" }}>
          <Button
            variant="outlined"
            sx={{ backgroundColor: "#00ADEF", color: "White" }}
          >
            <FaHome />
            <span style={{ marginLeft: "10px" }}>Back To Home</span>
          </Button>
        </Link>
      </div>
    </Box>
  );
};

export default NotFound;
