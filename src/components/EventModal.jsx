import React, { useContext, useState } from 'react'
import GlobalContext from '../context/GlobalContext'

const labelClasses = [
  "indigo",
  "gray",
  "green",
  "blue",
  "red",
  "purple"
];

export default function EventModal() {
  const { setShowEventModal, slcDay, dispatchCalEvents, selectedEvt, setSelectedEvt } = useContext(GlobalContext);
  const [ title, setTitle ] = useState(selectedEvt ? selectedEvt.title : '');
  const [ desc, setDesc ] = useState(selectedEvt ? selectedEvt.desc : '');
  const [ selectedLabel, setSelectedLabel ] = useState(
    selectedEvt ? labelClasses.find((lbl) => lbl === selectedEvt.label) :
    labelClasses[0]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const dispatchPayload = {
      title,
      desc,
      label: selectedLabel,
      day: slcDay.valueOf(),
      id: selectedEvt ? selectedEvt.id : Date.now()
    };

    if (selectedEvt) {
      dispatchCalEvents({ type: "update", payload: dispatchPayload });
    } else {
      dispatchCalEvents({ type: "push", payload: dispatchPayload });
    }


    setShowEventModal(false);
  }

  return (
    <div className='fixed top-0 left-0 flex justify-center items-center h-screen w-full'>
      <form className='bg-white rounded-lg shadow-2xl w-1/4'>
        <header className='flex justify-between items-center p-2 bg-gray-100'>
          <button className='material-icons-outlined text-gray-400'>
            drag_handle
          </button>
          <div>
            {selectedEvt && 
              <button 
              className='material-icons-outlined text-gray-400'
                onClick={() => {
                  dispatchCalEvents({type: "delete", payload: selectedEvt})
                  setShowEventModal(false)}
                }
              >
                delete
              </button>
            }
            <button 
              className='material-icons-outlined text-gray-400'
              onClick={() => setShowEventModal(false)}
              >
              close
            </button>
          </div>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-7">
            <div></div>
            <input
              type="text"
              name='title'
              placeholder='Add title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-b-blue-500 transition-all duration-300 ease-in-out'
            />
          </div>
        </div>
        <div className='flex items-center gap-3 p-2'>
          <span className='material-icons-outlined text-gray-400'>schedule</span>
          <p className="text-lg text-gray-400">{slcDay.format('dddd, MMMM DD')}</p>
        </div>
        <div className='flex items-center gap-3 p-2'>
          <span className='material-icons-outlined text-gray-400'>segment</span>
          <input
            type="text"
            name='description'
            placeholder='Add a description'
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className='pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0'
          />
        </div>
        <div className='flex items-center gap-3 p-2'>
          <span className='material-icons-outlined text-gray-400'>bookmark_border</span>
          <div className="flex gap-x-2 items-center">
            {labelClasses.map((lblClass, i) => (
              <span
                key={i}
                onClick={() => setSelectedLabel(lblClass)}
                className={`bg-${lblClass}-500 w-6 h-6 rounded-full flex justify-center items-center`}
              >
                {selectedLabel === lblClass && (
                  <span className='material-icons-outlined text-white text-sm'>
                    check
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
        <footer className='flex justify-end border-t p-3 mt-5'>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 hover:text-white px-6 py-2 transition-all"
            onClick={handleSubmit}
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  )
}
