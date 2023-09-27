import React from 'react';
import Ticket from '../tickets/Tickets';
import { TicketData } from '@/services/api';


interface ColumnsProps {
  tickets: TicketData[];
}

const Columns: React.FC<ColumnsProps> = ({ tickets }) => {
  // You can filter tickets based on their status
  const toDoTickets = tickets.filter(ticket => ticket.status === 'To Do');
  const inProgressTickets = tickets.filter(ticket => ticket.status === 'In Progress');
  const doneTickets = tickets.filter(ticket => ticket.status === 'Done');

  return (
    <div className="flex">
      <div className="column">
        <h2>To Do</h2>
        {toDoTickets.map(ticket => <Ticket key={ticket.id} {...ticket} />)}
      </div>
      <div className="column">
        <h2>In Progress</h2>
        {inProgressTickets.map(ticket => <Ticket key={ticket.id} {...ticket} />)}
      </div>
      <div className="column">
        <h2>Done</h2>
        {doneTickets.map(ticket => <Ticket key={ticket.id} {...ticket} />)}
      </div>
    </div>
  );
};

export default Columns;
