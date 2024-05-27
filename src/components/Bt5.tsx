import React from 'react'

export default function Bt5() {
  return (
    <>Bài tập 5
    <div className='bg-blue-200 p-5 w-60'>
        <div className='w-48 h-48 bg-blue-300 text-blue-500 font-medium relative p-3'>
            Relative parent
            <button className='text-white bg-blue-70 p-2 bg-blue-500 borfe rounded-xl absolute left-0 bottom-0'>Absolute child</button>
        </div>
    </div>
    </>
  )
}
