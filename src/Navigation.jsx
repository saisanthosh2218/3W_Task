import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Link to="SocialMedia">
        {" "}
        <button>SocialMedia Design</button>
      </Link>
      <Link to="TaskDetails">
        {" "}
        <button>Task Details</button>
      </Link>
      <Link to="TaskList">
        {" "}
        <button>Task List</button>
      </Link>
      <Link to="EarningsDashboard">
        {" "}
        <button>Earnings Dashboard</button>
      </Link>
    </div>
  );
};

export default Navigation;
