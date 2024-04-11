import React from 'react'

function Button_Red({handleClick}) {
  return(
    <>
    <button className='bg-red-600 rounded-lg ml-12' onDoubleClick={handleClick}>
    MISSED
    </button>
    </>
  )
}

export default Button_Red