import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (

    <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={30}
      dateFormat="MMMM d, yyyy h:mm aa"
      minDate={new Date()}
      filterDate={(date) => {
        const day = date.getDay();
        const hours = date.getHours();
        // Restrict availability to Monday through Friday, 8am-12pm and 4pm-8pm, and Saturday 8am-4pm
        return (day >= 1 && day <= 5 && hours >= 8 && hours <= 12) || (day >= 1 && day <= 5 && hours >= 16 && hours <= 20) || (day === 6 && hours >= 8 && hours <= 16);
      }}
    />
  );
};

export default Calendar;
