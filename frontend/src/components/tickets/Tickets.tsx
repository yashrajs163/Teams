
// interface TicketProps {
//     title: string;
//     description: string;
//   }
  
//   const Ticket: React.FC<TicketProps> = ({ title, description }) => {
//     return (
//       <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
//         <div className="md:flex">
//           <div className="p-8">
//             <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
//             <p className="mt-2 text-gray-500">{description}</p>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default Ticket;

import React from 'react';
import { TicketData } from './TicketService';

interface TicketsProps {
  tickets: TicketData[];

}const Tickets: React.FC<TicketsProps> = ({ tickets }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Tickets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="border p-4 rounded-md">
            <h2 className="text-xl font-semibold">{ticket.title}</h2>
            <p>{ticket.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Tickets;
