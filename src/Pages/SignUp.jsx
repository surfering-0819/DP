import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Paper,
  Stack,
  TextField,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";
import logo from "../Assets/logo.jpeg";
import backImg from "../Assets/loginBackground.jpg";
import api from "../APIs/api";
const SignUp = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwdChk, setPwdChk] = useState("");
  const [university, setUniversity] = useState("");
  const [job, setJob] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (event) => {
    setJob(event.target.value);
  };

  const handleSignUp = async () => {
    setIsLoading(true);
    const data = {
      id,
      name,
      password: pwd,
      school: university,
      job,
    };
    console.log(data);
    api
      .post("/v1/user/signup", data)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        setIsLoading(true);
      });

    // /v1/user/signup
  };

  return (
    <Box>
      <Box
        height={"100vh"}
        display={"flex"}
        justifyContent={"end"}
        alignItems={"center"}
      >
        <Paper
          elevation={3}
          sx={{
            position: "absolute",
            right: "50px",
            width: "500px",
            borderRadius: "25px",
          }}
        >
          <Stack spacing={2} padding={"25px"} alignItems={"center"}>
            <TextField
              type="text"
              label={"ID"}
              value={id}
              onChange={(e) => {
                setId(e.target.value);
              }}
              size="small"
              fullWidth
            ></TextField>
            <TextField
              type="text"
              label={"Name"}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              size="small"
              fullWidth
            ></TextField>
            <TextField
              type="password"
              value={pwd}
              onChange={(e) => {
                setPwd(e.target.value);
              }}
              label={"Password"}
              size="small"
              fullWidth
            ></TextField>
            <TextField
              size="small"
              type="password"
              value={pwdChk}
              onChange={(e) => {
                setPwdChk(e.target.value);
              }}
              label={"Password Check"}
              fullWidth
            ></TextField>
            <TextField
              type="text"
              label={"University"}
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
              size="small"
              fullWidth
            ></TextField>
            <FormControl fullWidth size="small">
              <InputLabel id="job-select-label">희망 직무</InputLabel>
              <Select
                labelId="job-select-label"
                id="job-select"
                value={job}
                label="희망 직무"
                onChange={handleChange}
              >
                <MenuItem value={"FE"}>프론트엔드 개발자</MenuItem>
                <MenuItem value={"BE"}>백엔드 개발자</MenuItem>
              </Select>
            </FormControl>
            <Button
              disabled={
                !(id && name && pwd && job && pwd === pwdChk) || isLoading
              }
              fullWidth
              variant="contained"
              onClick={handleSignUp}
            >
              회원가입
            </Button>
          </Stack>
        </Paper>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "0",
          right: "0",
          zIndex: "-1",
          backgroundImage: `url(${logo})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundColor: "#1d2532",
          width: "100vw",
          height: "100vh",
        }}
      ></Box>
    </Box>
  );
};

export default SignUp;
