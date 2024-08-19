import React, { useState } from "react";
import {
  Modal,
  Container,
  Stack,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import TechStackChipList from "./TechStackChipList";
import api from "../APIs/api";
const ProjectModal = ({ open, handleClose }) => {
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
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
  };

  const handleSubmit = () => {
    const data = {
      name,
      description,
      content,
      languages: langList,
      frameword: stackList,
    };
    api
      .post("/v1/portfolio", data)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  // /v1/portfolio
  // description
  // content
  // languages
  // frameworks

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
            Project Add
          </Typography>
          <TextField
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            label="Name"
          ></TextField>
          <TextField
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            type="text"
            label="description"
          ></TextField>
          <TextField
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            multiline
            rows={5}
            type="text"
            label="content"
          ></TextField>

          <Typography variant="body1">Language</Typography>
          <TechStackChipList
            stackList={langList}
            handleDelete={handleLangDelete}
            handleAdd={handleLangAdd}
          ></TechStackChipList>
          <Typography variant="body1">Framwork & Library</Typography>
          <TechStackChipList
            stackList={stackList}
            handleDelete={handleStackDelete}
            handleAdd={handleStackAdd}
          ></TechStackChipList>
          <Button
            disabled={!(name && description && content)}
            onClick={handleSubmit}
            variant="contained"
            fullWidth
          >
            추가
          </Button>
        </Stack>
      </Container>
    </Modal>
  );
};

export default ProjectModal;
