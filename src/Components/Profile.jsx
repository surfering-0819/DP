import React from "react";
import { Avatar, Stack, Typography, Button } from "@mui/material";
const Profile = () => {
  return (
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
      <Stack justifyContent={"center"}>
        <Button variant="outlined" color="error">
          Logout
        </Button>
      </Stack>
    </Stack>
  );
};

export default Profile;
