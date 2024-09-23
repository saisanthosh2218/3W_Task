import EarningsDashboard from "./Components/EarningsDashboard";
import SocialMedia from "./Components/SocialMedia";
import TaskDetailCard from "./Components/TaskDetailCard";
import TaskList from "./Components/TaskList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Navigation} />

          <Route path="SocialMedia" Component={SocialMedia} />
          <Route path="TaskDetails" Component={TaskDetailCard} />
          <Route path="TaskList" Component={TaskList} />
          <Route path="EarningsDashboard" Component={EarningsDashboard} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
