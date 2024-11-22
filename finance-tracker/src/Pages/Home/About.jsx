import React from 'react'
import Card from '../../components/Card'

export default function About() {
  return (
    <div>
      <div className="flex justify-center items-center flex-col">
      <p className="title ext-block text-[60px] font-bold text-white">
         Important Metrics<span className='mx-2 text-green'>reflecting</span> <br />
          our metrics –<br />
        </p>

        <div className="w-auto grid grid-cols-1 md:grid-cols-4 gap-2">
      <Card numbers={'15k'} title={'Happy Clients'}/>
      <Card numbers={'10k'} title={'Team Members'}/>
      <Card numbers={'100%'} title={'Customer Satisfaction'}/>
      <Card numbers={'20 Years'} title={'In Business'}/>
        </div>
      </div>
     
    </div>
  )
}
