import React, { useState } from "react";
import "./Calendar.css";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState("Jan 12, 2024");

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const handleDateClick = (day) => {
    setSelectedDate(`Jan ${day}, 2024`);
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button className="arrow-button">{"<"}</button>
        <span className="month-year">January 2024</span>
        <button className="arrow-button">{">"}</button>
      </div>
      <input
        type="text"
        className="date-input"
        value={selectedDate}
        readOnly
      />
      <div className="weekdays">
        <span>Mo</span>
        <span>Tu</span>
        <span>We</span>
        <span>Th</span>
        <span>Fr</span>
        <span>Sa</span>
        <span>Su</span>
      </div>
      <div className="calendar-days">
        {days.map((day) => (
          <button
            key={day}
            className={`day-button ${
              day === 12 ? "selected-day" : day === 30 ? "highlighted-day" : ""
            }`}
            onClick={() => handleDateClick(day)}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
