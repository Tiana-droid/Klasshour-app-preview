import React, { useState } from "react";
import DatePicker, { CalendarContainer } from "react-datepicker";

export default function Test() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date: any) => setStartDate(date)}
        isClearable
        placeholderText="I have been cleared!"
      />
    </div>
  );
}
