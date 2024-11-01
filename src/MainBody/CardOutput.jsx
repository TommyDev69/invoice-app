import SecGridCard from "./Grid/SecGridCard";
import GridCard from "./Grid/GridCard";
import ThirdGrid from "./Grid/ThirdGrid";
import FourthGrid from "./Grid/FourthGrid";
const CardOutput = () => {
    return (  
        <div className="  flex xl:flex-nowrap flex-wrap w-full  gap-[32px]">
             <GridCard />
             <SecGridCard />
             <ThirdGrid />
             <FourthGrid />
        </div>
    );
}
 
export default CardOutput;