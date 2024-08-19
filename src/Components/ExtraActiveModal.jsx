import React, { useState } from "react";
import {
  Modal,
  Container,
  Stack,
  TextField,
  Typography,
  Button,
  Switch,
  FormControlLabel,
} from "@mui/material";
import TechStackChipList from "./TechStackChipList";
const ExtraActiveModal = ({ open, handleClose }) => {
  // /v1/upload/activity
  // organizer
  // title
  // content
  // participatedAt
  // isAward

  const [isAward, setIsAward] = useState(false); // 초기값을 false로 설정

  const handleChange = (event) => {
    setIsAward(event.target.checked); // 스위치의 체크 상태에 따라 값 업데이트
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{ display: "flex", alignItems: "center" }}
    >
      <Container
        noValidate
        maxWidth={"md"}
        sx={{ "&:focus-visible": { outline: "none" } }}
      >
        <Stack
          spacing={2}
          padding={"25px"}
          sx={{ backgroundColor: "#ffffff", borderRadius: "25px" }}
        >
          <Typography variant="h2" fontWeight={700}>
            Activity Add
          </Typography>
          <TextField type="text" label="활동명"></TextField>
          <TextField type="text" label="주최자"></TextField>
          <TextField type="date" label="참여날짜"></TextField>
          <TextField rows={4} multiline type="text" label="내용"></TextField>
          <FormControlLabel
            control={
              <Switch
                checked={isAward} // 현재 상태에 따라 스위치의 체크 여부 설정
                onChange={setIsAward} // 상태 변경 핸들러
                color="primary" // 스위치 색상
              />
            }
            label={isAward ? "True" : "False"} // 현재 상태에 따라 레이블 변경
          />
          <Button variant="contained" fullWidth>
            추가
          </Button>
        </Stack>
      </Container>
    </Modal>
  );
};

export default ExtraActiveModal;
