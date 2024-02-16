import React from 'react'
import china from '../../assets/logo/image 101 (1).png';
import canada from '../../assets/logo/image 94.png';
import africa from '../../assets/logo/image 102.png'
import more from '../../assets/logo/+ MORE.png'
export default function WebMonitors() {
  return (
    <div className='ml-10 shadow p-10'>
     <div class="relative overflow-x-auto  sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b ">
            <tr>
                <th scope="col" class="px-6 py-3">
                <span className='text-black'>  Status Monitor Name</span>
                </th>
                <th scope="col" class="px-6 py-3">
               <span  className='text-black'> Uptime</span>
                </th>
                <th scope="col" class="px-6 py-3">
                <span  className='text-black'>Load Average</span>
                </th>
                <th scope="col" class="px-6 py-3">
               <span className='text-black'> Locations</span>
                </th>
                <th scope="col" class="px-6 py-3">
              <span  className='text-black'>  Type</span>
                </th>
                <th scope="col" class="px-6 py-3">
                <span  className='text-black'>Frequency</span>
                </th>     
            </tr>
        </thead>
        <tbody>
            <tr class="border-b-[1px]">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <div className='flex items-center'>
                  <div className="bg-green w-[14px] h-[14px] rounded-full"></div>
                    <div className='ml-4'>
                      <span>  Clodevo</span>
                    </div>
                  </div>
             
                </th>
                <td class="px-6 py-4">
                <span className='bg-grayColor p-2 rounded text-blackColor'>99%</span>
                </td>
                <td class="px-6 py-4">
                <span className='bg-grayColor p-2 rounded text-blackColor'>  230 ms</span>
                </td>
                <td class="px-6 py-4">
                <div className="flex">
                 <div className="relative left-1"> <img src={china} alt="" /></div>
                 <div className="absolute z-10 ml-6"><img src={canada} alt="" /></div>
                </div>
                </td>
                <td class="px-6 py-4">
                 <span className='bg-grayColor p-2 rounded text-blackColor'>HTTP</span>
                </td>
                <td class="px-6 py-4">
                <div className='flex gap-8'>
                  <div><span className='bg-grayColor p-2 rounded text-blackColor'>5.m</span></div>
                  <div><span className='bg-grayColor pl-4 pr-4 pt-1 pb-2 rounded text-blackColor'>...</span></div>
                </div>
                </td>
               
            </tr>
            <tr class="border-b border-gray">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <div className='flex items-center'>
                  <div className="bg-red w-[14px] h-[14px] rounded-full"></div>
                    <div className='ml-4'>
                      <span>  Clodevo</span>
                    </div>
                  </div>
             
                </th>
                <td class="px-6 py-4">
               
                <span  className='bg-grayColor p-2 rounded text-blackColor'>79%</span>
                </td>
                <td class="px-6 py-4">
                <span className='bg-grayColor p-2 rounded text-blackColor'>  500 ms</span>
                </td>
                <td class="px-6 py-4">
                <div className="flex item-center">
                 <div className="relative left-1 "> <img src={china} alt="" /></div>
                 <div className="absolute z-10 ml-4"><img src={africa} alt="" /></div>
                 <div className="absolute z-10 ml-8"><img src={canada} alt="" /></div>
                 <div className='flex'>
                 <div className="absolute ml-10 mt-2"><img src={more} alt="" /></div>
                 </div>
                </div>
                
                </td>
                <td class="px-6 py-4">
              <span   className='bg-grayColor p-2 rounded text-blackColor'>  HTTP</span>
                </td>
                <td class="px-6 py-4">
                <div className='flex gap-8'>
                  <div><span   className='bg-grayColor p-2 rounded text-blackColor'>5 m</span></div>
                  <div><span className='bg-grayColor pl-4 pr-4 pt-1 pb-2 rounded text-blackColor'>...</span></div>
                </div>
                </td>
               
            </tr>
            <tr class="border-b border-gray">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <div className='flex items-center'>
                  <div className="bg-yellowColor w-[14px] h-[14px] rounded-full"></div>
                    <div className='ml-4'>
                      <span>  Clodevo</span>
                    </div>
                  </div>
             
                </th>
                <td class="px-6 py-4">
               
                <span  className='bg-grayColor p-2 rounded text-blackColor'>  79%</span>
                </td>
                <td class="px-6 py-4">
                <span className='bg-grayColor p-2 rounded text-blackColor'>  500 ms</span>
                </td>
                <td class="px-6 py-4">
                <div className="flex relative item-center">
                 <div className="absolute -top-4 ml-4"><img src={canada} alt="" /></div>
                </div>
                
                </td>
                <td class="px-6 py-4">
              <span   className='bg-grayColor p-2 rounded text-blackColor'>  HTTP</span>
                </td>
                <td class="px-6 py-4">
                <div className='flex gap-8'>
                  <div><span   className='bg-grayColor p-2 rounded text-blackColor'>5 m</span></div>
                  <div><span className='bg-grayColor pl-4 pr-4 pt-1 pb-2 rounded text-blackColor'>...</span></div>
                </div>
                </td>
               
            </tr>

            <tr class="border-b border-gray">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <div className='flex items-center'>
                 
                    <div className='ml-4'>
                   
                    </div>
                  </div>
             
                </th>
                <td class="px-6 py-4">
               
                
                </td>
                <td class="px-6 py-4">
               
                </td>
                <td class="px-6 py-4">
                <div className="flex relative item-center">
               
                </div>
                
                </td>
                <td class="px-6 py-4">
             
                </td>
                <td class="px-6 py-4">
                <div className='flex gap-8'>
               
                 
                </div>
                </td>
               
            </tr>
            <tr class="border-b border-gray">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <div className='flex items-center'>
                 
                    <div className='ml-4'>
                   
                    </div>
                  </div>
             
                </th>
                <td class="px-6 py-4">
               
                
                </td>
                <td class="px-6 py-4">
               
                </td>
                <td class="px-6 py-4">
                <div className="flex relative item-center">
               
                </div>
                
                </td>
                <td class="px-6 py-4">
             
                </td>
                <td class="px-6 py-4">
                <div className='flex gap-8'>
               
                 
                </div>
                </td>
               
            </tr>
            <tr class="border-b border-gray">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <div className='flex items-center'>
                 
                    <div className='ml-4'>
                   
                    </div>
                  </div>
             
                </th>
                <td class="px-6 py-4">
               
                
                </td>
                <td class="px-6 py-4">
               
                </td>
                <td class="px-6 py-4">
                <div className="flex relative item-center">
               
                </div>
                
                </td>
                <td class="px-6 py-4">
             
                </td>
                <td class="px-6 py-4">
                <div className='flex gap-8'>
               
                 
                </div>
                </td>
               
            </tr>
            <tr class="border-b border-gray">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <div className='flex items-center'>
                 
                    <div className='ml-4'>
                   
                    </div>
                  </div>
             
                </th>
                <td class="px-6 py-4">
               
                
                </td>
                <td class="px-6 py-4">
               
                </td>
                <td class="px-6 py-4">
                <div className="flex relative item-center">
               
                </div>
                
                </td>
                <td class="px-6 py-4">
             
                </td>
                <td class="px-6 py-4">
                <div className='flex gap-8'>
               
                 
                </div>
                </td>
               
            </tr>
            <tr class="border-b border-gray">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <div className='flex items-center'>
                 
                    <div className='ml-4'>
                   
                    </div>
                  </div>
             
                </th>
                <td class="px-6 py-4">
               
                
                </td>
                <td class="px-6 py-4">
               
                </td>
                <td class="px-6 py-4">
                <div className="flex relative item-center">
               
                </div>
                
                </td>
                <td class="px-6 py-4">
             
                </td>
                <td class="px-6 py-4">
                <div className='flex gap-8'>
               
                 
                </div>
                </td>
               
            </tr>

        </tbody>
    </table>
</div>

    </div>
  )
}
