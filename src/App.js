import React, { useState, useEffect } from "react";
import "./App.css";
import KanbanColumn from "./components/KanbanColumn";
import { groupTickets, sortTickets } from "./components/TicketUtils";
import DownImage from "./assets/images/down.svg";
import DisplayImage from "./assets/images/Display.svg";

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState({});
  const [grouping, setGrouping] = useState(
    localStorage.getItem("grouping") || "status" // Default to 'status'
  );
  const [sortBy, setSortBy] = useState(
    localStorage.getItem("sortBy") || "priority"
  );

  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => response.json())
      .then((data) => {
        setTickets(data.tickets);
        const userMap = data.users.reduce((acc, user) => {
          acc[user.id] = user.name;
          return acc;
        }, {});
        setUsers(userMap);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("grouping", grouping);
    localStorage.setItem("sortBy", sortBy);
  }, [grouping, sortBy]);

  // Handle grouping
  const groupedTickets = groupTickets(tickets, grouping, users);

  // Handle sorting
  const sortedTickets = sortTickets(groupedTickets, sortBy);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="kanban-board">
      <div
        className="display-control"
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid lightgrey",
          padding: "10px",
          borderRadius: "5px",
          justifyContent: "space-between",
          width: "110px",
        }}
      >
        <img
          src={DisplayImage}
          alt="Display"
          style={{ height: "20px", marginRight: "10px" }}
        />
        <span>Display</span>
        <img
          src={DownImage}
          alt="Down Arrow"
          style={{
            width: "20px",
            height: "20px",
            marginLeft: "10px",
            cursor: "pointer",
            borderLeft: "1px solid grey",
          }}
          onClick={toggleDropdown}
        />
      </div>
      {showDropdown && (
        <div className="controls">
          <label>
            Group by
            <select
              value={grouping}
              onChange={(e) => setGrouping(e.target.value)}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </label>
          <label className="two">
            Ordering
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </label>
        </div>
      )}

      <div className="kanban-columns">
        {Object.keys(sortedTickets).map((group) => (
          <KanbanColumn
            key={group}
            groupData={sortedTickets[group]}
            grouping={grouping}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
