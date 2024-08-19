import React, { useRef, useState } from "react";
import { Stack, Chip, Input, TextField, Button, Collapse } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import AddIcon from "@mui/icons-material/Add";
const TechStackChipList = ({ stackList, handleDelete, handleAdd }) => {
  const [addOn, setAddOn] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <Stack spacing={1}>
      <Stack direction={"row"} flexWrap={"wrap"}>
        {stackList.map((el) => {
          return (
            <Chip
              color="secondary"
              key={el}
              label={el}
              onDelete={() => {
                console.log("first1");
                handleDelete(el);
              }}
              deleteIcon={
                <HighlightOffIcon
                  style={{ color: "#ffffff" }}
                ></HighlightOffIcon>
              }
            ></Chip>
          );
        })}
        {!addOn && (
          <Chip
            color="secondary"
            icon={<AddIcon style={{ color: "#ffffff" }}></AddIcon>}
            label={"Stack 추가"}
            onClick={() => {
              setAddOn(true);
            }}
          ></Chip>
        )}
      </Stack>
      <Collapse in={addOn} orientation="vertical" timeout={200}>
        <Stack
          direction={"row"}
          spacing={1}
          component={"form"}
          onSubmit={(e) => {
            e.preventDefault();
            handleAdd(inputValue);
            setInputValue("");
          }}
        >
          <TextField
            size="small"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          ></TextField>
          <Button variant="contained" disableElevation type="submit">
            추가
          </Button>
          <Button
            variant="outlined"
            disableElevation
            onClick={() => {
              setAddOn(false);
            }}
          >
            취소
          </Button>
        </Stack>
      </Collapse>
    </Stack>
  );
};

export default TechStackChipList;
