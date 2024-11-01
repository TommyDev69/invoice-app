import React from "react";
import getIcons from "./image/Icons.png";
import getOverview from "./image/Icons.svg";
import getInvoice from "./image/invoice.svg";
import getBenefit from "./image/benefit.svg";
import getHelp from "./image/help.svg";
import getSet from "./image/setting.svg";

// import getLogo from "./image/Logo.svg";
const SideMenuList = (props) => {
  return (
    <div className=" w-[232px] h-[452px] gap-[12px]">
      <ul>
        <li className="w-[232px] h-[52px] py-[14px] px-[16px] flex items-center gap-[8px] ">
          <img
            src={getIcons}
            className="h-[24px] w-[24px] text-[#697598]"
            alt=""
          />
          <article className="w-[78px] h-[17px] font-400 text-[14px] text-[#697598] leading-[17.12px] tracking-[0.57%]  font-grotesk">
            {props.getMenu}
          </article>
        </li>

        <li className="w-[232px] h-[52px] py-[14px] px-[16px] flex items-center gap-[8px] ">
          <img
            src={getOverview}
            className="h-[24px] w-[24px] text-[#697598]"
            alt=""
          />
          <article className="w-[62px] h-[17px] font-[400] text-[14px] leading-[17.12px] tracking-[0.57%] text-[#697598]  font-grotesk">
            {props.getOverview}
          </article>
        </li>

        <li className="w-[232px] h-[52px] py-[14px] px-[16px] flex items-center gap-[8px] ">
          <img
            src={getIcons}
            className="h-[19.97px] w-[20px] text-[#697598]"
            alt=""
          />
          <article className="w-[63px] h-[17px] text-[14px] font-[400] leading-[17.12px] tracking-[0.57%] text-[#697598]  font-grotesk">
            {props.getAcct}
          </article>
        </li>

        <li className="w-[232px] h-[68px] p-[8px] rounded-[32px]  gap-[8px] bg-[#f8f8fb]">
          <div className="w-[216px] h-[52px] bg-[#ffffff] rounded-[32px] px-[16px]  flex items-center  py-[14px]">
            <img
              src={getInvoice}
              className="h-[24px] w-[24px] text-[#697598]"
              alt=""
            />
            <article className="w-[64px] h-[17px] text-[14px] leading-[17.12px] tracking-[0.57%] font-[400] text-[#697598]  font-grotesk">
              {props.getInvoice}
            </article>
          </div>
        </li>

        <li className="w-[232px] h-[52px] py-[14px] px-[16px] flex items-center  gap-[8px] ">
          <img
            src={getBenefit}
            className="h-[24px] w-[24px] text-[#697598]"
            alt=""
          />
          <article className="w-[164px] h-[17px] text-[14px]  text-[#697598] font-[400] leading-[17.12px] tracking-[0.57%]  font-grotesk">
            {props.getBeneficiary}
          </article>
        </li>

        <li className="w-[232px] h-[52px] py-[14px] px-[16px] flex items-center gap-[8px] ">
          <img
            src={getHelp}
            className="h-[19.13px] w-[20px]  text-[#697598]"
            alt=""
          />
          <article className="w-[80px] h-[17px] text-[14px] leading-[17.12px] tracking-[0.57%] text-[#697598] font-[400]  font-grotesk">
            {props.getHelp}
          </article>
        </li>

        <li className="w-[232px] h-[52px] py-[14px] px-[16px] flex items-center gap-[8px] ">
          <img
            src={getSet}
            className="h-[24px] w-[24px]  text-[#697598]"
            alt=""
          />
          <article className="w-[55px] h-[17px] text-[14px] leading-[17.12px] tracking-[0.57%] text-[#697598] font-[400] font-grotesk">
            {props.getSetting}
          </article>
        </li>
      </ul>
    </div>
  );
};

export default SideMenuList;
