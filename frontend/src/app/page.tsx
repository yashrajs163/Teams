// export default function Page() {

//     return <h1>Hello, Next.js!</h1>
  
//   }
// app/page.tsx
import React from 'react';
import TicketsPage from './tickets/page';

const MainPage: React.FC = () => {
  return (
    <div>
      <TicketsPage />
    </div>
  );
};

export default MainPage;
