import Image from "next/image";
import Banner from "./Components/Home/Banner";
import Category from "./Components/Home/Category";
import Populer from "./Components/Home/popular";
import RecentOrder from "./Components/Home/RecentOrder";
import Sidebar from "./Components/Sidebar";
import Topbar from "./Components/Topbar";
import RightSide from "./Components/Home/RightSide";

export default function Home() {
  return (
    <section className="w-full flex justify-between ">
      <div className="container-1">
        <Sidebar />
      </div>
      <div className="container-2 px-5 h-screen overflow-y-auto">
        <Topbar />
        <Banner />
        <Category />
        <Populer />
        <RecentOrder />
      </div>
      <div className="container-3 bg-gray-100">
        <div className="flex justify-between px-3 mt-5 items-center">
          <div className="flex items-center ">
            <button >
              <Image src={'/Images/Order-Discussion.png'} width={40} height={40} />
            </button>
            <button className="mx-2">
              <Image src={'/Images/icon/notification.png'} width={40} height={40} />
            </button><button>
              <Image src={'/Images/icon/Setting.png'} width={40} height={40} />
            </button>
          </div>
          <Image width={40} height={40} class="rounded" src="https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg" alt="Default avatar"></Image>
        </div>

        <div style={{ background: '#F8B602' }} className="rounded-lg w-[90%] mx-auto mt-10 h-44 flex items-center justify-between px-4">
          <div className="Balance " style={{ width: 160, height: 101, padding: 16, background: 'white', borderRadius: 16, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
            <div className="Balance" style={{ color: '#2E2E2E', fontSize: 14, fontWeight: '400', wordWrap: 'break-word' }}>Balance</div>
            <div className="12000" style={{ color: '#2E2E2E', fontSize: 32, fontWeight: '700', wordWrap: 'break-word' }}>$12.000</div>
          </div>
          <div>
            <button className="bg-white p-2 rounded-xl">
              <Image src={'/Images/icon/Income.png'} width={30} height={30} alt="Income.png" />
            </button>
            <p className="text-white mt-2">Top Up</p>
          </div>
          <div>
            <button className="bg-white p-2 rounded-xl">
              <Image src={'/Images/icon/Income.png'} width={30} height={30} alt="Income.png" />
            </button>
            <p className="text-white mt-2">Top Up</p>
          </div>
        </div>
        <RightSide />
      </div>

    </section>
  )
}
