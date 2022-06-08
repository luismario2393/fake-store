import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { FC, useState } from "react";

interface Props {}

export const ItemCounter: FC<Props> = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount((prev) => prev + 1);
  };

  const handleRemove = () => {
    setCount((prev) => prev - 1);
    // no se puede quitar mas de 0
    if (count === 0) {
      setCount(0);
    }
  };

  return (
    <Box display={"flex"} alignItems="center">
      <IconButton onClick={handleRemove}>
        <RemoveCircleOutline />
      </IconButton>
      <Typography sx={{ width: 40, textAlign: "center" }}>{count}</Typography>
      <IconButton onClick={handleAdd}>
        <AddCircleOutline />
      </IconButton>
    </Box>
  );
};
