import React from 'react'
// first card
import  icons3 from '../../assets/Monitor/SVG.png'
import  icons1 from '../../assets/Monitor/Frame.png'
// second card
import  icons from '../../assets/Monitor/Frame (1).png'
import  icons4 from '../../assets/Monitor/SVG (1).png'
// last card
import  icons2 from '../../assets/Monitor/Img.png'
import  icons5 from '../../assets/Monitor/SVG (2).png'
import  icons6 from '../../assets/Monitor/info-card-2.png'
import Monitor from './Monitor'
export default function Monitors() {
    const monitors =[
        {
            id:1,
            name:'Total Monitors',
            title:'113'
        },
        {
          id:2,
          img:icons1,
          img1:icons3,
          name:'Healthy',
          title:'90',
         
      },
        {
            id:3,
            img:icons,
            img1:icons4,
            name:'Down',
            title:'8',
            
        },
        {
            id:4,
            img:icons2,
            img1:icons5,
            name:'Pause',
            title:'15',
          
        },
  
    ]
  return (
    <div className='ml-10 shadow border border-red-500 p-10'>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
             {
              monitors.map(monitor=><Monitor
              key={monitor.id}
              monitor={monitor}
              ></Monitor>)  
             }       
        </div>
    </div>
  )
}
