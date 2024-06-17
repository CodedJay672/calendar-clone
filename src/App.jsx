import React, { useEffect, useState, useContext } from 'react'
import { getMOnth } from './utils/utils'
import CalendarHeader from './components/CalendarHeader'
import Month from './components/Month'
import Sidebar from './components/Sidebar'
import GlobalContext from './context/GlobalContext'

function App() {
  const {monthIndex} = useContext(GlobalContext);
  const [currentMonth, setCurrentMonth] = useState(getMOnth());

  useEffect(() => {
    setCurrentMonth(getMOnth(monthIndex));
  }, [monthIndex])

  return (
    <div className='h-screen flex flex-col'>
      <CalendarHeader />
      <div className='flex flex-1'>
        <Sidebar />
        <Month month={currentMonth} />
      </div>
    </div>
  )
}

export default App
