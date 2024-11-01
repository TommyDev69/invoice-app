import React from 'react';
import notify from './MainImage/notify (1).svg'
import arror from './mainImage/arrow-square-up.png'
const Header = () => {
    let invoice = 'invoice'
    return (  
           <div className=" w-full h-[100px]  border-b-[1px] flex justify-between border-[rgba(161, 184, 255, 0.2)]">
            <p className=" uppercase font-medium text-[28px] leading-[34.8px] letter-spacing-12">{invoice}</p>
            <div className="w-[176px] flex gap-[24px] height-[64px]">
                <div className="bg-white w-[64px] h-[64px] gap-[16px] rounded-[40px] p-[20px]">
                  <img src={notify} alt="" className='w-[24x] h-[24px]'  />
                </div>

                <div className="p-[12px] bg-white flex items-center gap-[48px] w-[88px] h-[64px] justify-center robvunded-[40px]">
                    <div className="w-[64px]  h-[40px]">
                        <div className="w-[40px] flex h-[40px] p-[12px]  rounded-[180px] bg-[#003EFF]">
                        <p className=' text-white font-grotesk font-bold text-[14px] leading-[17.64px] w-[21px] h-[18px]'>KO</p>
                        <img src={arror} className="w-[24px] h-[24px] ml-[8px]" alt="" />
                        </div>
                    </div>
                </div>
            </div>
           
            </div>
        
    );
}
 
export default Header;