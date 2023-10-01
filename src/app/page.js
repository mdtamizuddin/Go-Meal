import Image from "next/image";
import Banner from "./Components/Home/Banner";
import Category from "./Components/Home/Category";
import Populer from "./Components/Home/popular";
import RecentOrder from "./Components/Home/RecentOrder";
import Sidebar from "./Components/Sidebar";
import Topbar from "./Components/Topbar";
// import RightSide from "./Components/Home/RightSide";
import HomeRight from "./Components/Home/HomeRight";

export default function Home() {
  return (
    <section className="w-full flex justify-between ">
      <div className="container-1">
        <Sidebar />
      </div>
      <div className="container-2 px-5 h-screen overflow-y-auto">
        <Topbar headLine={"Hello Mr User"} />
        <div className="flex w-full">
          <div className="w-[75%] h-screen overflow-y-auto pr-2">
            <Banner />
            <Category />
            <Populer />
            <RecentOrder />
          </div>
          <div className="w-[25%]">
            <HomeRight />
          </div>
        </div>

      </div>


    </section>
  )
}
