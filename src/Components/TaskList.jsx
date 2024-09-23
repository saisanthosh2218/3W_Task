import "./TaskList.css"; // Import the styles
import instalogo from "../assets/instagram.svg";

const TaskList = () => {
  const awards = [
    {
      title: "Monthly leaderboard winner",
      points: 10,
      icon: instalogo, // Replace with the actual image path
    },
    {
      title: "Best content creator",
      points: 15,
      icon: instalogo,
    },
    {
      title: "Top influencer",
      points: 20,
      icon: instalogo,
    },
    {
      title: "Most engaged user",
      points: 8,
      icon: instalogo,
    },
    {
      title: "Top commenter",
      points: 12,
      icon: instalogo,
    },
    {
      title: "Top sharer",
      points: 18,
      icon: instalogo,
    },
    {
      title: "Social media guru",
      points: 25,
      icon: instalogo,
    },
  ];

  return (
    <div className="award-card-container">
      {awards.map((award, index) => (
        <div key={index} className="award-card">
          <div className="card-header">
            <div className="card-content">
              <div>
                {" "}
                <img src={award.icon} alt="Platform Icon" className="icon" />
              </div>
              <div className="points-section">
                <span>{award.points} Points</span>
              </div>
              <div className="title">
                <span>{award.title}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
