// src/components/TicketUtils.jsx

// Helper function to group tickets
export const groupTickets = (tickets, grouping, users) => {
  if (grouping === "user") {
    return tickets.reduce((acc, ticket) => {
      const userId = ticket.userId;
      if (!acc[userId]) {
        acc[userId] = {
          userId: userId,
          userName: users[userId] || "Unknown User",
          tickets: [],
        };
      }
      acc[userId].tickets.push(ticket);
      return acc;
    }, {});
  }

  return tickets.reduce((acc, ticket) => {
    const key = ticket[grouping];
    if (!acc[key]) acc[key] = [];
    acc[key].push(ticket);
    return acc;
  }, {});
};

// Helper function to sort tickets
export const sortTickets = (groupedTickets, sortBy) => {
  return Object.keys(groupedTickets).reduce((acc, key) => {
    const group = groupedTickets[key];
    acc[key] = Array.isArray(group) ? group : { ...group };

    if (acc[key].tickets) {
      acc[key].tickets.sort((a, b) => {
        if (sortBy === "priority") {
          return b.priority - a.priority; // Descending priority
        } else {
          return a.title.localeCompare(b.title); // Ascending title
        }
      });
    } else {
      acc[key] = acc[key].sort((a, b) => {
        if (sortBy === "priority") {
          return b.priority - a.priority; // Descending priority
        } else {
          return a.title.localeCompare(b.title); // Ascending title
        }
      });
    }

    return acc;
  }, {});
};
