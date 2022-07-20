import "./App.css";
import NewTask from "./Components/Tasks/NewTask";
import TaskMain from "./Components/Tasks/TaskMain";
import GoogleMapReact from "google-map-react";
import LoactionMain from "./Components/Live Location/LocationMain";
function App() {
  return (
    <div className="App">
      <NewTask />
      <TaskMain />
      <LoactionMain />
    </div>
  );
}

export default App;
