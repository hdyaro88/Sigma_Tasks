import { IconButton, Typography, Checkbox, Card, TextField, Button, ClickAwayListener } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deleteTaskHandler, editTaskHandler } from "../../store/TaskSlice";
import React, { useEffect, useState } from "react";
const Task = React.memo(({ task }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isChecked, setisChecked] = useState(false);
  const [editedTask, setEditedTask] = useState(task.todo);
  const dispatch = useDispatch();
  useEffect(() => {
    setIsEdit(false);
  }, [task]);
  return (
    <Card style={{ width: "400px", padding: "1rem", display: "flex", alignItems: "center", margin: "1rem auto" }}>
      <Checkbox size="medium" onChange={() => setisChecked(!isChecked)} />
      {isEdit ? (
        <ClickAwayListener onClickAway={() => setIsEdit(false)}>
          <TextField
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
            fullWidth
            InputProps={{
              endAdornment: (
                <Button
                  variant="contained"
                  onClick={() => (isChecked ? dispatch(editTaskHandler({ ...task, todo: editedTask })) : null)}
                >
                  update
                </Button>
              ),
            }}
          />
        </ClickAwayListener>
      ) : (
        <>
          <Typography align="left" style={{ flexGrow: 1 }}>
            {task?.todo}
          </Typography>
          <IconButton onClick={() => (isChecked ? setIsEdit(!isEdit) : null)}>
            <EditIcon color="secondary" />
          </IconButton>
          <IconButton onClick={() => (isChecked ? dispatch(deleteTaskHandler(task.id)) : null)}>
            <DeleteIcon color="error" />
          </IconButton>
        </>
      )}
    </Card>
  );
});
export default Task;
