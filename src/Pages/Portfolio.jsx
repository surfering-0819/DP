import React from "react";
import Profile from "../Components/Profile";
import { Stack, Paper } from "@mui/material";
const Portfolio = () => {
  return (
    <Paper sx={{ marginTop: "50px" }}>
      <Stack padding={"50px"}>
        <Profile></Profile>
      </Stack>
    </Paper>
  );
};

export default Portfolio;
