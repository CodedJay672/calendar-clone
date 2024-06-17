import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import dayjs from 'dayjs';

export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  const handlePrevMon = () => {
    setMonthIndex(monthIndex - 1);
  }

  const handlenextMon = () => {
    setMonthIndex(monthIndex + 1);
  }

  const handleMonthReset = () => {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }

  return (
    <header className='px-4 py-2 flex items-center'>
      <img
        src='/assets/logo.png'
        alt='logo'
        className='mr-2 w-12 h-12'
      />
      <h1 className='mr-10 text-xl text-gray-500 font-bold'>Calendar</h1>

      <button className="rounded border py-2 px-4 mr-5" onClick={handleMonthReset}>
        Today
      </button>
      <button onClick={handlePrevMon}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_left
        </span>
      </button>
      <button onClick={handlenextMon}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_right
        </span>
      </button>
      <h2 className='ml-4 text-xl text-gray-500 font-bold'>{dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}</h2>
    </header>
  )
}
