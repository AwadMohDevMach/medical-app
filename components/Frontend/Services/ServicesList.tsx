import React from 'react'
import ServicesCard from './ServicesCard'
import { TDataServices } from '@/types/dataServices'

export default function ServicesList({services}:{services:TDataServices[]}) {
  return (
    <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
      {services.map((service,i)=>{
        return(
          <ServicesCard key={i} service={service}/>
        )
      })}
    </div>
  )
}
