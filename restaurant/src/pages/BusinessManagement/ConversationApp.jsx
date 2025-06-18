// "use client";

import { useState } from "react";
import "./ConversationApp.css";

const ConversationApp = () => {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [activeTab, setActiveTab] = useState("customer");
  const [newMessage, setNewMessage] = useState("");

  const [conversations, setConversations] = useState({
    customer: [
      {
        id: 1,
        name: "StackFood",
        avatar: "https://via.placeholder.com/40/6B7280/FFFFFF?text=SF",
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
        <div className="header">
          <h2>Conversation List</h2>
        </div>

        <div className="search-container">
          {" "}
          <div className="search-box">
            <svg
              className="search-icon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
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
              <div className="avatar">
                <img src={conversation.avatar} alt={conversation.name} />
              </div>
              <div className="conversation-info">
                <div className="conversation-header">
                  <h3>{conversation.name}</h3>
                  <span className="timestamp">{conversation.timestamp}</span>
                </div>
                <div className="rating">{conversation.rating}</div>
                <div className="last-message">{conversation.lastMessage}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="tabs">
          <button
            className={`tab ${activeTab === "customer" ? "active" : ""}`}
            onClick={() => handleTabClick("customer")}
          >
            Customer
          </button>
          <button
            className={`tab ${activeTab === "deliveryman" ? "active" : ""}`}
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
                  <span className="status">Online</span>
                </div>
              </div>
            </div>

            <div className="messages">
              {selectedConversation.messages.map((message) => (
                <div
                  key={message.id}
                  className={`message ${message.isOwn ? "own" : "other"}`}
                >
                  <div className="message-content">
                    <p>{message.message}</p>
                    <span className="message-time">{message.time}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="message-input">
              <input
                type="text"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <button className="send-button" onClick={handleSendMessage}>
                Send
              </button>
            </div>
          </div>
        ) : (
          <div className="no-conversation">
            <h3>View conversation</h3>
            <p>Select a conversation to view messages</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConversationApp;

// "use client";

// import { useState } from "react";
// import "./ConversationApp.css";

// const ConversationApp = () => {
//   const [selectedConversation, setSelectedConversation] = useState(null);
//   const [activeTab, setActiveTab] = useState("customer");

//   // Sample conversation data
//   const conversations = {
//     customer: [
//       {
//         id: 1,
//         name: "StackFood",
//         avatar: "https://via.placeholder.com/40/6B7280/FFFFFF?text=SF",
//         timestamp: "9 months ago",
//         rating: "0**********",
//         lastMessage: "Hi",
//         messages: [
//           {
//             id: 1,
//             sender: "StackFood",
//             message: "Hi",
//             time: "10:30 AM",
//             isOwn: false,
//           },
//           {
//             id: 2,
//             sender: "You",
//             message: "Hello! How can I help you today?",
//             time: "10:32 AM",
//             isOwn: true,
//           },
//           {
//             id: 3,
//             sender: "StackFood",
//             message: "I have an issue with my recent order",
//             time: "10:33 AM",
//             isOwn: false,
//           },
//           {
//             id: 4,
//             sender: "You",
//             message:
//               "I'm sorry to hear that. Can you please provide your order number?",
//             time: "10:35 AM",
//             isOwn: true,
//           },
//         ],
//       },
//       {
//         id: 2,
//         name: "John Doe",
//         avatar: "https://via.placeholder.com/40/3B82F6/FFFFFF?text=JD",
//         timestamp: "2 days ago",
//         rating: "5**********",
//         lastMessage: "Thank you for the great service!",
//         messages: [
//           {
//             id: 1,
//             sender: "John Doe",
//             message: "Thank you for the great service!",
//             time: "2:15 PM",
//             isOwn: false,
//           },
//           {
//             id: 2,
//             sender: "You",
//             message: "You're welcome! We're glad you enjoyed your experience.",
//             time: "2:20 PM",
//             isOwn: true,
//           },
//         ],
//       },
//     ],
//     deliveryman: [
//       {
//         id: 3,
//         name: "Mike Wilson",
//         avatar: "https://via.placeholder.com/40/10B981/FFFFFF?text=MW",
//         timestamp: "1 hour ago",
//         rating: "4**********",
//         lastMessage: "Order delivered successfully",
//         messages: [
//           {
//             id: 1,
//             sender: "Mike Wilson",
//             message: "I'm on my way to deliver the order",
//             time: "3:00 PM",
//             isOwn: false,
//           },
//           {
//             id: 2,
//             sender: "You",
//             message: "Great! Please keep us updated.",
//             time: "3:02 PM",
//             isOwn: true,
//           },
//           {
//             id: 3,
//             sender: "Mike Wilson",
//             message: "Order delivered successfully",
//             time: "3:30 PM",
//             isOwn: false,
//           },
//           {
//             id: 4,
//             sender: "You",
//             message: "Perfect! Thank you for the update.",
//             time: "3:32 PM",
//             isOwn: true,
//           },
//         ],
//       },
//       {
//         id: 4,
//         name: "Sarah Johnson",
//         avatar: "https://via.placeholder.com/40/F59E0B/FFFFFF?text=SJ",
//         timestamp: "3 hours ago",
//         rating: "5**********",
//         lastMessage: "Need directions to the address",
//         messages: [
//           {
//             id: 1,
//             sender: "Sarah Johnson",
//             message: "Need directions to the address",
//             time: "1:15 PM",
//             isOwn: false,
//           },
//           {
//             id: 2,
//             sender: "You",
//             message: "I'll send you the GPS coordinates right away.",
//             time: "1:16 PM",
//             isOwn: true,
//           },
//           {
//             id: 3,
//             sender: "You",
//             message: "Coordinates: 40.7128, -74.0060",
//             time: "1:17 PM",
//             isOwn: true,
//           },
//           {
//             id: 4,
//             sender: "Sarah Johnson",
//             message: "Got it, thanks!",
//             time: "1:18 PM",
//             isOwn: false,
//           },
//         ],
//       },
//     ],
//   };

//   const currentConversations = conversations[activeTab];

//   const handleConversationClick = (conversation) => {
//     setSelectedConversation(conversation);
//   };

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//     setSelectedConversation(null); // Reset selected conversation when switching tabs
//   };

//   return (
//     <div className="conversation-app">
//       <div className="conversation-list">
//         <div className="header">
//           <h2>Conversation List</h2>
//         </div>

//         <div className="search-container">
//           <div className="search-box">
//             <svg
//               className="search-icon"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             <input type="text" placeholder="Search" />
//           </div>
//         </div>

//         <div className="conversations">
//           {currentConversations.map((conversation) => (
//             <div
//               key={conversation.id}
//               className="conversation-item"
//               onClick={() => handleConversationClick(conversation)}
//             >
//               <div className="avatar">
//                 <img
//                   src={conversation.avatar || "/placeholder.svg"}
//                   alt={conversation.name}
//                 />
//               </div>
//               <div className="conversation-info">
//                 <div className="conversation-header">
//                   <h3>{conversation.name}</h3>
//                   <span className="timestamp">{conversation.timestamp}</span>
//                 </div>
//                 <div className="rating">{conversation.rating}</div>
//                 <div className="last-message">{conversation.lastMessage}</div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="tabs">
//           <button
//             className={`tab ${activeTab === "customer" ? "active" : ""}`}
//             onClick={() => handleTabClick("customer")}
//           >
//             Customer
//           </button>
//           <button
//             className={`tab ${activeTab === "deliveryman" ? "active" : ""}`}
//             onClick={() => handleTabClick("deliveryman")}
//           >
//             Delivery man
//           </button>
//         </div>
//       </div>

//       <div className="conversation-view">
//         {selectedConversation ? (
//           <div className="conversation-content">
//             <div className="conversation-header">
//               <div className="conversation-user">
//                 <img
//                   src={selectedConversation.avatar || "/placeholder.svg"}
//                   alt={selectedConversation.name}
//                 />
//                 <div>
//                   <h3>{selectedConversation.name}</h3>
//                   <span className="status">Online</span>
//                 </div>
//               </div>
//             </div>

//             <div className="messages">
//               {selectedConversation.messages.map((message) => (
//                 <div
//                   key={message.id}
//                   className={`message ${message.isOwn ? "own" : "other"}`}
//                 >
//                   <div className="message-content">
//                     <p>{message.message}</p>
//                     <span className="message-time">{message.time}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="message-input">
//               <input type="text" placeholder="Type a message..." />
//               <button className="send-button">Send</button>
//             </div>
//           </div>
//         ) : (
//           <div className="no-conversation">
//             <h3>View conversation</h3>
//             <p>Select a conversation to view messages</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ConversationApp;
