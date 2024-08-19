import { Paper, Stack, Typography, Box } from "@mui/material";
import React from "react";
import ProjectCard from "./ProjectCard";

const ExtraActiveCard = () => {
  return (
    <Paper
      elevation={1}
      sx={{
        padding: "25px",
        borderRadius: "15px",
        position: "relative",
      }}
    >
      <Stack spacing={1}>
        <Stack spacing={1} direction={"row"} alignItems={"baseline"}>
          <Typography variant="h3" fontWeight={700}>
            멋쟁이 사자처럼 해커톤
          </Typography>
          <Typography variant="body2" color={"#777777"}>
            {"TECHIT"}
          </Typography>
          <Typography variant="body2" color={"#777777"}>
            {"24.07.14"}
          </Typography>
          <Typography variant="body2" color={"#777777"}>
            {"수상"}
          </Typography>
          <Box width={"50px"}></Box>
        </Stack>
      </Stack>
      <Typography variant="body1">활동 내용 : </Typography>
      <Typography variant="body1">{"개쩌는 아이디어로 우슴함 ㅅㄱ"}</Typography>
      <Typography variant="body1">관련 프로젝트 : </Typography>
      <ProjectCard></ProjectCard>
    </Paper>
  );
};

export default ExtraActiveCard;
