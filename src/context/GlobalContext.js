import React, { createContext } from 'react'

const GlobalContext = createContext({
  monthIndex: 0,
  setMonthIndex: (idx) => {},
  //create new context values to sync small and large calendar
  smallCalendarMonth: 0,
  setSmallCalendarMonth: (idx) => {},
  slcDay: null,
  setSlcDay: (day) => {},
  showEventModal: false,
  setShowEventModal: () => {},
  dispatchCalEvents: ({type, payload}) => {},
  savedEvents: [],
  selectedEvt: null,
  setSelectedEvt: () => {},
  setLabels: () => [],
  labels: []
});

export default GlobalContext;