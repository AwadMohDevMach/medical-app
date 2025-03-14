import React from 'react'

export default function SectionHeading({title}:{title:string}) {
  return (
    <h2 className='mb-3 leading-[1.2] text-dark
    dark:text-white sm:text-4xl md:text-[40px] scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
      {title}
    </h2>
  )
}
