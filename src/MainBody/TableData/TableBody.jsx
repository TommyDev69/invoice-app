import React from "react";
import TableGrid from "./TableGrid";
import Tables from "./Tables";

const TableBody = () => {
    return ( 
        <div className="w-full  h-[1022px] pt-[40px] gap-[24px]">
            <div className=" capitalize  h-[25px]  flex gap-[46px]">
             <div className="w-[195px] h-[25px]  ">
                <p className="font-500  text-[20px] leading-[24.86px] text-[#1f1f23]">Invoice Actions</p>
             </div>
              <div className="w-full border-[1px] border-t-0 border-l-0  border-r-0  border-solid border-[#ffffff]"></div>
            </div>

            <TableGrid />

            <Tables />
        </div>
     );
}
 
export default TableBody; 