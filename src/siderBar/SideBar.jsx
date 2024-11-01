
import SideMenuList from "./SideMenuList";

const SideBar = () => {
    const getMenu = 'Get Started';
    const  getOverview = "Overview";
    const  getAcct = "Account";
    const  getInvoice =  "Invoice";
    const  getBeneficiary  = "Beneficiary Management";
    const  getHelp = "Help Center";
    const  getSetting = "Settings"
   return(
    <SideMenuList getMenu ={getMenu} getOverview= {getOverview} getAcct = {getAcct}
     getInvoice= {getInvoice} getBeneficiary = {getBeneficiary}  getHelp ={getHelp}  getSetting={getSetting}/>
   )
};

export default SideBar;
