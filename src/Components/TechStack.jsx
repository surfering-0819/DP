import React, { useState } from "react";
import { Chip, Divider, Stack, Typography } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import TechStackChipList from "./TechStackChipList";
import api from "../APIs/api";
const TechStack = () => {
  const [langList, setLangList] = useState([]);
  const [stackList, setStackList] = useState([]);

  const handleLangDelete = (target) => {
    setLangList((chips) => {
      return chips.filter((el) => el !== target);
    });
  };

  const handleLangAdd = (target) => {
    setLangList((chips) => {
      return [...chips, target];
    });
    api
      .post("/v1/portfolio/upload/languages", [target])
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.error(e);
      });
    // /v1/portfolio/upload/languages
    // list
  };

  const handleStackDelete = (target) => {
    setStackList((chips) => {
      return chips.filter((el) => el !== target);
    });
  };

  const handleStackAdd = (target) => {
    setStackList((chips) => {
      return [...chips, target];
    });
    api
      .post("/v1/portfolio/upload/frameworks", [target])
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.error(e);
      });
    // /v1/portfolio/upload/frameworks
    // list
  };

  return (
    <Stack spacing={2}>
      <Stack spacing={1}>
        {/* Lang */}
        <Typography variant="h2" fontWeight={700}>
          Language
        </Typography>
        <TechStackChipList
          stackList={langList}
          handleDelete={handleLangDelete}
          handleAdd={handleLangAdd}
        ></TechStackChipList>
      </Stack>
      <Divider></Divider>
      {/* Lib */}
      <Stack spacing={1}>
        {/* Lang */}
        <Typography variant="h2" fontWeight={700}>
          Library & Framework
        </Typography>
        <TechStackChipList
          stackList={stackList}
          handleDelete={handleStackDelete}
          handleAdd={handleStackAdd}
        ></TechStackChipList>
      </Stack>
    </Stack>
  );
};

export default TechStack;
