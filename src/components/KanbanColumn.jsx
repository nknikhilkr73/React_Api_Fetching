// import React from "react";
// import KanbanTicket from "./KanbanTicket";

// const KanbanColumn = ({ groupData, grouping }) => {
//   return (
//     <div className="kanban-column">
//       <h2>
//         {grouping === "user" ? groupData.userName : Object.keys(groupData)[0]}
//       </h2>
//       {(groupData.tickets || groupData).map((ticket) => (
//         <KanbanTicket key={ticket.id} ticket={ticket} />
//       ))}
//     </div>
//   );
// };

// export default KanbanColumn;

// src/components/KanbanColumn.jsx

// import React from "react";
// import KanbanTicket from "./KanbanTicket";
// import Todoimage from "../assets/images/To-do.svg";
// import Backlogimage from "../assets/images/Backlog.svg";
// import Inprogressimage from "../assets/images/in-progress.svg";

// const KanbanColumn = ({ groupData, grouping }) => {
//   // Determine the heading based on grouping type
//   const heading =
//     grouping === "user"
//       ? groupData.userName
//       : grouping === "status"
//       ? groupData[0]?.status // Access the status directly if grouping by status
//       : groupData[0]?.priority; // Access the priority directly if grouping by priority

//   return (
//     <div className="kanban-column">
//       <h2>{heading}</h2>
//       {(groupData.tickets || groupData).map((ticket) => (
//         <KanbanTicket key={ticket.id} ticket={ticket} />
//       ))}
//     </div>
//   );
// };

// export default KanbanColumn;

// import React from "react";
// import KanbanTicket from "./KanbanTicket";
// import Todoimage from "../assets/images/To-do.svg";
// import Backlogimage from "../assets/images/Backlog.svg";
// import Inprogressimage from "../assets/images/in-progress.svg";
// import Plusimage from "../assets/images/3 dot menu.svg";
// import Addimage from "../assets/images/add.svg";

// const KanbanColumn = ({ groupData, grouping }) => {
//   // Determine the heading based on grouping type
//   const heading =
//     grouping === "user"
//       ? groupData.userName
//       : grouping === "status"
//       ? groupData[0]?.status // Access the status directly if grouping by status
//       : groupData[0]?.priority; // Access the priority directly if grouping by priority

//   // Determine the image based on the heading
//   const getImageForHeading = (heading) => {
//     switch (heading) {
//       case "Todo":
//         return Todoimage;
//       case "Backlog":
//         return Backlogimage;
//       case "In progress":
//         return Inprogressimage;
//       default:
//         return null; // You can return a default image if needed
//     }
//   };

//   const headingImage = getImageForHeading(heading); // Get the appropriate image

//   return (
//     <div className="kanban-column">
//       <h2>
//         {headingImage && (
//           <img src={headingImage} alt={heading} className="column-icon" />
//         )}{" "}
//         {/* Display the icon */}
//         {heading}
//       </h2>
//       {(groupData.tickets || groupData).map((ticket) => (
//         <KanbanTicket key={ticket.id} ticket={ticket} />
//       ))}
//     </div>
//   );
// };

// export default KanbanColumn;

import React from "react";
import KanbanTicket from "./KanbanTicket";
import Todoimage from "../assets/images/To-do.svg";
import Backlogimage from "../assets/images/Backlog.svg";
import Inprogressimage from "../assets/images/in-progress.svg";
import Plusimage from "../assets/images/3 dot menu.svg";
import Addimage from "../assets/images/add.svg";

const KanbanColumn = ({ groupData, grouping }) => {
  // Determine the heading based on grouping type
  const heading =
    grouping === "user"
      ? groupData.userName
      : grouping === "status"
      ? groupData[0]?.status // Access the status directly if grouping by status
      : groupData[0]?.priority; // Access the priority directly if grouping by priority

  const ticketCount = Array.isArray(groupData)
    ? groupData.length
    : groupData.tickets.length;

  // Determine the image based on the heading
  const getImageForHeading = (heading) => {
    switch (heading) {
      case "Todo":
        return Todoimage;
      case "Backlog":
        return Backlogimage;
      case "In progress":
        return Inprogressimage;
      default:
        return null; // You can return a default image if needed
    }
  };

  const headingImage = getImageForHeading(heading); // Get the appropriate image

  return (
    <div className="kanban-column">
      <div className="column-header">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {" "}
          {headingImage && (
            <img src={headingImage} alt={heading} className="column-icon" />
          )}
          <h2 className="heading-text">{heading}</h2>
          <p
            style={{
              marginLeft: "20px",
              color: "grey",
            }}
          >
            {ticketCount}
          </p>
        </div>
        {/* Add the Plusimage and Addimage next to the heading */}
        <div className="icons">
          <img src={Addimage} alt="Add Ticket" className="add-icon" />
          <img src={Plusimage} alt="Options" className="options-icon" />
        </div>
      </div>
      {(groupData.tickets || groupData).map((ticket) => (
        <KanbanTicket key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default KanbanColumn;
