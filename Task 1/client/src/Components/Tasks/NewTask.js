import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { createTaskHandler } from "../../store/TaskSlice";
import { useDispatch } from "react-redux";
export default function NewTask() {
  const [enteredTask, setEnteredTask] = useState("");
  const dispatch = useDispatch();
  return (
    <div style={{ margin: "1rem auto" }}>
      <TextField
        value={enteredTask}
        onChange={(e) => setEnteredTask(e.target.value)}
        InputProps={{
          endAdornment: (
            <Button
              onClick={() => dispatch(createTaskHandler(enteredTask))}
              type="submit"
              variant="contained"
              style={{ textTransform: " none" }}
            >
              Add
            </Button>
          ),
        }}
        style={{ padding: "1rem", width: "80%" }}
        placeholder="Enter the task.."
      />
    </div>
  );
}
