import { Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import React from "react";
import RecomandExtraCard from "./RecomandExtraCard";

const RecomandExtra = () => {
  return (
    <Stack spacing={2}>
      <Typography variant="h2" fontWeight={700}>
        Extracurricular Activities
      </Typography>
      <Grid container spacing={2}>
        <Grid xs={6}>
          <RecomandExtraCard></RecomandExtraCard>
        </Grid>
        <Grid xs={6}>
          <RecomandExtraCard></RecomandExtraCard>
        </Grid>
        <Grid xs={6}>
          <RecomandExtraCard></RecomandExtraCard>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default RecomandExtra;
