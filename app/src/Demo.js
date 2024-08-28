import React, { useState, useCallback } from "react";
import { Button, Typography, styled, useTheme } from "@mui/material";
import MultipleDatePicker from "./lib";

const BoxRoot = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const Demo = (props) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [dates, setDates] = useState([]);
  const toggleOpen = useCallback(() => setOpen((o) => !o), [setOpen]);
  const onCancel = useCallback(() => setOpen(false), [setOpen]);
  const minSelectableDate = new Date(2024, 7, 1); // Today’s date
  const maxSelectableDate = new Date();
  maxSelectableDate.setMonth(maxSelectableDate.getMonth() + 6); // 6 months from now
  const onSubmit = useCallback(
    (dates) => {
      setDates(dates);
      setOpen(false);
    },
    [setDates]
  );

  return (
    <BoxRoot>
      <Button
        variant="contained"
        color="primary"
        onClick={toggleOpen}
        style={{ marginBottom: theme.spacing(3) }}
      >
        Select Dates
      </Button>
      <MultipleDatePicker
        open={open}
        selectedDates={dates}
        onCancel={onCancel}
        onSubmit={onSubmit}
        showSelectedDates={false}
        minSelectableDate={minSelectableDate}
        maxSelectableDate={maxSelectableDate}
      />
      <Typography color="textSecondary" width={"100%"} textAlign={"center"}>
        <code>{JSON.stringify(dates)}</code>
      </Typography>
    </BoxRoot>
  );
};

export default Demo;
