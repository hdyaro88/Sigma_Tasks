import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { utilityActions } from "./UtilitySlice";
export const TaskSlice = createSlice({
  name: "taskSlice",
  initialState: { tasks: [] },
  reducers: {
    create(state, action) {
      state.tasks.push(action.payload);
    },
    read(state, action) {
      state.tasks = action.payload;
    },
    update(state, action) {
      const index = state.tasks.findIndex((el) => el.id === action.payload.id);
      if (index !== -1) state.tasks[index] = { ...action.payload, id: state.tasks[index].id };
    },
    delete(state, action) {
      state.tasks = state.tasks?.filter(({ id }) => id !== action.payload);
    },
  },
});

export const TaskActions = TaskSlice.actions;

export const createTaskHandler = (task) => {
  return async (dispatch) => {
    try {
      dispatch(utilityActions.toggleLoader({ status: true, message: "Adding Task...." }));
      const createdAt = new Date(Date.now()).toString();
      const res = await axios.post("/task", { todo: task, createdAt });
      if (res) {
        const task = res.data.data;
        dispatch(TaskActions.create(task));
      }
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(utilityActions.toggleLoader({ status: false, message: "Fetching Tasks...." }));
    }
  };
};

export const getTasksHandler = () => {
  return async (dispatch) => {
    try {
      dispatch(utilityActions.toggleLoader({ status: true, message: "Fetching Tasks...." }));
      const res = await axios.get("/task");
      if (res) {
        const tasks = res.data.result;
        dispatch(TaskActions.read(tasks));
      }
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(utilityActions.toggleLoader({ status: false, message: "Fetching Tasks...." }));
    }
  };
};

export const deleteTaskHandler = (id) => {
  return async (dispatch) => {
    try {
      dispatch(utilityActions.toggleLoader({ status: true, message: "Deleting Task...." }));
      const res = await axios.delete("/task", { data: { id } });
      if (res) {
        dispatch(TaskActions.delete(id));
      }
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(utilityActions.toggleLoader({ status: false, message: "Fetching Tasks...." }));
    }
  };
};

export const editTaskHandler = (editedTask) => {
  return async (dispatch) => {
    try {
      dispatch(utilityActions.toggleLoader({ status: true, message: "Deleting Task...." }));
      const res = await axios.patch("/task", { editedTask });
      if (res) {
        dispatch(TaskActions.update(editedTask));
      }
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(utilityActions.toggleLoader({ status: false, message: "Fetching Tasks...." }));
    }
  };
};
