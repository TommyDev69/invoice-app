import React from 'react'
import money from './TableDataImage/money.png'
import Setting from '../../siderBar/image/setting.svg'
import benefit from '../../siderBar/image/benefit.svg'

 function TableGrid() {
  return (
    <div className=' w-full  h-[217px] pt-[64px] xfl:pt-[495px] flex xl:flex-nowrap flex-wrap gap-[32px] items-center'>
      <div className="px-[40px] py-[32px] w-[320px] h-[217px] rounded-[24px] bg-[#003eff]">
        <img src={money} className='w-[80px] h-[80px]' alt='' />
        <div className="w-[259px] h-[57px]">
            <p className=" w-[259px] h-[27px] font-500 font-grotesk text-[22px]  leading-[27.35px] text-[#ffffff] text-left ">Create New Invoice</p>
            <p className=" w-[259px] h-[22px] font-400 text-[14px] leading-[22.4px] tracking-[0.3%]   text-[#ffffff] text-left">Create new invoices easily </p>
        </div>
      </div>

      <div className="px-[40px] py-[32px] w-[320px] h-[217px] rounded-[24px] bg-[#ffffff]">
        <img src={Setting} className='w-[80px] h-[80px]' alt='' />
        <div className="w-[259px] h-[57px] gap-[8px]">
            <p className=" w-[251px] text=[#373b47] h-[27px] font-500 font-grotesk text-[22px]  leading-[27.35px] text-left ">Change Invoice settings</p>
            <p className=" w-[259px] h-[22px] font-400 text-[14px] leading-[22.4px] tracking-[0.3%] text-left">Customise your invoices </p>
        </div>
      </div>

      <div className="px-[40px] py-[32px] w-[320px] h-[217px] rounded-[24px] bg-[#ffffff]">
        <img src={benefit} className='w-[80px] h-[80px]' alt='' />
        <div className="w-[259px] h-[57px] gap-[8px]">
            <p className=" w-[251px] text=[#373b47] h-[27px] font-500 font-grotesk text-[18px]  leading-[27.35px] text-left ">Manage Customer list settings</p>
            <p className=" w-[259px] h-[22px] font-400 text-[14px] leading-[22.4px] tracking-[0.3%] text-left">Add and remove customers </p>
        </div>
      </div>
    </div>
  )
}

export default TableGrid
