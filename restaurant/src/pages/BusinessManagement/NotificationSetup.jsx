// "use client"

import { useState, useEffect } from "react";
import { Bell } from "lucide-react";
import "./NotificationSetup.css";

export default function NotificationSetup() {
  const [topics] = useState([
    {
      id: 1,
      title: "Restaurant Account Block",
      description: "Get notification on restaurant account block",
      pushAvailable: true,
      mailAvailable: true,
      smsAvailable: false,
    },
    {
      id: 2,
      title: "Restaurant Account Unblock",
      description: "Get notification on restaurant account unblock",
      pushAvailable: true,
      mailAvailable: true,
      smsAvailable: false,
    },
    {
      id: 3,
      title: "Restaurant Withdraw Approve",
      description: "Get notification on restaurant withdraw approve",
      pushAvailable: true,
      mailAvailable: true,
      smsAvailable: false,
    },
    {
      id: 4,
      title: "Restaurant Withdraw Rejection",
      description: "Get notification on restaurant withdraw rejection",
      pushAvailable: true,
      mailAvailable: true,
      smsAvailable: false,
    },
    {
      id: 5,
      title: "Restaurant Campaign Join Request",
      description: "Get notification on restaurant campaign join request",
      pushAvailable: false,
      mailAvailable: true,
      smsAvailable: false,
    },
    {
      id: 6,
      title: "Restaurant Campaign Join Rejection",
      description: "Get notification on restaurant campaign join rejection",
      pushAvailable: true,
      mailAvailable: true,
      smsAvailable: false,
    },
    {
      id: 7,
      title: "Restaurant Campaign Join Approval",
      description: "Get notification on restaurant campaign join approval",
      pushAvailable: true,
      mailAvailable: true,
      smsAvailable: false,
    },
    {
      id: 8,
      title: "Restaurant Order Notification",
      description: "Get notification on restaurant order notification",
      pushAvailable: true,
      mailAvailable: false,
      smsAvailable: false,
    },
    {
      id: 9,
      title: "Restaurant Advertisement Create By Admin",
      description:
        "Get notification on restaurant advertisement create by admin",
      pushAvailable: true,
      mailAvailable: true,
      smsAvailable: false,
    },
    {
      id: 10,
      title: "Restaurant Advertisement Approval",
      description: "Get notification on restaurant advertisement approval",
      pushAvailable: true,
      mailAvailable: true,
      smsAvailable: false,
    },
    {
      id: 11,
      title: "Restaurant Advertisement Deny",
      description: "Get notification on restaurant advertisement deny",
      pushAvailable: true,
      mailAvailable: true,
      smsAvailable: false,
    },
    {
      id: 12,
      title: "Restaurant Advertisement Resume",
      description: "Get notification on restaurant advertisement resume",
      pushAvailable: true,
      mailAvailable: true,
      smsAvailable: false,
    },
    {
      id: 13,
      title: "Restaurant Advertisement Pause",
      description: "Get notification on restaurant advertisement pause",
      pushAvailable: true,
      mailAvailable: true,
      smsAvailable: false,
    },
  ]);

  const [pushSettings, setPushSettings] = useState(null);
  const [mailSettings, setMailSettings] = useState(null);
  const [modalState, setModalState] = useState({
    isOpen: false,
    message: "",
    onConfirm: null,
  });

  useEffect(() => {
    const initialPushSettings = {};
    const initialMailSettings = {};

    topics.forEach((topic) => {
      initialPushSettings[topic.id] = true;
      initialMailSettings[topic.id] = true;
    });

    setPushSettings(initialPushSettings);
    setMailSettings(initialMailSettings);
  }, [topics]);

  const showModal = (message, onConfirm) => {
    setModalState({ isOpen: true, message, onConfirm });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, message: "", onConfirm: null });
  };

  const handlePushToggle = (id, title) => {
    const isCurrentlyEnabled = pushSettings[id];
    const action = isCurrentlyEnabled ? "disable" : "enable";
    const message = `Want to ${action} the Push Notification For ${title}?\nPush Notification Will Be ${action}d For ${title}`;
    showModal(message, () => {
      setPushSettings((prev) => ({
        ...prev,
        [id]: !prev[id],
      }));
    });
  };

  const handleMailToggle = (id, title) => {
    const isCurrentlyEnabled = mailSettings[id];
    const action = isCurrentlyEnabled ? "disable" : "enable";
    const message = `Want to ${action} the Mail For ${title}?\nMail Will Be ${action}d For ${title}`;
    showModal(message, () => {
      setMailSettings((prev) => ({
        ...prev,
        [id]: !prev[id],
      }));
    });
  };

  if (!pushSettings || !mailSettings) return null;

  return (
    <div className="notification-setup">
      {modalState.isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-content">
              <p>{modalState.message}</p>
            </div>
            <div className="modal-actions">
              <button
                className="modal-button confirm"
                onClick={() => {
                  modalState.onConfirm();
                  closeModal();
                }}
              >
                OK
              </button>
              <button className="modal-button cancel" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="NotificationHeader">
        <div className="icon-container">
          <Bell className="bell-icon" />
        </div>
        <div className="header-text">
          <h1>Notification Setup</h1>
          <p>
            From here you setup who can see what types of notification from
            StackFood
          </p>
        </div>
      </div>
      <div className="notification-table">
        <div className="table-header">
          <div className="column si">SI</div>
          <div className="column topics">Topics</div>
          <div className="column push">Push Notification</div>
          <div className="column mail">Mail</div>
          <div className="column sms">SMS</div>
        </div>
        <div>
          {topics.map((topic) => (
            <div className="table-row" key={topic.id}>
              <div className="column si">{topic.id}</div>
              <div className="column topics">
                <div className="topic-title">{topic.title}</div>
                <div className="topic-description">{topic.description}</div>
              </div>
              <div className="column push">
                {topic.pushAvailable ? (
                  <label className="toggle">
                    <input
                      type="checkbox"
                      checked={pushSettings[topic.id]}
                      onChange={() => handlePushToggle(topic.id, topic.title)}
                    />
                    <span className="slider round"></span>
                  </label>
                ) : (
                  <div className="na-badge">N/A</div>
                )}
              </div>
              <div className="column mail">
                {topic.mailAvailable ? (
                  <label className="toggle">
                    <input
                      type="checkbox"
                      checked={mailSettings[topic.id]}
                      onChange={() => handleMailToggle(topic.id, topic.title)}
                    />
                    <span className="slider round"></span>
                  </label>
                ) : (
                  <div className="na-badge">N/A</div>
                )}
              </div>
              <div className="column sms">
                <div className="na-badge">N/A</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
