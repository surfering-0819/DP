import React, { useState } from "react";
import { Box, Button, Paper, Stack, TextField } from "@mui/material";
import logo from "../Assets/logo.jpeg";
import backImg from "../Assets/loginBackground.jpg";
import { useNavigate } from "react-router-dom";
import api from "../APIs/api";
const Home = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    const data = {
      id,
      password: pwd,
    };
    api
      .post("/v1/auth/login", data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {})
      .finally(() => {
        setIsLoading(false);
      });
    // /v1/auth/login
  };

  return (
    <Box>
      <Box
        height={"100vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Paper
          elevation={3}
          sx={{
            width: "500px",
            borderRadius: "25px",
          }}
        >
          <Stack spacing={2} padding={"25px"} alignItems={"center"}>
            <Box
              width={"250px"}
              height={"250px"}
              borderRadius={"15px"}
              overflow={"hidden"}
            >
              <img alt="logo" style={{ width: "100%" }} src={logo}></img>
            </Box>
            <TextField
              disabled={isLoading}
              value={id}
              onChange={(e) => {
                setId(e.target.value);
              }}
              type="text"
              label={"ID"}
              fullWidth
            ></TextField>
            <TextField
              disabled={isLoading}
              value={pwd}
              onChange={(e) => {
                setPwd(e.target.value);
              }}
              type="password"
              label={"Password"}
              fullWidth
            ></TextField>
            <Button
              disabled={isLoading || !(id && pwd)}
              onClick={handleLogin}
              fullWidth
              variant="contained"
            >
              로그인
            </Button>
            <Button
              fullWidth
              variant="contained"
              onClick={() => {
                navigate("/sign-up");
              }}
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
          backgroundImage: `url(${backImg})`,
          opacity: "0.25",
          width: "100vw",
          height: "100vh",
        }}
      ></Box>
    </Box>
  );
};

export default Home;
