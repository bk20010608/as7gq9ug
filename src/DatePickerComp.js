import React, { useState } from 'react';
import DatePickerInputComponent from './DatePickerInputComponent';

function DatePickerComp() {
  const dateFormatTypes = [
    { value: "MM/DD/YYYY", text: "MM/DD/YYYY" },
    { value: "DD/MM/YYYY", text: "DD/MM/YYYY" },
    { value: "MMM-YYYY", text: "MMM-YYYY" },
    { value: "MMM-YY", text: "MMM-YY" },
    { value: "MM-DD-YYYY", text: "MM-DD-YYYY" },
    { value: "DD-MM-YYYY", text: "DD-MM-YYYY" }
  ];

  const [selectedColumnInfo, setSelectedColumnInfo] = useState({
    targetType: {
      defaultValue: "12/13/1970",
      format: "MM/DD/YYYY",
      expression: "12/13/1970"
    }
  });

  const isLeapYear = (year) => {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  };

  const isValidDate = (day, month, year) => {
    if (!day || !month || !year) return false;
    if (year < 1 || year > 99999999) return false;
    if (month < 1 || month > 12) return false;

    const daysInMonth = [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return day >= 1 && day <= daysInMonth[month - 1];
  };

  const getDateObjBasedOnDefaultFormat = (dateStr) => {
    const [month, day, year] = dateStr.split(/[-\/]/).map(Number);
    if (!isValidDate(day, month, year)) return dateStr;
    return new Date(`${year}-${month}-${day}`);
  };

  const handleDateFormatChange = (value) => {
    setSelectedColumnInfo(prev => ({
      ...prev,
      targetType: {
        ...prev.targetType,
        format: value
      }
    }));
  };

  return (
    <div style={{ marginTop: "200px" }}>
      Hello How Are You!
      <div style={{ padding: "20px" }}></div>
      <DatePickerInputComponent
        selectedColumnInfo={selectedColumnInfo}
        dateFormatTypes={dateFormatTypes}
        getDateObjBasedOnDefaultFormat={getDateObjBasedOnDefaultFormat}
        handleDateFormatChange={handleDateFormatChange}
      />
    </div>
  );
}

export default DatePickerComp;
