//Use of usesState and useEffect hooks to manage conversation state and persist data in localStorage
// "use client";

// import { useState } from "react";
// import "./ConversationApp.css";
// import { FaRegUserCircle } from "react-icons/fa";
// // import avatar1 from "../../assets/avator1.jpeg";
// // import avatar2 from "../../assets/avator2.jpeg";
// const ConversationApp = () => {
//   const [selectedConversation, setSelectedConversation] = useState(null);
//   const [activeTab, setActiveTab] = useState("customer");
//   const [newMessage, setNewMessage] = useState("");

//   const [conversations, setConversations] = useState({
//     customer: [
//       {
//         id: 1,
//         name: "StackFood",
//         // avatar: "https://via.placeholder.com/40/6B7280/FFFFFF?text=SF",
//         avatar:
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5MQKzISJWvJIb_nkAWFsLKZhSlMt5-W_8eg&s",
//         timestamp: "2 hour ago",
//         rating: "9**********",
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
//         ],
//       },
//       {
//         id: 2,
//         name: "Sanam Thapa",
//         avatar:
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ANJSeMUAL-uvxbonbm1nkMzCItFr8HV_Og&s      ",
//         timestamp: "1 hour ago",
//         rating: "9**********",
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
//         name: "Suman Rimal",
//         avatar:
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5dW8O_j8nOuaRpB63_USY_1A2c76ZCXkqhA&s",
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
//         ],
//       },
//     ],
//   });

//   const currentConversations = conversations[activeTab];

//   const handleConversationClick = (conversation) => {
//     setSelectedConversation(conversation);
//     setNewMessage("");
//   };

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//     setSelectedConversation(null);
//     setNewMessage("");
//   };

//   const handleSendMessage = () => {
//     if (!newMessage.trim() || !selectedConversation) return;

//     const newMsg = {
//       id: Date.now(),
//       sender: "You",
//       message: newMessage.trim(),
//       time: new Date().toLocaleTimeString([], {
//         hour: "2-digit",
//         minute: "2-digit",
//       }),
//       isOwn: true,
//     };

//     // Update selectedConversation
//     const updatedConversation = {
//       ...selectedConversation,
//       messages: [...selectedConversation.messages, newMsg],
//       lastMessage: newMsg.message,
//     };

//     // Update conversations list
//     const updatedList = currentConversations.map((conv) =>
//       conv.id === selectedConversation.id ? updatedConversation : conv
//     );

//     setConversations((prev) => ({
//       ...prev,
//       [activeTab]: updatedList,
//     }));

//     setSelectedConversation(updatedConversation);
//     setNewMessage("");
//   };

//   return (
//     <div className="conversation-app">
//       <div className="conversation-list">
//         <div className="Conversation-header">
//           <h2>Conversation List</h2>
//         </div>

//         <div className="Conversation-search-container">
//           {" "}
//           <div className="Conversation-search-box">
//             {/* <svg
//               className="Conversation-search-icon"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
//                 clipRule="evenodd"
//               />
//             </svg> */}
//             <FaRegUserCircle className="Conversation-search-icon" />
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
//               <div className="Conversation-avatar">
//                 <img src={conversation.avatar} alt={conversation.name} />
//               </div>
//               <div className="conversation-info">
//                 <div className="conversation-header">
//                   <h3>{conversation.name}</h3>
//                   <span className="Conversation-timestamp">
//                     {conversation.timestamp}
//                   </span>
//                 </div>
//                 <div className="Conversation-rating">{conversation.rating}</div>
//                 <div className="Conversation-last-message">
//                   {conversation.lastMessage}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="Conversation-tabs">
//           <button
//             className={`Conversation-tab ${
//               activeTab === "customer" ? "Conversation-active" : ""
//             }`}
//             onClick={() => handleTabClick("customer")}
//           >
//             Customer
//           </button>
//           <button
//             className={`Conversation-tab ${
//               activeTab === "deliveryman" ? "Conversation-active" : ""
//             }`}
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
//                   src={selectedConversation.avatar}
//                   alt={selectedConversation.name}
//                 />
//                 <div>
//                   <h3>{selectedConversation.name}</h3>
//                   <span className="Conversation-status">Online</span>
//                 </div>
//               </div>
//             </div>

//             <div className="Conversation-messages">
//               {selectedConversation.messages.map((message) => (
//                 <div
//                   key={message.id}
//                   className={`Conversation-message ${
//                     message.isOwn ? "Conversation-own" : "Conversation-other"
//                   }`}
//                 >
//                   <div className="Conversation-message-content">
//                     <p>{message.message}</p>
//                     <span className="Conversation-message-time">
//                       {message.time}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="Conversation-message-input">
//               <input
//                 type="text"
//                 placeholder="Type a message..."
//                 value={newMessage}
//                 onChange={(e) => setNewMessage(e.target.value)}
//                 onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
//               />
//               <button
//                 className="Conversation-send-button"
//                 onClick={handleSendMessage}
//               >
//                 Send
//               </button>
//             </div>
//           </div>
//         ) : (
//           <div className="Conversation-no-conversation">
//             <h3>View conversation</h3>
//             <p>Select a conversation to view messages</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ConversationApp;

//use of localStorage to persist conversations data
"use client";

import { useState, useEffect } from "react";
import "./ConversationApp.css";
import { FaRegUserCircle } from "react-icons/fa";

const ConversationApp = () => {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [activeTab, setActiveTab] = useState("customer");
  const [newMessage, setNewMessage] = useState("");

  // Default conversation data with placeholder avatars
  const defaultConversations = {
    customer: [
      {
        id: 1,
        name: "StackFood",
        avatar: "/placeholder-avatar.png",
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
        name: "Sanam Thapa",
        avatar: "/placeholder-avatar.png",
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
        name: "Suman Rimal",
        avatar: "/placeholder-avatar.png",
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
  };

  // Initialize with localStorage data or default conversations
  const [conversations, setConversations] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("conversations");
      return saved ? JSON.parse(saved) : defaultConversations;
    }
    return defaultConversations;
  });

  // Save to localStorage whenever conversations change
  useEffect(() => {
    localStorage.setItem("conversations", JSON.stringify(conversations));
  }, [conversations]);

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

    // Update selected conversation
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
          <div className="Conversation-search-box">
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
                <img
                  src={conversation.avatar}
                  alt={conversation.name}
                  onError={(e) => {
                    e.target.src = "/placeholder-avatar.png";
                  }}
                />
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
                  onError={(e) => {
                    e.target.src = "/placeholder-avatar.png";
                  }}
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
