
// import { Metadata } from "next"
import Image from "next/image"

import Dashboard from '@/components/Dashboard/Dashboard'
import React from 'react'

// export const metadata: Metadata = {
//   title: "Dashboard",
//   description: "Example dashboard app built using the components.",
// }
export default function page() {
  return (
    <div>
      <Dashboard/>
    </div>
  )
}
