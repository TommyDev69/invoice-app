import React from "react";
import Overview from "../../siderBar/image/Icons.svg";

function SecGridCard() {
  return (
    <div className=" w-[230px] h-[204] border-[1px] bg-white rounded-[24px] px-[40px] py-[32px]">
      <img src={Overview} alt="" className="w-[40px] h-[40px]" />

      <div className="block w-[175px] h-[84px]">
        <div className="flex items-center h-[41px] w-[168px]">
          <p className=" uppercase text-[#697598] w-[113px] h-[20px] font-400 text-[12px] leading-[20px] tracking-[0.08em]">
          total overdue
          </p>

          <div className="w-[47px] h-[41px]  rounded-[24px] py-[12px] px-[16px] bg-[#ffb7bd]">
            <p className=" text-[#373b47] font-500 font-grotesk text-[14px] leading-[17.4px] tracking-[-0.43px] text-left">
              13
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <p className="w-[122px] h-[35px] font-grotesk font-500 text-[28px] leading-[34.8px]">
             $23,000.
          </p>
          <sub className="w-[24px] h-[21px] text-[#697598] font-grotesk font-500 text-[14px] leading-[17.4px]">
            .76
          </sub>
        </div>
      </div>
    </div>
  );
}
export default SecGridCard;
