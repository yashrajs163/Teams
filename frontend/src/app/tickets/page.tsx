// import Ticket from '@/components/tickets/Tickets';
// import React, { useState } from 'react';

// interface TicketData {
//   id: number;
//   title: string;
//   description: string;
//   status: string; // added status to TicketData
// }

// const HomePage: React.FC = () => {
//   const mockTickets: TicketData[] = [
//     { id: 1, title: 'Sample Ticket 1', description: 'Description for sample ticket 1', status: 'To Do' },
//     { id: 2, title: 'Sample Ticket 2', description: 'Description for sample ticket 2', status: 'In Progress' },
//   ];

//   const [tickets, setTickets] = useState<TicketData[]>(mockTickets);

//   // ... (Keep the useEffect if you will use it later for fetching data)

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-4xl font-semibold mb-4 text-center text-blue-500">Kanban Board</h1>
//       <div className="flex">
//         <div className="w-1/3 p-4">
//           <h2 className="text-2xl font-semibold mb-4 text-center text-blue-500">To Do</h2>
//           {tickets.filter(ticket => ticket.status === 'To Do').map(ticket => (
//             <Ticket key={ticket.id} title={ticket.title} description={ticket.description} />
//           ))}
//         </div>
//         <div className="w-1/3 p-4">
//           <h2 className="text-2xl font-semibold mb-4 text-center text-blue-500">In Progress</h2>
//           {tickets.filter(ticket => ticket.status === 'In Progress').map(ticket => (
//             <Ticket key={ticket.id} title={ticket.title} description={ticket.description} />
//           ))}
//         </div>
//         <div className="w-1/3 p-4">
//           <h2 className="text-2xl font-semibold mb-4 text-center text-blue-500">Done</h2>
//           {tickets.filter(ticket => ticket.status === 'Done').map(ticket => (
//             <Ticket key={ticket.id} title={ticket.title} description={ticket.description} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;


import React from 'react';
import Tickets from '@/components/tickets/Tickets';

const HomePage: React.FC = () => {
  const tickets = [
    { id: 1, title: 'Sample Ticket 1', description: 'Description for sample ticket 1', status: 'Open' },
    //... more tickets
  ];

  return (
    <div>
      <h1 className="text-4xl font-semibold mb-4 text-center">Tickets</h1>
      <Tickets tickets={tickets} />
    </div>
  );
};

export default HomePage;
