import React, { useEffect, useState, useReducer } from 'react';
import GlobalContext from './GlobalContext';
import dayjs from 'dayjs';


const savedEventsReducer = (state, { type, payload }) => {
  switch (type) {
    case "push":
      return [...state, payload];
    case "update":
      return state.map((evt) => evt.id === payload.id ? payload : evt);
    case "delete":
      return state.filter((evt) => evt.id !== payload.id);
    default:
      throw new Error();
  }
}

const initReducer = () => {
  const savedEvtState = localStorage.getItem('savedEvents');
  const parsedSavedEvtState = savedEvtState ? JSON.parse(savedEvtState) : [];

  return parsedSavedEvtState;
}

export default function ContextWrapper({ children }) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
  const [slcDay, setSlcDay] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState(false);
  const [savedEvents, dispatchCalEvents] = useReducer(savedEventsReducer, [], initReducer);

  useEffect(() => {
    if (smallCalendarMonth !== null) {
      setMonthIndex(smallCalendarMonth);
    }
  }, [smallCalendarMonth])

  useEffect(() => {
    localStorage.setItem('savedEvents', JSON.stringify(savedEvents));
  }, [savedEvents])

  return (
    <GlobalContext.Provider value={{
        monthIndex,
        setMonthIndex,
        smallCalendarMonth,
        setSmallCalendarMonth,
        slcDay,
        setSlcDay,
        showEventModal,
        setShowEventModal,
        dispatchCalEvents,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
