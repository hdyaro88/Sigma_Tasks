import { useEffect } from "react";
import Task from "./Task";
import Loader from "../../Helper Files/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getTasksHandler } from "../../store/TaskSlice";
import { Alert } from "@mui/material";
const TaskMain = () => {
  const tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();
  const loader = useSelector((state) => state.utility.loader);
  useEffect(() => {
    dispatch(getTasksHandler());
  }, [dispatch]);
  return (
    <div style={{ height: "500px", width: "100%", position: "relative" }}>
      {loader.status && <Loader message={loader.message} />}
      {tasks?.length ? (
        <>
          <Alert>Please note no changes will be made if checkbox is not selected</Alert>
          {tasks?.map((task) => {
            return <Task key={task.id} task={task} />;
          })}
        </>
      ) : (
        <h4>No tasks yet...</h4>
      )}
    </div>
  );
};

export default TaskMain;
