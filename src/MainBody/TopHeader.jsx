import React from "react";
import notify from "./MainImage/notifier.svg";
import arror from "./MainImage/arrow.png";

const TopHeader = () => {
  let invoice = "invoice";
  return (
    <>
      <div className=" w-full  h-[100px] items-center  border-b-[1px] flex justify-between border-[rgba(161, 184, 255, 0.2)]">
        <div className=" uppercase w-[138px] h-[35px] font-500 text-[28px] leading-[34.8px] tracking-[0.12em] text-left">
          {invoice}
        </div>
        {/* <div className="w-[495px] h-[52px] py-[14px] px-[16px]"></div> */}
        <div className="w-[176px] flex gap-[24px] height-[64px]">
          <div className="bg-white w-[64px] h-[64px] gap-[16px] rounded-[40px] p-[20px]">
            <img src={notify} alt="" className="w-[24x] h-[24px] " />
          </div>

          <div className="p-[12px] bg-white flex items-center gap-[48px] w-[88px] h-[64px] justify-center rounded-[40px]">
            <div className="w-[64px]  h-[40px]">
              <div className="w-[40px] flex h-[40px] p-[12px]  rounded-[180px] bg-[#003EFF]">
                <p className=" text-white font-grotesk font-bold text-[14px] leading-[17.64px] w-[21px] h-[18px]">
                  KO
                </p>
                <img
                  src={arror}
                  className="w-[24px] h-[24px] ml-[8px]"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
