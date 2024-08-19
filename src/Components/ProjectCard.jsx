import React, { useState } from "react";
import {
  Paper,
  Typography,
  Stack,
  Chip,
  Box,
  Button,
  Collapse,
  IconButton,
} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import GitHubIcon from "@mui/icons-material/GitHub";
import TechStackChipList from "./TechStackChipList";
const ProjectCard = () => {
  const [stackList, setStackList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleStackDelete = (target) => {
    setStackList((chips) => {
      return chips.filter((el) => el !== target);
    });
  };

  const handleStackAdd = (target) => {
    setStackList((chips) => {
      return [...chips, target];
    });
  };

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
            Vertex
          </Typography>
          <Typography variant="body2" color={"#777777"}>
            {"유튜브와 커뮤니티를 결합한 현식적인 플렛폼"}
          </Typography>
          <Box width={"50px"}></Box>
        </Stack>
        <Typography variant="body1">사용 기술 스택 : </Typography>
        <TechStackChipList
          stackList={stackList}
          handleDelete={handleStackDelete}
          handleAdd={handleStackAdd}
        ></TechStackChipList>
        <Collapse in={isOpen}>
          <Typography variant="body1">{"대충 내용"}</Typography>
        </Collapse>
      </Stack>
      <GitHubIcon
        sx={{
          position: "absolute",
          width: "50px",
          height: "50px",
          top: "25px",
          right: "25px",
        }}
      ></GitHubIcon>
      <IconButton
        sx={{
          position: "absolute",
          bottom: "25px",
          right: "25px",
        }}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? (
          <ArrowDropUpIcon sx={{ fontSize: "40px" }}></ArrowDropUpIcon>
        ) : (
          <ArrowDropDownIcon sx={{ fontSize: "40px" }}></ArrowDropDownIcon>
        )}
      </IconButton>
    </Paper>
  );
};

export default ProjectCard;
