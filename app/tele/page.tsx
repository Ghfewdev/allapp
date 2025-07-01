import Image from 'next/image'
import React from 'react'

export default function tele() {
  return (
    <div className=" grid justify-center text-center text-gray-800 bg-[#FFFFFF]">
        <br />
        <p className=' text-5xl'>Telemedicine</p>
        <br />
        <br />
        <Image
                    src="/eis/teledash.jpg"
                    alt="logo10"
                    width={1200}
                    height={1200}
                    className=' border-2 border-black'
                  /></div>
  )
}
