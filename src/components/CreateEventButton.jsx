import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

export default function CreateEventButton() {
  const { setShowEventModal } = useContext(GlobalContext);

  const handleClick = () => {
    setShowEventModal(true);
  }

  return (
    <button
      className='border p-2 rounded-full flex justify-between items-center shadow-md hover:shadow-2xl'
      onClick={handleClick}
    >
      <img src="/assets/plus.svg" alt="create event button" className='w-7 h-7' />
      <span className='pl-3 pr-7'>Create</span>
    </button>
  )
}
