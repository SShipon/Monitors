import React from 'react'
import china from '../../assets/logo/image 101 (1).png';
import canada from '../../assets/logo/image 94.png';
import africa from '../../assets/logo/image 102.png'
import more from '../../assets/logo/+ MORE.png'
export default function WebMonitors() {
  return (
    <div className='ml-10'>
     <div class="relative overflow-x-auto  sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b ">
            <tr>
                <th scope="col" class="px-6 py-3">
                <span className='text-gray'>  Status Monitor Name</span>
                </th>
                <th scope="col" class="px-6 py-3">
               <span  className='text-gray'> Uptime</span>
                </th>
                <th scope="col" class="px-6 py-3">
                <span  className='text-gray'>Load Average</span>
                </th>
                <th scope="col" class="px-6 py-3">
               <span className='text-gray'> Locations</span>
                </th>
                <th scope="col" class="px-6 py-3">
              <span  className='text-gray'>  Type</span>
                </th>
                <th scope="col" class="px-6 py-3">
                <span  className='text-gray'>Frequency</span>
                </th>     
            </tr>
        </thead>
        <tbody>
            <tr class="border-b-[1px]">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <div className='flex items-center'>
                  <div className="bg-green w-[10px] h-[10px] rounded-full"></div>
                    <div className='ml-4'>
                      <span>  Clodevo</span>
                    </div>
                  </div>
             
                </th>
                <td class="px-6 py-4">
                99%
                </td>
                <td class="px-6 py-4">
                230 ms
                </td>
                <td class="px-6 py-4">
                <div className="flex">
                 <div className="relative left-1"> <img src={china} alt="" /></div>
                 <div className="absolute z-10 ml-6"><img src={canada} alt="" /></div>
                </div>
                </td>
                <td class="px-6 py-4">
                HTTP
                </td>
                <td class="px-6 py-4">
                <div className='flex gap-5'>
                  <div><button> 5 m</button></div>
                  <div><button>...</button></div>
                </div>
                </td>
               
            </tr>
            <tr class="border-b border-gray">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <div className='flex items-center'>
                  <div className="bg-green w-[10px] h-[10px] rounded-full"></div>
                    <div className='ml-4'>
                      <span>  Clodevo</span>
                    </div>
                  </div>
             
                </th>
                <td class="px-6 py-4">
                99%
                </td>
                <td class="px-6 py-4">
                230 ms
                </td>
                <td class="px-6 py-4">
                <div className="flex">
                 <div className="relative left-1"> <img src={china} alt="" /></div>
                 <div className="absolute z-10 ml-6"><img src={canada} alt="" /></div>
                </div>
                </td>
                <td class="px-6 py-4">
                HTTP
                </td>
                <td class="px-6 py-4">
                <div className='flex gap-5'>
                  <div><button> 5 m</button></div>
                  <div><button>...</button></div>
                </div>
                </td>
               
            </tr>
        </tbody>
    </table>
</div>

    </div>
  )
}
