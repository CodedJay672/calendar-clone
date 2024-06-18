import React, { useEffect, useState } from 'react';
import GlobalContext from './GlobalContext';
import dayjs from 'dayjs';

export default function ContextWrapper({ children }) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
  const [slcDay, setSlcDay] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState(false);

  useEffect(() => {
    if (smallCalendarMonth !== null) {
      setMonthIndex(smallCalendarMonth);
    }
  }, [smallCalendarMonth])

  return (
    <GlobalContext.Provider value={{
        monthIndex,
        setMonthIndex,
        smallCalendarMonth,
        setSmallCalendarMonth,
        slcDay,
        setSlcDay,
        showEventModal,
        setShowEventModal
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
