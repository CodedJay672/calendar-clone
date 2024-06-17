import React, { Fragment } from 'react'
import Day from './Day'

export default function Month({ month }) {
  return (
    <div className='flex-1 grid grid-cols-7 grid-rows-5'>
      {month.map((week, i) => (
        <Fragment key={i}>
          {week.map((day, idx) => (
            <Day key={idx} day={day} rowIdx={i} />
          ))}
        </Fragment>
      ))}
    </div>
  )
}
