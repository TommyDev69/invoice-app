import Overview from '../../siderBar/image/Icons.svg'

const GridsCard = () => {
    return ( 
        
            <div className=" w-[230px] h-[204] border-[1px] bg-white rounded-[24px] px-[40px] py-[32px]">

               <img src={Overview} alt="" className='w-[40px] h-[40px]' />

               <div className="block w-[175px] h-[84px]">
                <div className="flex items-center h-[41px] w-[153px]">
                    <p className=" uppercase text-[#697598] w-[79px] h-[20px] font-400 text-[12px] leading-[20px] tracking-[0.08em]">
                    total paid
                    </p>

                    <div className="w-[68px] h-[41px]  rounded-[24px] py-[12px] px-[16px] bg-[#b6fdd3]">
                        <p className="text-[#373b47] uppercase font-500 font-grotesk text-[14px] leading-[17.4px] tracking-negative text-left">
                            1,289
                        </p>
                    </div>

                   

                </div>
                <div className="flex items-center">
                <p className="w-[146px] h-[35px] font-grotesk font-500 text-[28px] leading-[34.8px]">$4,120,102.</p>
                <sub className="w-[24px] h-[21px] text-[#697598] font-grotesk font-500 text-[14px] leading-[17.4px]">76</sub>
                </div>
               </div>
            </div>
        
     );
}
 
export default GridsCard;