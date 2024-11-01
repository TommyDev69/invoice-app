
import './App.css';
import CardOutput from './MainBody/CardOutput';
import SecHeader from './MainBody/SecHeader';
import TableBody from './MainBody/TableData/TableBody';
import TopHeader from './MainBody/TopHeader';
import SideNav from './siderBar/SideNav';

function App() {
  return (


    <div className=" App   bg-custom-gradient  min-h-screen  ">

      <div className="fixed left-0 top-0 w-[280px]  h-screen  bg-white flex   px-[24px] py-[40px]">
        <div className=" w-[232px]  [h-516px] gap-[40px]">
          <SideNav />
        </div>
      </div>

      <div className=" w-full pl-[300px] bg-[#f5f6fa]  min-h-screen px-[40px] pb-[22px] gap-[40px]">
          <TopHeader />
          <SecHeader />
          <CardOutput />
          <TableBody  classNvame="pt-[40px]" />
      </div>


    </div>



  );
}

export default App;
