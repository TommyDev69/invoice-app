const Tables = () => {
  return (
    <div className=" px-[10px] mt-[74px]  flex items-center   w-full h-[343px] rounded-[40px] gap-[14px]">
        <div className=" w-[65%] h-[343px] rounded-[40px] p-[32px] bg-white ">

            <div className="flex justify-between items-center p y-[32px] h-[60px] bg-[#ffffff]  ">
                <div className="font-500 pdl-[20px] w-[172px] h-[25] text-[20px] leading-[24.86px] font-grotesk">
                    Recent Invoices
                </div>
                <button className="p -[8px] rounded-[30px] p x-[33px] border-[1px] w-[190px] h-[60px] ">
                <p className="font-500 w-[133px] h-[16px] text-[12px] leading-[16px] font-grotesk">
                    View All invoices
                </p>
                </button>
            </div>
        </div>

      <div className=" w-[35%] h-[343px] rounded-[40px] p-[32px] bg-white ">
        <div className="flex justify-between items-center h-[60px] ">
          <div className="font-500 pdl-[20px] w-[172px] h-[25] text-[20px] leading-[24.86px] font-grotesk">
            Recent Invoices
          </div>

          <button className="p-[8px] rounded-[30px] px-[24px] py-[8px] border-[1px] w-[112px] h-[60px] ">
            <p className="font-500 w-[64px] h-[16px] text-[12px] leading-[16px] font-grotesk text-[#003eff]">
              View all
            </p>
          </button>
        </div>

      </div>
    </div>
  );
};

export default Tables;
