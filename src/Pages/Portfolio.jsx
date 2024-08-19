import React from "react";
import Profile from "../Components/Profile";
import TechStack from "../Components/TechStack";
import { Stack, Paper, Divider } from "@mui/material";
import Project from "../Components/Project";
import ExtraActive from "../Components/ExtraActive";
const Portfolio = () => {
  return (
    <Stack marginTop={"25px"} padding={"25px"} spacing={3}>
      <Profile></Profile>
      <Divider></Divider>
      <TechStack></TechStack>
      <Divider></Divider>
      <Project></Project>
      <Divider></Divider>
      <ExtraActive></ExtraActive>
    </Stack>
  );
};

export default Portfolio;
