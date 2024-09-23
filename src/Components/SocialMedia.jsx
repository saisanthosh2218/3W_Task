import "./SocialMedia.css"; // Import the CSS file for styling
import instalogo from "../assets/instagram.svg";
import telegram from "../assets/telegram.svg";
import youtube from "../assets/youtube.svg";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter-x.svg";

const SocialMedia = () => {
  const platforms = [
    {
      name: "Instagram",
      icon: <img src={instalogo} width={35} height={35} />,
      points: "5+",
      Link: "https://taskplanet.org/home/instagram-task",
    },
    {
      name: "Facebook",
      icon: <img src={facebook} width={35} height={35} />,
      points: "5+",
      Link: "https://taskplanet.org/home/facebook-task",
    },
    {
      name: "X (Twitter)",
      icon: <img src={twitter} width={25} height={25} />,
      points: "5+",
      Link: "https://taskplanet.org/home/twitter-task",
    },
    {
      name: "YouTube",
      icon: <img src={youtube} width={35} height={35} />,
      points: "5+",
      Link: "https://taskplanet.org/home/youtube-task",
    },
    {
      name: "Telegram",
      icon: <img src={telegram} width={35} height={35} />,
      points: "5+",
      Link: "https://taskplanet.org/home/telegram-task",
    },
    {
      name: "LinkedIn   ",
      icon: <img src={linkedin} width={35} height={35} />,
      points: "5+",
      Link: "https://taskplanet.org/home/linkedin-task",
    },
  ];

  return (
    <div className="social-media-task">
      {/* <h3>Social Media Task</h3> */}
      <div className="platform-grid">
        {platforms.map((platform, index) => (
          <a
            href={platform.Link}
            key={index}
            className="platform-card"
            target="_blank"
          >
            <div className="points-badge">{platform.points}</div>
            <div className="icon">{platform.icon}</div>
            <span>{platform.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
