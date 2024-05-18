import React from 'react'
import { getImageUrl } from '../../utils'

const Section = () => {
  return (
    <div className='flex p-4 flex-col items-start gap-4  '>
          <h1 style={{ fontFamily: 'Sora, sans-serif' }} className='font-bold  whitespace-nowrap  text-2xl text-custom-purple'>Apply On Section
          </h1>
          <p className=' leading-7  text-[#b8b0c9]  '>Apply on section is a game-changer, offering an unparalleled way to manage applications  directly from your website. 
          </p>
          <div className=''>
          <img className='' src={getImageUrl("hero/motionarteffect-img11.png")} alt='none'></img>
          </div>
        </div>
  )
}

export default Section