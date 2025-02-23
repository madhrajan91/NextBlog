// filepath: /Users/madhavrajan/Documents/nextjs/NextBlog/src/components/Calendar.tsx
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MyCalendar: React.FC = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <Calendar onChange={(value) => setDate(value as Date)} value={date} />
      <p>Selected date: {date.toDateString()}</p>
    </div>
  );
};

export default MyCalendar;