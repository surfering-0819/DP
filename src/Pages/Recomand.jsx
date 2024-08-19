import React from "react";
import { Divider, Stack } from "@mui/material";
import Grade from "../Components/Grade";
import RecomandExtra from "../Components/RecomandExtra";
const Recomand = () => {
  return (
    <Stack marginTop={"25px"} padding={"25px"} spacing={3}>
      <Grade></Grade>
      <Divider></Divider>
      <RecomandExtra></RecomandExtra>
    </Stack>
  );
};

export default Recomand;
