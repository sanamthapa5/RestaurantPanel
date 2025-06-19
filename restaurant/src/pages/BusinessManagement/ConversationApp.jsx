"use client";

import { useState } from "react";
import "./ConversationApp.css";
import { FaRegUserCircle } from "react-icons/fa";
// import avatar1 from "../../assets/avator1.jpeg";
// import avatar2 from "../../assets/avator2.jpeg";
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
        name: "Sanam Thapa",
        avatar:
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSExMWFhUXFRcXFRYWGRUVGhgYGBIWFxUVGhkYHSggGBolHRUXITEhJSkrLi8uFyAzODMsNygtLisBCgoKDg0OGhAQGi0lHiUtLS0vNTUvLS4tLS4tLS0tLy0tLS0tMi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLf/AABEIAPEA0QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQcDBAYCCAH/xABJEAABAwICBgUIBwcBBwUAAAABAAIDBBEhMQUGEkFRYRMicYGRBzJSU5KhscEUF0Ji0dLwIzNygrLT4fEIFSQ0osLDFkNEc4P/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQMEAgUG/8QAKhEAAgICAgEDAwQDAQAAAAAAAAECEQMEEiExEyJRMkGxBWFxkUJS0RT/2gAMAwEAAhEDEQA/ALxREQBERAEREARFhrKuOJhkle1jBm55DQO0lAZl+OcALk2G8nBV7p7yqUjLtgEkx9Jto2dm08E94b3qutM62GoJ2qaIjMdK+pnIPIvl2R2BoXSiyLLuq9bKCMkPq4ARmBI1xHc0krQf5RNGD/5I7o5j8GKgJX3N7BvJosPBeF1wRFn0LDr/AKMdlVMH8Qez+poUvQ6bppv3M8UnKN7XnwaSV8xr8dbenBCz6hZpOEv6PpGCT0CQ19uOwetbuW2vmWl1knDejMomjwvFNszswyGzJfZ/lsVK0OudTBZ0Ej4+MLnOmhP8AlJfEOQce0ZKOBNn0Kir3VbypQTkR1TRBIcA+94nHtOMffcfeVggrlqiT9REUAIiIAiIgCIiAIiIAiIgCIiAIigNdtZWaPpjKbF56sTD9p9sz90DE9lsyEBq67a6w6Pbs26SdwuyIG1h6bz9lvvNsN5FH6d09UVj+kqJC4/ZaMGM5NbkO3M7yV+6Up53OM9S7Zkl69pD+0ffJwjAu1uFgXBrbAWyUYrYpI5bCIi6IMcszW5m3AZk9gGJWu6refMicebur8VthoC/UBHl1SfstHh+JXkmpHA+ypJEoERNM8/vYb8wCCO8XWFta5h6riW+i/Ejlf8ABTqwz0rH+c0X45HxUUDHR1zZMMncD8uKsfyc69upXNpqh16cmzXH/wBk7sfV8RuzGF1VFVo1zeswkge0PDPuW7o2t2xsu84e8cU89Mk+uAirbUPWqR2jJrdeWjbfZOb4QC5ovuOy17AeLATdWBo2tZPEyaM3ZIwPacsHC4uNx5Kpqjo2URFACIiAIiIAiIgCIiAIiIAqr8oWkhFL9KkAfLjHQRuAc2JrSOkrHNOBeXeYMrNYccbWovnryj6QM+kZzfqxuELBwEeDh7e2e9dQXZDOdnmc9xe9xc5xu5ziSSTvJOZWJzgMTgFjqahrBd3cN55LUihdLZ8mDfss+ZVpyZhVF2Ebb/eODfxKyNhP2nE8h1R7sfErMBbAIgPxrQMgv1FinqGsF3G3Lee5AZUWlDUyy/uYS4cTl44AeK2DR1gFzE08g4X/AKlw8sE6bRZHFOStRf8ARlRa0FYHHYcCx4za7ArZXZWFpVlHj0keDxjb0v8AK3UQHR6gaZEX0pxNmSUUwsd7xbYb23Lm96sjyP6XjNE2ndKzpGSSBsZc3bLS7bBDb3tdxHcqTDQO83WSItBG03aG8A7J7QbGx5kHsKhqybPqhFXnk51gkJZTySOmika51LM/zwY7dLTS4n9o0EOBubtxBsQBYaqao6CIigBERAEREAREQBERAF8y6faTWVWGP0mpJ7ppC49gAJ7l9NKhvKLo008mlJALGQwMhPH6W/alI52imZ2PK6i6IZXFKwzP6R3mjzR8vxUqvEEQY0NG4f6le1achEWKom2QABtOJs1ozJQGOsqtmzWjae7zWjH3BSGhtV3PcHzXe847AyH8R+WXat7QGhNggu60z83bm8hyG88l3dHStjbYd54leZn2nJ8YeD1sGooLlkVv4/6R1JoMAAONgMmssAOX6C2/91ReifE/it1Fjo182clrPqu2Rm029xk77TfDNv65rjaeRwcYpBaRufMbnDirfXKa1ap9ONuE7MjcW7u7s+G7gtWvn9N0/H4Muzg9RWvq/JyaxzzNYC5xsP1gsElPWsdsGA7XHZJ94Nl0GrGpsskjZqzBrSC2I2JJvhtWwDeW/fz3zzwirs86ODJJ1RDwh1usLOJNxw4DttZe1lqn7T3u4ucfFxKxK5FLLB8kN5JZIt7HxVEf3XNLoZSOZjlI7grqVQ+Q+kJmqZrYNjZGDxLnFxHdsDxCt5VS8nSCIi5JCIiAIiIAiIgCIiAKv/LPQB1CJQMWTxOcfugSsYD2Om96sBamldHsqIZIJBdkjS11s8d44EHEHiFK8g+X7opLWqjbHUzwixax3RmwsCWtDXG27EFcro2MvqRAHv2Lm5DiDZrSTyzFlZKairZEYuT4olnvtbeTgAMSTwA3qW0RowtPSPF5DgAMdgH7I4k7ypLQ+gmg/s223GRxLj2bRxPYF09Fo9keIxd6R+XBeZn2nkXGPSPWwascL5S7f4MOiqDoxtO84+4cO1SC/bL8WU0N27CIikgIi/bIAgRfiAquZlnOHAkeBstzQeh5qyYQQNDnkF2JDQGggOcTwG0MrnEYLzrsBTyykWxAe0fxkjH+YO8FPf7PEbpK+omOTKbY73ysI7/2bvFe0p3FNHhyhUmmXHqbq62gpmwg7TiS+R+W08gXI5AAAcgp1EXACIiAIiIAiIgCIiAIiIAtfSMz2RPdHGZXhp2IwWtLnbm3cQAL7yVsLWr61kLNt5sN3EngBvKhuu2Sk30ihtctSK2mop6+d7Ok22uexvWP7WSz3l2QO07IXzzXCahw7dVYZ7Bt3uY35r6F0/p1lVBNTOiOxLG6MnaFxtNIDrWtcGxz3KjPJtSltdIx46zGua4cC11iPEKrJlU4SpmjDilDLHkixJJJSNinaA0YdI/L+Ufa7bWWhUaGqXYmYOPAl4Hwt7lOVdSyJpe82aP1ZeNJw1UUBqZGMp4/siUkyuJFwAxuDciTtHAArDCEpuoo3ZZwgrmzlpdEVDMQ0nmw3+Bv7ltaIrp2yNY/b2XG1ng3F8iCcVi0LrFUVMvRQsMzrFxDYz5ozNwcBiBc7yOK6WhrBI29i0jBzTgWngV1PHKH1I4xzhN+1mwiIqjQczpmumdIY49oAYWYDcm/EYrTj0RUvxLSObzb4m66qurBE3aIJOTWjMmxNh3AnsC5vTmsNRTSCOaMwkgOAdG7zTvu7PuVsISn9KM+ScIP3M2qfQtS3ETBp4BzyPhZSFPUTR4TtBb6xmQ/iG4c7WWxoiKqngFRE2OoZk5sZLZWkAE9V2D8CCLG5vkslHVNlbtMOGRuLEHeCOK5nCUHUkdYpwmrgytfK0208J9KIg89mQkf1Ky/9nXRPR0U1SRYzy2aeLIhYH2nSDuVd+VaIumpmMF3Oa5rQN5L2ho8VcOrmmGUdNDSxxXZFG1u1tWLja732AsLuJOe9bceSMcatmLLilPJLijvEWlovScc7bsOI85pzH+Oa3VcmmrRnaadMIiKSAiIgCIiAIiIAiIgC4zXWYmZrdwZcdpcbn/pC7NctrrSeZKBl1HeN2++/iFTsJuDo0azSyKytP8Ae8m1fDZ9Gwy7c14pNGBukPpbB1JoHB3KVrmfFoPe0rw+Do5QHjqhw723z8F0rQN1rcl50JNWevljF1Rr6SpeljLN+BHaDf8Ax3rpPKnox9ZQB0HX2Xbdm43aWOaSAM7Ei/K6hFtUOkZYf3byOIzB7jgtGvn9J9oxbWv60en2VTqfX11HUbVKLPeOjIc3pGuBIOAB6zrjCyt+t0G+Kmglk/fWc2c4XJke6UXthdrnObh6ZWSPWGRpLhHCHnN4ZZx7SCtOu0lLN+8eSNwyA7h8Vdm2McocYoowauWORTk10aiLxK+y8xP3FYL7o9Li6smdG6DdNBUSM/ebGxBus4EPcb7tqzG35HiVUWumkK+snH0oXdECxoDQwNF7kuByccL34YYK06HSMsJ/ZvI4jMHuK3ZNYJHEOdHCXDJxZcjsJK34djHGHGSPNz6uWWRzi0fnkl0U+konPm6geQ4bWFmgedjkCSbcgDvUFSUwjDh6T3vP8ziR7rDuUlXaSlm/ePJG4ZDwC1FTsZ/VfSL9bX9JdvsgazRvS18czx1KeG4JyMj3Pt7IbfvavybS8hdduDdwsDftU+QubrWbczhGL4gYZXsLnsus85N0bMMUmzt9UKk9PERk9pBHIsLreIHgrBXEaj0HX2vsxt2QfvEW+F/ELt1v1k+HZ5e208nQREWgyhERAEREAREQBERAFiqqdsjHMcLhwsf1xWVEHgrXS2jHQvLHi4+ySMHDj28lqNaALAWHAYK0KmmZI3Ze0OHA49/IqL/9M0177J7Np1vjdYparv2m+G4q9xwiLZ0lT9HK9nouIHZe7fdZayytU6NidqwhNkXiaPaBChnS8mu5/EoCtN1LI3aLtkt3EXvzuPnzXn6PI4dTZzFy6+W+wGZ/FU27qjTUauyYY64X6sdPFsi2fFZFcvHZmdX0ERe4oy5waMyQB2k2Ckg8FZKChL3BkTBc8AAAOJtkF27tWaYm+yRyDnWUjR0UcQtGwNG+2Z7ScStUdV32zHLcjXtR40ZQthjEbd2JPEnMrbRFsSpUjA227YREUkBERAEREAREQBERAEREAREQHGa50uzK2QZPbY9rcPgR4LnlYWsFB00JaPOHWb2jd3i4VfFefsQ4zv5PU1p8oV8HiWTZFyCbcAXHwGJSKRrhdpBHEG/wXpY5KdjjctF/SGDvaGKo6L+zIixCC2Tne0T/AFXX6YeLneNvhZT0Oz29wAuSABmTgB3rzFKHC4vbjYi/MXzHNeW0zAb2uRkXXcR2F1yFlTodhS2q9Nt1DTuZd57sB7yPBRK7fVPR5jiL3DrSWPY0eb8Se8KzBDlNFOxPjB/uTqIi9I8oIiIAiIgCIiAIiIAiIgCIiAIiIAiIgC5LXDRbWA1DcMQHjddxADuWJF/FdaorWqLapJxwYXez1vkq8sVKDLcM3GaOARRVPVFuGY4fgpCGoa7I48DmvLPYcaMqIikgIvEszW5nu3rQqKwuwGA96glJs67VXRbZ3GRxuxjrbPF1gbHkLjBdwub8n8WzSA+k97vA7P8A2rpF6WCKUF+55OzJvI18BERXFAREQBERAEREAREQBERAEREARFG6a09TUjdqombGDkDi51s9lou53cEJSbdIkkXA13lb0exjnM6aVw81rYy3a732sO3wKrHWLywaQqCWw7NKzgzrP7DI4e9oaueSLlrZPuq/k+hqurjibtyPYxozc9waPEmy5LTHlD0UGuh+lMe6RpYBGHyglw2QNpgLRnvK+aayrkmdtyyPkf6UjnPd4uJKUP7yP+Nv9QXDn0Xx1a7bLoloPRNuR/Far6dwzB7sfgpgr8XmUegpMio6t4337cV+yVrzvA7FKEA5r8DQNwQcl8EQyFzsgTz/AMlbMVB6R7h+K30Sg5MmdBa9aMga2kkqBHJHcOD2va0EuLvPI2ftcV2NBpKGdu1DLHK3jG9rx4tK+Udb/wDnZ/8A7PkFFwTOY4PY5zHDJzSWkdhGIXpQnUUYJ6vJtpn2Yi+aNX/KtpKlsHSiojFurN1jblIOvftJ7FaWiPK/RSRh0zJYX5FmyZBlmHNzb2gHkrFJGd62S+lf8FioofQWtFHWf8vM17gLlhux4HHYcA63O1lMLoplFxdNUEREICIiAIiIAiIgCIiAL548qbZBpOfpDfzDHje0ewNkAfZx2sONzvuri191qbo+nLxYzPu2Fh3uti8/dbcE9w3r53qql8r3SSOLnvJc5xzJOZVWR/Y9X9NxSt5Pt4MSwz0zX54HiPnxWZFWeq0mqZDTwOYbHuO49izaJZeeEcZYx4vAUm5oI2XC4+HMcCpzUrV2J0nSvk2nMcHMjGGWT3HfY7hwx4KJSpWZcmFx7XgsMr8RFiKwiIgCIiAp7XVlq6cfeafGNp+ah4oy42Auf1irE180BE//AIgSbEpsC04h4AAuN4IG/LDcuVjiawbLe87z/jktkJXFHePE5dvwYKeka3E4nju7lsIi6NcYqKpEpqqyQ1tMIjsydPHsm9rdYbWPDZvcbxhjdfTy+TgSMQbEYgjAgjIg7ir48mGuP02IwzH/AIiIdY+sZkJO3IO52O+wsxv7Hm/qWKTSmvCO5REVp44REQBERAEREARaGltMQUzdqZ4bwGbndjRiVX2m9f5pLtgHRM9I2Lz8m91+1AcD5RNNOqtITkk7ML3QMbwEbi1x/mcHHvHBc2pXWDRr3vM7CS84vub7R9Ik7zzUEypx2XDZIzv+sFRKLTPf1M8JQUV9jYWKWcNwzPALJtC174cVGh93E8VyaJzrwbjKppwy7VvUlS6Nwc0kEG4IzB4qGkbdZqOf7J7vwSiIZHdMtLQWnGzgNdYSW7nc28+SmFVFNMQRjbG4Iwsfku50Bp3pLRyG0m45B/4O+KzTx12iMuH/ACiTyIiqMwUdpjS7IG8XnzW/M8AsWnNNNgGy2zpCMBub9534b1wVdVOc4lxJcfOJVsMd9s0YsN+6Xg/dJV75Xlzjcn9WA3BRstQ1uGZ4BeKue2Az+C1Ym71pSOp5O6Rux1AJtiDzWZRcpyUlG+4BQmE76Z6W9oTTLqKeOpaf3bgSPSacHs723Hv3KKlqgMBieSk9D6Jc9wklyBu1nPdf8FMYtsq2M8IQaZ9Sgr9VT6E15qYbNkPTM+8euOx+/wDmv2hWFoPWGnqx+zd1rYxuweO7eOYuFoPnSWREQBERAFzuuWsn0OMBgBlffYByaBm8/Ib+4rolSutekvpFVJJe7Qdhn8LSQLdpu7+ZAR1XVPleZJHF7zm459nIchgsKIuiAo7SGiGSjLHcciOw/LJSKKCVJp2jiK7QskeQ2hyz8N/co4GxVjuaDgVF6R0Ux2JbfnkR37wq3j+Dbj3GvqRyiwPFipCupOiIAJIIwJ94+C05RgqmqPSUlOPJG7TS7Q571v08l8N4UBFIWm4UnBODiPBQzThyfJ32r+ntu0Up62TXH7XI/e57+3PZ09psQjYZYyHwbzPPl+jxDXXF16c69yTzJPxKq9NXZZ/54uXI8VM5xcTdxN7nEk7yo+aTZFz/AKle6iYZnJRc8xceW4K1I4y5K8Hm5Jx3rOsUI3rbpKfpHBuW8ngP1ZT5MtqMXJmk84rcotEySbrDifkF0OjtERjEDL7RxPdw7lMMYBkFasfyedk3P9ERejtCMjxOJ4nP/HcpUBfqKxKjFKTk7YXqKRzSHNJa4G4IJBB4gjJeUUnJaOo2tRqbwTW6Vou12W20Z4ZBw5Z9xXYKh9G1roJWTNzY4O7R9pveLjvV6wSh7WvabtcA4HiCLgqCT2iIoBG6yVvQ0s0gNiGHZP3ndVvvIVIAK8tN6KZVRGF7nNaSCdggE2NwMQcL28Fzv1c0vrJ/aj/IpBV6K0Pq5pfWT+1H+RPq5pfWT+1H+RLIKvRWh9XNL6yf2o/yJ9XNL6yf2o/yJYKvX4/I34K0fq5pfWT+1H+ReZPJtSEW6SfudH/bSwUhpODajPEYj5jwUFG8ggjMG6+hvqto/W1HtR/21oHyMaP9bU+3F/bVc427Ru1tiMIuM/BUxoYpLHYBviCMDj2LG7Vw5sc5p52P4K66PyWUcYAEtQbCwu6M/wDjWz9XNL6yf2o/yLqk/JnWacX7X0UjDo6VuBAPMYe7/K/ZdHykWAA7T+Cu36uaX1k/tR/kT6uaX1k/tR/kXPpxNK/Uc/Hja/oooauuOL3E8hYfiszNFxsPmC/3ut8Vd/1c0vrJ/aj/ACLDUeTGjeLGSoGBGDo9/wD+a6UUjNLNkl5kfPVVLtPJ3Xw7BgFKaGgs0uObsuwf5v7lcH1L6P8AW1Xtxf21us8ldEAAJKiwFh1o/wC2uYx7tmnY2IyxqECtabzR2f6rIrNi8mtI3AST97o/7a9/VzS+sn9qP8isswFXorQ+rml9ZP7Uf5E+rml9ZP7Uf5EsFXorQ+rml9ZP7Uf5E+rml9ZP7Uf5EsFXq3vJ/W9JRMBzjJjP8pu0eyWrR+rml9ZP7Uf5FN6v6Bjo2ubG57g4hx2y02NrYWaOXghJLIiKAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQH//Z",
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
        avatar:
          "data:image/png;base64,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",
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
