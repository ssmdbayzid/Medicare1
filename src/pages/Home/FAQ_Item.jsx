
import React, { useState } from 'react'

// import {BiMinus, BiPlus} from 'react-icons/bi'


const FAQ_Item = ({data}) => {
    const [open, setOpen] = useState(false)

  return (
    <div className="flex items-center justify-between border p-3 mb-3 pr-5">
        <p>{data.question}</p>
         <span onClick={()=> setOpen(!open)}
         className="p-2 border rounded-md cursor-pointer">
             {/* {!open ? <BiPlus /> : <BiMinus />} */}
                data
            </span>
        <FAQ_Item data={data} />
  </div>
  )
}

export default FAQ_Item