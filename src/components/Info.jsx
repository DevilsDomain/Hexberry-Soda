import React from 'react'
import line from "../assets/lineHandDrawn.svg"

function Info({align}) {
  return (
    <div className={`flex flex-col justify-end gap-3 text-${align} w-44`}>
        <h3 className="itim-regular text-2xl">330 ml</h3>
        <p className="w-44">Naturally fermented and carbonated</p>
        <img src={line} alt="hand drawn line" className={`h-2 w-40 ${align === 'right' ? 'self-end' : 'self-start'}`} />
        <p>Fresh organic fruit</p>
        <img src={line} alt="hand drawn line" className={`h-2 w-40 ${align === 'right' ? 'self-end' : 'self-start'}`} />
        <p>Non-Alchoholic</p>
    </div>
  )
}

export default Info