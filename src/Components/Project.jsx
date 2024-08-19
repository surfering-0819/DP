import React, { useState } from "react";
import { Stack, Typography, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ProjectCard from "./ProjectCard";
import useModal from "../Hooks/useModal";
import ProjectModal from "./ProjectModal";
const Project = () => {
  const { open, handleOpen, handleClose } = useModal();
  const [projectList, setProjectList] = useState([]);

  return (
    <Stack spacing={2}>
      <Typography variant="h2" fontWeight={700}>
        Project
      </Typography>
      <Stack spacing={1}>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <Paper
          elevation={1}
          onClick={handleOpen}
          sx={{
            padding: "25px",
            borderRadius: "15px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <AddIcon sx={{ width: "75px", height: "75px" }}></AddIcon>
          <Typography variant="body1">프로젝트 추가</Typography>
        </Paper>
      </Stack>
      <ProjectModal open={open} handleClose={handleClose}></ProjectModal>
    </Stack>
  );
};

export default Project;
