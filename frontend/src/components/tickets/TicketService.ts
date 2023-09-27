import axios from 'axios';

export interface TicketData {
  id: number;
  title: string;
  description: string;
  status?: string;
}

const baseUrl = 'http://localhost:8000/api';

export const fetchTickets = async (): Promise<TicketData[]> => {
  try {
    const response = await axios.get<TicketData[]>(`${baseUrl}/tickets/`);
    return response.data;
  } catch (error) {
    console.error("An error occurred while fetching the data.", error);
    throw error;
  }
};
