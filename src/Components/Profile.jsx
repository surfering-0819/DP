import React, { useEffect, useState } from "react";
import { Avatar, Stack, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import api from "../APIs/api";
const Profile = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [school, setSchool] = useState("");

  useEffect(() => {
    api.get("/v1/portfolio").then(() => {});
  }, []);

  return (
    <Stack spacing={2}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Stack direction={"row"} spacing={2}>
          <Avatar sx={{ width: "125px", height: "125px" }}></Avatar>
          <Stack justifyContent={"center"} spacing={2}>
            <Typography variant="h1">정민관's Portfolio</Typography>
            <Typography variant="h3" sx={{ color: "#777777" }}>
              영남대학교
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack direction={"row"} spacing={1} justifyContent={"space-between"}>
        <Button variant="contained">{"등급 분석하고 추천 활동 보기"}</Button>
        <Button
          variant="outlined"
          onClick={() => {
            navigate("/");
          }}
        >
          로그아웃
        </Button>
      </Stack>
    </Stack>
  );
};

export default Profile;
