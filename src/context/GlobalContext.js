import React, { createContext } from 'react'

const GlobalContext = createContext({
  monthIndex: 0,
  setMonthIndex: (idx) => {},
});

export default GlobalContext;