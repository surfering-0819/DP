import React, { useState } from "react";
import useModal from "../Hooks/useModal";
import { Stack, Typography, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ExtraActiveCard from "./ExtraActiveCard";
import ExtraActiveModal from "./ExtraActiveModal";
const ExtraActive = () => {
  const { open, handleOpen, handleClose } = useModal();
  const [extraActiveList, setExtraActiveList] = useState([]);

  return (
    <Stack spacing={2}>
      <Typography variant="h2" fontWeight={700}>
        Extracurricular Activities
      </Typography>
      <Stack spacing={1}>
        <ExtraActiveCard></ExtraActiveCard>
        <ExtraActiveCard></ExtraActiveCard>
        <ExtraActiveCard></ExtraActiveCard>
        <Paper
          elevation={1}
          sx={{
            padding: "25px",
            borderRadius: "15px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          onClick={handleOpen}
        >
          <AddIcon sx={{ width: "75px", height: "75px" }}></AddIcon>
          <Typography variant="body1">프로젝트 추가</Typography>
        </Paper>
      </Stack>
      <ExtraActiveModal
        open={open}
        handleClose={handleClose}
      ></ExtraActiveModal>
    </Stack>
  );
};

export default ExtraActive;
