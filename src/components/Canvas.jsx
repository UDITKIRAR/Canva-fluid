import React, { useEffect } from 'react'
import { canvasbg } from '../../canjs';


const Canvas = () => {
    useEffect(()=>{
        const canvas = document.getElementById('canna');
        canvasbg(canvas);
        
        console.log(canvas,"from plugin")

    },[])
    
  return (
    <canvas id="canna"  style={ {position: 'fixed', zIndex: 0} } className={'bg-black h-full w-full  '}>
    </canvas>
  )
}

export default Canvas