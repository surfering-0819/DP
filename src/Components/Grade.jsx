import React from "react";
import { Stack, Avatar, Typography } from "@mui/material";
const Grade = () => {
  const grade = "senior";

  let color = "#777777";
  if (grade === "senior") {
    color = "#F28D35";
  }

  return (
    <Stack spacing={2}>
      <Typography variant="h2" fontWeight={700}>
        Grade
      </Typography>
      <Stack
        spacing={2}
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Stack direction={"row"} alignItems={"baseline"}>
          <Avatar
            sx={{
              backgroundColor: color,
              width: "125px",
              height: "125px",
              fontSize: "100px",
            }}
          >
            S
          </Avatar>
          <Typography variant="h1">enior</Typography>
        </Stack>
        <Typography variant="h3">
          {"정민관"}님은{" "}
          <Typography variant="h3" component={"span"} sx={{ fontWeight: 700 }}>
            {"Senior"}
          </Typography>{" "}
          등급입니다.
        </Typography>
        <Typography variant="body1">
          다음 등급을 위해 {"Docker"} 등을 공부해 보세요!
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Grade;
