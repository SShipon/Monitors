import React from 'react'
import ContentTop from '../ContentTop/ContentTop'
import Rechart from '../Home/Rechart/Rechart'
import DataMonitorUi from '../Monitors/DataMonitorUi/DataMonitorUi'


export default function Overview() {
  return (
    <div className='main-content'>
     <ContentTop />
     <div className="relative">
      <hr className="w-5/6 absolute right-0" style={{border:'#E6EFF5 solid 1px'}} />
    </div>
    <DataMonitorUi></DataMonitorUi>
   <div className='my-8'>
   <Rechart/>
   </div>
    </div>
  )
}
