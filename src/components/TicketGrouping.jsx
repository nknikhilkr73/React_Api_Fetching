import React from "react";
import KanbanColumn from "./KanbanColumn";

const TicketGrouping = ({ groupedTickets, grouping }) => {
  return (
    <div className="kanban-columns">
      {Object.keys(groupedTickets).map((group) => (
        <KanbanColumn
          key={group}
          groupData={groupedTickets[group]}
          grouping={grouping}
        />
      ))}
    </div>
  );
};

export default TicketGrouping;
