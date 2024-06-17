import dayjs from 'dayjs'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import { getMOnth } from '../utils/utils';
import GlobalContext from '../context/GlobalContext';

export default function SmallCalendar() {
  const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMOnth());
  const { monthIndex } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMOnth(currentMonthIdx));
  }, [currentMonthIdx])

  useEffect(() => {
    setCurrentMonthIdx(monthIndex);
  }, [monthIndex])

  const handlePrevMonth = () => {
    setCurrentMonthIdx(currentMonthIdx - 1);
  }
  
  const handleNextMonth = () => {
    setCurrentMonthIdx(currentMonthIdx + 1);
  }

  const getCurrentClass = (day) => {
    const format = 'DD-MM-YY';
    const currentDay = dayjs().format(format);
    const thisDay = day.format(format);

    if (currentDay === thisDay) {
      return 'bg-blue-500 text-white rounded-full'
    } else {
      return ''
    }
  }

  return (
    <div className='mt-9'>
      <header className='flex justify-between'>
        <p className="text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), currentMonthIdx)).format('MMMM YYYY')}
        </p>
        <div>
          <button onClick={handlePrevMonth}>
            <span className='material-icons-outlined text-gray-600 cursor-pointer mx-2'>
              chevron_left
            </span>
          </button>
          <button onClick={handleNextMonth}>
            <span className='material-icons-outlined text-gray-600 cursor-pointer mx-2'>
              chevron_right
            </span>
          </button>
        </div>
      </header>
      <div className='grid grid-cols-7 grid-rows-6'>
        {currentMonth[0].map((day, i) => (
          <span key={i}>{day.format('dd')}</span>
        ))}
        {currentMonth.map((row, idx) => (
          <Fragment key={idx}>
            {row.map((date, i) => (
              <button key={i} className={`py-1 w-full ${getCurrentClass(date)}`}>
                <span className='text-sm'>{date.format('D')}</span>
              </button>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  )
}
