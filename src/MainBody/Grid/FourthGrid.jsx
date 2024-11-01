import React from 'react'
import Overview from "../../siderBar/image/Icons.svg";

function FourthGrid() {
  return (
    <div className=" w-[230px] h-[204] border-[1px] bg-white rounded-[24px] px-[40px] py-[32px]">
      <img src={Overview} alt="" className="w-[40px] h-[40px]" />

      <div className="block w-[175px] h-[84px]">
        <div className="flex items-center h-[41px] w-[157px]">
          <p className="w-[98px] text-[#697598] uppercase h-[20px] font-400 text-[12px] leading-[20px] tracking-[0.08em]">
            total paid
          </p>

          <div className="w-[51px] h-[41px]  rounded-[24px] py-[12px] px-[16px] bg-[#f8e39b]">
            <p className="font-500 font-grotesk w-[19px] h-[17px] text-[14px] leading-[17.4px] tracking-[-0.43px] text-left">
             06
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <p className="w-[108px] h-[35px] font-grotesk font-500 text-[28px] leading-[34.8px]">
          $87,102.
          </p>
          <sub className="w-[24px] h-[21px] text-[#697598] font-grotesk font-500 text-[14px] leading-[17.4px]">
            00
          </sub>
        </div>
      </div>
    </div>
  )
}
export default FourthGrid;
