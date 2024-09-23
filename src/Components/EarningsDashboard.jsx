import { useState } from "react";
import "./EarningsDashboard.css";
import wallet from "../assets/wallet.svg";

const EarningsDashboard = () => {
  const [activeTab, setActiveTab] = useState("referral");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="earnings-dashboard">
      {/* Earnings Statistics Section */}
      <div className="earnings-statistics">
        <h3>Earnings Statistics</h3>
        <div className="total-earnings">
          <span>Total Earnings</span>
          <h2>₹2875.00</h2>
        </div>
        <div className="earnings-breakdown">
          <div>
            Self Earnings <span>₹8.00</span>
          </div>
          <div>
            Referral Earnings <span>₹2867.00</span>
          </div>
          <div>
            Reward Earnings <span>₹0.00</span>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="tab-buttons">
        <button
          className={activeTab === "self" ? "active" : ""}
          onClick={() => handleTabChange("self")}
        >
          Self
        </button>
        <button
          className={activeTab === "referral" ? "active" : ""}
          onClick={() => handleTabChange("referral")}
        >
          Referral
        </button>
        <button
          className={activeTab === "reward" ? "active" : ""}
          onClick={() => handleTabChange("reward")}
        >
          Reward
        </button>
      </div>

      {/* Referral Card Section */}
      {activeTab === "referral" && (
        <div className="referral-card">
          <div className="referral-header">
            <div className="referral-user">
              <img src={wallet} alt="Referral Icon" className="referral-icon" />
              <div>
                <h4>Diyasharmau</h4>
                <p>3s</p>
              </div>
            </div>
            <div className="referral-info">
              <span>Referral-Kyc</span>
              <h4>₹2.00</h4>
              <p>Sat Nov 19 2022</p>
            </div>
          </div>
          <button className="referral-button">Referral</button>

          {/* Expanded Details */}
          <div className="referral-details">
            <div className="details-header">
              <h4>₹2.00</h4>
              <p>Referral-Kyc</p>
            </div>
            <div className="details-content">
              <div>
                <span>Sr. No</span>
                <p>47</p>
              </div>
              <div>
                <span>Full Name</span>
                <p>Diya Sharma</p>
              </div>
              <div>
                <span>User status</span>
                <p>Premium</p>
              </div>
              <div>
                <span>Details</span>
                <p>Referral-Kyc</p>
              </div>
              <div>
                <span>Amount</span>
                <p>₹2.00</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Other tab content (optional) */}
      {activeTab === "self" && <div>Self Earnings Content</div>}
      {activeTab === "reward" && <div>Reward Earnings Content</div>}
    </div>
  );
};

export default EarningsDashboard;
