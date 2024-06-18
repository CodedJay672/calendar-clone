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
  const [selectedEvt, setSelectedEvt] = useState(null);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    if (smallCalendarMonth !== null) {
      setMonthIndex(smallCalendarMonth);
    }
  }, [smallCalendarMonth])

  useEffect(() => {
    localStorage.setItem('savedEvents', JSON.stringify(savedEvents));
  }, [savedEvents])

  useEffect(() => {
    setLabels((prev) => {
      return [...new Set(savedEvents.map((evt) => evt.label))].map((label) => {
        const currentLabel = prev.find((lbl) => lbl.label === label);
        return {
          label,
          checked: currentLabel ? currentLabel.checked : true,
        };
      });
    });
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
        savedEvents,
        setSelectedEvt,
        selectedEvt,
        setLabels,
        labels,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
