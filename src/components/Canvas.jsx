import React, { useEffect } from 'react'
import { canvasbg } from '../../canjs';


const Canvas = () => {
    useEffect(()=>{
        const canvas = document.getElementById('canna');
        canvasbg(canvas);
        
        console.log(canvas,"from plugin")

    },[])
    
  return (
    <canvas id="canna" className='bg-black h-full w-full  ' style={{ position: 'fixed', zIndex: 0 }}>
    </canvas>
  )
}

export default Canvas