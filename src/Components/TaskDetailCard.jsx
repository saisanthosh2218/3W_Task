import { useState } from "react";
import "./TaskDetailCard.css";
import instalogo from "../assets/instagram.svg";

const TaskCard = () => {
  const [activeTab, setActiveTab] = useState("details");

  return (
    <div className="task-card-container">
      {/* Task Header */}
      <div className="task-header">
        <div>
          <img src={instalogo} alt="Instagram Logo" className="task-icon" />
        </div>
        <div className="task-title">
          <p style={{ fontWeight: "500" }}>Like on Task Planet Post</p>
          <div className="task-points">10 Points</div>
        </div>
      </div>

      {/* Tabs for Details, Earnings, Disclaimer */}
      <div className="task-tabs">
        <button
          className={activeTab === "details" ? "active" : ""}
          onClick={() => setActiveTab("details")}
        >
          Details
        </button>
        <button
          className={activeTab === "earnings" ? "active" : ""}
          onClick={() => setActiveTab("earnings")}
        >
          Earnings
        </button>
        <button
          className={activeTab === "disclaimer" ? "active" : ""}
          onClick={() => setActiveTab("disclaimer")}
        >
          Disclaimer
        </button>
      </div>

      {/* Content based on the active tab */}
      <div className="task-content">
        {activeTab === "details" && (
          <div className="details-tab">
            <p>
              <strong>Title</strong>: <br />
              Link On task planet post
            </p>
            {/* <span>Link On task planet post</span> */}
            <p>
              <strong>Description</strong> : <br />
              Like on task planet post on Instagram and take a screenshot for
              proof and submit.
            </p>
            <p>
              <strong>Task Link</strong>
            </p>
            <a href="#" className="task-link-btn">
              Start Task
            </a>
            <div className="points-section">
              <span>Points: </span>
              <span className="points-value">10</span>
            </div>
            <div className="inputs">
              <div className="file-upload">
                <input type="file" id="file-upload" />
              </div>
              <button className="submit-btn">Submit</button>
            </div>
          </div>
        )}

        {activeTab === "earnings" && (
          <div className="earnings-tab">
            <ol>
              <li>
                You will get 10 points on submission of proof of task in the
                form of a screenshot.
              </li>
              <li>
                You will earn your points on successful verification by the task
                creator.
              </li>
              <li>Task verification may take 24-48 hours.</li>
            </ol>
          </div>
        )}

        {activeTab === "disclaimer" && (
          <div className="disclaimer-tab">
            <ol>
              <li>
                Any fraud activity may result in the blocking of your account.
              </li>
              <li>
                You must not unfollow/unlike/undo your action for at least 30
                days after submission as this may lead to account suspension.
              </li>
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
