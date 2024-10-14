import React from 'react'

export default function Card({numbers,title}) {
  return (
    <div>
            <div className="rounded-lg shadow my-4 text-center text-white bg-gradient-to-r inline-block p-12">
            <p className='  text-[34px] font-bold'>
            {numbers}
            </p>
            <p className='text-[28px]'>{title}</p>
          </div>
    </div>
  )
}
