import Overview from "../../siderBar/image/Icons.svg";

const ThirdGrid = () => {
  return (
    <div className=" w-[230px] h-[204] border-[1px] bg-white rounded-[24px] px-[40px] py-[32px]">
      <img src={Overview} alt="" className="w-[40px] h-[40px]" />

      <div className="block w-[175px] h-[84px]">
        <div className="flex items-center h-[41px] w-[151px]">
          <p className="text-[#697598] uppercase  w-[93px] h-[20px] font-400 text-[12px] leading-[20px] tracking-[0.08em]">
            total draft
          </p>

          <div className="w-[50px] h-[41px]  rounded-[24px] py-[12px] px-[16px] bg-[#d9d9e0]">
            <p className=" text-[#373b47] w-[18px] h-[17px]  font-500 font-grotesk text-[14px] leading-[17.4px] tracking-[-0.43px] text-left">
              08
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <p className="w-[115px] h-[35px] font-grotesk font-500 text-[28px] leading-[34.8px]">
          $12,200.
          </p>
          <sub className="w-[24px] h-[21px] text-[#697598] font-grotesk font-500 text-[14px] leading-[17.4px]">
            00
          </sub>
        </div>
      </div>
    </div>
  );
};

export default ThirdGrid;
