

const SecHeader = () => {
    const firstButton = "see what’s new";
    const SecondButton = "create";
    return (
        <div className="flex w-full h-[68px] items-center justify-between my-[30px]">
            <h1 className=" font-Grotesk text-[32px] font-500 leading-[39.78px] text-left">
                Invoice
            </h1>

            <div className=" flex  w-[b524px] pt-3 gap-[32px] ">
                <button className="w-[152px]  bg-white h-[38px] leading-relaxed  px-[20px] text-center  py-[8px] gap-2 border-[1px] rounded-[40px]">
                    <p className="font-Grotesk text-[14px] font-500 text-[#697598]  leading-[17.4px] tracking-[0.02em] w-[128px] h-[10px]">

                        {firstButton} 
                    </p>
                </button>

                <button className="w-[140px]  bg-[#003eff]  px-[80px] text-center  py-[8px] gap-2 border-[1px] rounded-[40px]">
                    <p className="font-Grotesk text-[#ffffff] text-[16px] font-500 leading-[19.89px] tracking-[0.02em] w-[68px] h-[20px]">

                        {SecondButton} 
                    </p>
                </button>


             </div>

        </div> 
       
     );
}
 
export default SecHeader;