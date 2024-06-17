import React from 'react'

export default function CreateEventButton() {
  return (
    <button className='border p-2 rounded-full flex justify-between items-center shadow-md hover:shadow-2xl'>
      <img src="/assets/plus.svg" alt="create event button" className='w-7 h-7' />
      <span className='pl-3 pr-7'>Create</span>
    </button>
  )
}
