import { Paper, Box, Typography, Stack } from "@mui/material";
import React from "react";

const RecomandExtraCard = () => {
  return (
    <Paper
      sx={{
        padding: "15px",
        borderRadius: "15px",
      }}
    >
      <Stack spacing={1}>
        <Box borderRadius={"15px"} overflow={"hidden"}>
          <img
            style={{
              width: "100%",
              aspectRatio: 1.5,
              objectFit: "cover",
            }}
            src="https://image.xportsnews.com/contents/images/upload/article/2023/0508/mb_1683501407109700.jpg"
            alt="안유진 짱"
          ></img>
        </Box>
        <Typography variant="body1">2024 써퍼톤</Typography>
        <Stack>
          <Typography variant="body2">일시 : {"24.08.20"}</Typography>
          <Typography variant="body2">주체 : {"중소기업벤처"}</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default RecomandExtraCard;
