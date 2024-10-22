// import React from "react";
// import HighPriority from "../assets/images/Img - High Priority.svg";
// import UrgentPriority from "../assets/images/SVG - Urgent Priority colour.svg";
// import LowPriority from "../assets/images/Img - Low Priority.svg";
// import MediumPriority from "../assets/images/Img - Medium Priority.svg";
// import NoPriority from "../assets/images/No-priority.svg";

// const KanbanTicket = ({ ticket }) => {
//   const priorityLevel = (priority) => {
//     const levels = ["No priority", "Low", "Medium", "High", "Urgent"];
//     return levels[priority];
//   };

//   const getPriorityImage = (priority) => {
//     switch (priority) {
//       case 1: // Low priority
//         return LowPriority;
//       case 2: // Medium priority
//         return MediumPriority;
//       case 3: // High priority
//         return HighPriority;
//       case 4: // Urgent priority
//         return UrgentPriority;
//       default: // No priority
//         return null;
//     }
//   };

//   return (
//     <div className="kanban-ticket">
//       <p style={{ color: "grey", fontWeight: "bold" }}>{ticket.id}</p>
//       <h3>{ticket.title}</h3>
//       {/* <p>Priority: {priorityLevel(ticket.priority)}</p> */}
//       {/* <p>Status: {ticket.status}</p> */}
//       {/* <p>User: {ticket.userId}</p> */}
//       {/* <p style={{ color: "grey" }}>{ticket.tag.join(", ")}</p> */}

//       <p
//         style={{
//           color: "grey",
//           display: "flex",
//           alignItems: "center",
//         }}
//       >
//         <span
//           style={{
//             color: "grey",
//             fontSize: "30px",
//             marginRight: "5px",
//           }}
//         >
//           •
//         </span>
//         {ticket.tag.join(", ")}
//       </p>
//     </div>
//   );
// };

// export default KanbanTicket;

import React from "react";
import HighPriority from "../assets/images/Img - High Priority.svg";
import UrgentPriority from "../assets/images/SVG - Urgent Priority colour.svg";
import LowPriority from "../assets/images/Img - Low Priority.svg";
import MediumPriority from "../assets/images/Img - Medium Priority.svg";
import NoPriority from "../assets/images/No-priority.svg";

const KanbanTicket = ({ ticket }) => {
  const priorityLevel = (priority) => {
    const levels = ["No priority", "Low", "Medium", "High", "Urgent"];
    return levels[priority];
  };

  // Function to get the priority image based on the ticket's priority
  const getPriorityImage = (priority) => {
    switch (priority) {
      case 0:
        return NoPriority;
      case 1: // Low priority
        return LowPriority;
      case 2: // Medium priority
        return MediumPriority;
      case 3: // High priority
        return HighPriority;
      case 4: // Urgent priority
        return UrgentPriority;
      default: // No priority
        return null;
    }
  };

  const priorityImage = getPriorityImage(ticket.priority);

  return (
    <div className="kanban-ticket">
      <p style={{ color: "grey", fontWeight: "bold" }}>{ticket.id}</p>
      <h3 style={{ fontSize: "18px" }}>{ticket.title}</h3>

      <div style={{ display: "flex", alignItems: "center" }}>
        {priorityImage && (
          <div
            style={{
              border: "1px solid #d3d3d3",
              padding: "0 5px",
              borderRadius: "5px",
              height: "30px",
              marginRight: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {" "}
            <img
              src={priorityImage}
              alt={priorityLevel(ticket.priority)}
              style={{
                width: "20px",
                height: "20px",
              }}
            />
          </div>
        )}
        <p
          style={{
            color: "grey",
            display: "flex",
            alignItems: "center",
            margin: 0,
            border: "1px solid #d3d3d3",
            padding: "0 5px",
            borderRadius: "5px",
            height: "30px",
          }}
        >
          <span
            style={{
              color: "#d3d3d3",
              fontSize: "35px",
              marginRight: "5px",
            }}
          >
            •
          </span>
          <span style={{ fontSize: "80%" }}>{ticket.tag.join(", ")}</span>
        </p>
      </div>
    </div>
  );
};

export default KanbanTicket;
