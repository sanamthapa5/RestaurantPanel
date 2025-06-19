"use client";

import { useState } from "react";
import "./ConversationApp.css";
import { FaRegUserCircle } from "react-icons/fa";

const ConversationApp = () => {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [activeTab, setActiveTab] = useState("customer");
  const [newMessage, setNewMessage] = useState("");

  const [conversations, setConversations] = useState({
    customer: [
      {
        id: 1,
        name: "StackFood",
        // avatar: "https://via.placeholder.com/40/6B7280/FFFFFF?text=SF",
        avatar:
          "data:image/jpeg;base64,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",
        timestamp: "9 months ago",
        rating: "0**********",
        lastMessage: "Hi",
        messages: [
          {
            id: 1,
            sender: "StackFood",
            message: "Hi",
            time: "10:30 AM",
            isOwn: false,
          },
          {
            id: 2,
            sender: "You",
            message: "Hello! How can I help you today?",
            time: "10:32 AM",
            isOwn: true,
          },
        ],
      },
      {
        id: 2,
        name: "John Doe",
        avatar: "https://via.placeholder.com/40/3B82F6/FFFFFF?text=JD",
        timestamp: "2 days ago",
        rating: "5**********",
        lastMessage: "Thank you for the great service!",
        messages: [
          {
            id: 1,
            sender: "John Doe",
            message: "Thank you for the great service!",
            time: "2:15 PM",
            isOwn: false,
          },
          {
            id: 2,
            sender: "You",
            message: "You're welcome! We're glad you enjoyed your experience.",
            time: "2:20 PM",
            isOwn: true,
          },
        ],
      },
    ],
    deliveryman: [
      {
        id: 3,
        name: "Mike Wilson",
        avatar: "https://via.placeholder.com/40/10B981/FFFFFF?text=MW",
        timestamp: "1 hour ago",
        rating: "4**********",
        lastMessage: "Order delivered successfully",
        messages: [
          {
            id: 1,
            sender: "Mike Wilson",
            message: "I'm on my way to deliver the order",
            time: "3:00 PM",
            isOwn: false,
          },
          {
            id: 2,
            sender: "You",
            message: "Great! Please keep us updated.",
            time: "3:02 PM",
            isOwn: true,
          },
        ],
      },
    ],
  });

  // const [conversations, setConversations] = useState({
  //   customer: [
  //     {
  //       id: 1,
  //       name: "StackFood",
  //       avatar: <FaRegUserCircle size={30} color="#6B7280" />,
  //       timestamp: "9 months ago",
  //       rating: "0**********",
  //       lastMessage: "Hi",
  //       messages: [
  //         {
  //           id: 1,
  //           sender: "StackFood",
  //           message: "Hi",
  //           time: "10:30 AM",
  //           isOwn: false,
  //         },
  //         {
  //           id: 2,
  //           sender: "You",
  //           message: "Hello! How can I help you today?",
  //           time: "10:32 AM",
  //           isOwn: true,
  //         },
  //       ],
  //     },
  //     {
  //       id: 2,
  //       name: "John Doe",
  //       avatar: <FaRegUserCircle size={30} color="#3B82F6" />,
  //       timestamp: "2 days ago",
  //       rating: "5**********",
  //       lastMessage: "Thank you for the great service!",
  //       messages: [
  //         {
  //           id: 1,
  //           sender: "John Doe",
  //           message: "Thank you for the great service!",
  //           time: "2:15 PM",
  //           isOwn: false,
  //         },
  //         {
  //           id: 2,
  //           sender: "You",
  //           message: "You're welcome! We're glad you enjoyed your experience.",
  //           time: "2:20 PM",
  //           isOwn: true,
  //         },
  //       ],
  //     },
  //   ],
  //   deliveryman: [
  //     {
  //       id: 3,
  //       name: "Mike Wilson",
  //       avatar: <FaRegUserCircle size={30} color="#10B981" />,
  //       timestamp: "1 hour ago",
  //       rating: "4**********",
  //       lastMessage: "Order delivered successfully",
  //       messages: [
  //         {
  //           id: 1,
  //           sender: "Mike Wilson",
  //           message: "I'm on my way to deliver the order",
  //           time: "3:00 PM",
  //           isOwn: false,
  //         },
  //         {
  //           id: 2,
  //           sender: "You",
  //           message: "Great! Please keep us updated.",
  //           time: "3:02 PM",
  //           isOwn: true,
  //         },
  //       ],
  //     },
  //   ],
  // });

  const currentConversations = conversations[activeTab];

  const handleConversationClick = (conversation) => {
    setSelectedConversation(conversation);
    setNewMessage("");
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setSelectedConversation(null);
    setNewMessage("");
  };

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedConversation) return;

    const newMsg = {
      id: Date.now(),
      sender: "You",
      message: newMessage.trim(),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isOwn: true,
    };

    // Update selectedConversation
    const updatedConversation = {
      ...selectedConversation,
      messages: [...selectedConversation.messages, newMsg],
      lastMessage: newMsg.message,
    };

    // Update conversations list
    const updatedList = currentConversations.map((conv) =>
      conv.id === selectedConversation.id ? updatedConversation : conv
    );

    setConversations((prev) => ({
      ...prev,
      [activeTab]: updatedList,
    }));

    setSelectedConversation(updatedConversation);
    setNewMessage("");
  };

  return (
    <div className="conversation-app">
      <div className="conversation-list">
        <div className="Conversation-header">
          <h2>Conversation List</h2>
        </div>

        <div className="Conversation-search-container">
          {" "}
          <div className="Conversation-search-box">
            {/* <svg
              className="Conversation-search-icon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg> */}
            <FaRegUserCircle className="Conversation-search-icon" />
            <input type="text" placeholder="Search" />
          </div>
        </div>

        <div className="conversations">
          {currentConversations.map((conversation) => (
            <div
              key={conversation.id}
              className="conversation-item"
              onClick={() => handleConversationClick(conversation)}
            >
              <div className="Conversation-avatar">
                <img src={conversation.avatar} alt={conversation.name} />
                {/* <div className="avatar">{conversation.avatar}</div> */}
              </div>
              <div className="conversation-info">
                <div className="conversation-header">
                  <h3>{conversation.name}</h3>
                  <span className="Conversation-timestamp">
                    {conversation.timestamp}
                  </span>
                </div>
                <div className="Conversation-rating">{conversation.rating}</div>
                <div className="Conversation-last-message">
                  {conversation.lastMessage}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="Conversation-tabs">
          <button
            className={`Conversation-tab ${
              activeTab === "customer" ? "Conversation-active" : ""
            }`}
            onClick={() => handleTabClick("customer")}
          >
            Customer
          </button>
          <button
            className={`Conversation-tab ${
              activeTab === "deliveryman" ? "Conversation-active" : ""
            }`}
            onClick={() => handleTabClick("deliveryman")}
          >
            Delivery man
          </button>
        </div>
      </div>

      <div className="conversation-view">
        {selectedConversation ? (
          <div className="conversation-content">
            <div className="conversation-header">
              <div className="conversation-user">
                <img
                  src={selectedConversation.avatar}
                  alt={selectedConversation.name}
                />
                <div>
                  <h3>{selectedConversation.name}</h3>
                  <span className="Conversation-status">Online</span>
                </div>
              </div>
            </div>

            <div className="Conversation-messages">
              {selectedConversation.messages.map((message) => (
                <div
                  key={message.id}
                  className={`Conversation-message ${
                    message.isOwn ? "Conversation-own" : "Conversation-other"
                  }`}
                >
                  <div className="Conversation-message-content">
                    <p>{message.message}</p>
                    <span className="Conversation-message-time">
                      {message.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="Conversation-message-input">
              <input
                type="text"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <button
                className="Conversation-send-button"
                onClick={handleSendMessage}
              >
                Send
              </button>
            </div>
          </div>
        ) : (
          <div className="Conversation-no-conversation">
            <h3>View conversation</h3>
            <p>Select a conversation to view messages</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConversationApp;
