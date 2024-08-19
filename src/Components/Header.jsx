import React, { useState } from "react";
import { Stack, TextField, Button, Box } from "@mui/material";
import { styled } from "@mui/system";
import { useLocation, useNavigate } from "react-router-dom";

const HOME = "HOME";
const RECOMAND = "RECOMAND";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const tap =
    location.pathname === "/portfolio"
      ? HOME
      : location.pathname === "/recomand"
      ? RECOMAND
      : false;
  if (!tap) return <></>;

  return (
    <Stack
      component={"header"}
      spacing={0}
      sx={{
        backgroundColor: "#ffffff",
        overflow: "hidden",
        zIndex: 100,
      }}
    >
      {/* Bottom */}
      <Stack component={"nav"} direction={"row"}>
        <NavButton
          variant="contained"
          is-active={tap === HOME ? "true" : undefined}
          onClick={() => {
            navigate("/portfolio");
          }}
        >
          Portfolio
        </NavButton>
        <NavButton
          variant="contained"
          is-active={tap === RECOMAND ? "true" : undefined}
          onClick={() => {
            navigate("/recomand");
          }}
        >
          Recomand
        </NavButton>
      </Stack>
    </Stack>
  );
};

const NavButton = styled(Button)((props) => {
  return {
    borderRadius: 0,
    boxShadow: "none",
    fontSize: "1.6rem",
    width: "40%",
    transition: "ease-in-out 0.5s",
    ...(props["is-active"] && {
      width: "60%",
      fontWeight: 700,
      boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
      "&:hover": {
        boxShadow: "none",
      },
    }),
  };
});

export default Header;
