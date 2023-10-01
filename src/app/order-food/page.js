import Image from "next/image";
import Topbar from "../Components/Topbar";

import Sidebar from "../Components/Sidebar";
import OrderRightSide from "./OrderRightSide";


export default function Home() {
  return (
    <section className="w-full  flex justify-between ">
      <div className="container-1">
        <Sidebar />
      </div>
      <div className="container-2 px-5 h-screen overflow-y-auto">
        <Topbar headLine={"Food Order"} />
        <div className="flex w-full">
          <div className="w-[75%] h-screen overflow-y-auto pr-2 grid gap-10 justify-items-center grid-cols-4 mt-10">
            <OrderCard count={1} status={"completed"} />
            <OrderCard count={2} status={"delivering"} />
            <OrderCard count={3} status={"completed"} />
            <OrderCard count={4} status={"prepared"} />
            <OrderCard count={5} status={"completed"} />
            <OrderCard count={6} status={"delivering"} />
            <OrderCard count={7} status={"delivering"} />
            <OrderCard count={8} status={"delivering"} />
          </div>
          <div className="w-[25%]">
          <OrderRightSide />
          </div>
        </div>
      </div>

    </section>
  )
}


const OrderCard = ({ status, count }) => {
  return (
    <div className="w-full hover:border-gray-400  border cursor-pointer rounded-2xl" >
      <h4 className="text-zinc-800 text-center text-lg font-bold mt-6">Order #{count}</h4>
      <p className="text-zinc-400 text-sm mt-2 text-center font-normal ">Nov 11, 2021 , 18:38 PM</p>
      <div className="w-[90%] mt-4 mx-auto h-px border border-zinc-300"></div>
      <div className="px-4 mt-4">
        <h2 className="text-zinc-800 text-lg font-medium ">Fast Food Resto</h2>
        <div className="flex items-center mt-2">
          <Image src={'/Images/star.svg'} width={16} height={16} alt="star" />
          <p className="text-zinc-400 text-sm font-normal mx-2 ">5.0</p>
          <div className="w-1 h-1 bg-stone-300 rounded-full mr-2" />
          <p className="text-zinc-400 text-sm font-normal ">1k+ Reviews</p>
        </div>
        <div className="w-full mt-4 h-px border border-zinc-300"></div>
        <div className="flex justify-between mt-3">
          <h5 className="text-zinc-400 text-sm font-normal ">Delivery Time </h5>
          <h5 className="text-zinc-800 text-sm font-medium ">10 Min</h5>
        </div>
        <div className="w-full mt-4 h-px border border-zinc-300"></div>
        <h3 className="text-zinc-800 mt-3 text-lg font-medium ">Order Menu</h3>
        <MenuCard />
        <MenuCard />
        <div className="w-full mt-5 h-px border border-zinc-300"></div>
        {
          status === "completed" &&
          <button className="w-full my-5 h-12 p-4 bg-lime-400 bg-opacity-10 rounded-2xl border border-lime-400 justify-center items-center gap-2.5 inline-flex">
            <div className="text-lime-400 text-sm font-medium ">Completed</div>
          </button>
        }
        {
          status === "delivering" &&
          <button className="w-full my-5 h-12 p-4 bg-yellow-500 bg-opacity-10 rounded-2xl border border-yellow-500 justify-center items-center gap-2.5 inline-flex">
            <div className="text-yellow-500 text-sm font-medium ">Delivering to you</div>
          </button>
        }
        {
          status === "prepared" &&
          <button className="w-full my-5 h-12 p-4 bg-sky-500 bg-opacity-10 rounded-2xl border border-sky-500 justify-center items-center gap-2.5 inline-flex">
            <div className="text-sky-500 text-sm font-medium ">Order being prepared</div>
          </button>
        }

      </div>

    </div>
  )
}


const MenuCard = () => {
  return (
    <div className='flex items-center justify-between mb-3'>
      <div className='flex items-center'>
        <Image src={"/Images/product/fish-burger.jpg"} width={64} height={64} alt='This is Image'/>
        <div className='ml-2'>
          <h4 className="text-zinc-800 text-sm font-semibold ">Pepperoni Pizza</h4>
          <p className="text-zinc-400 text-sm font-normal ">x1</p>
        </div>
      </div>
      <h2>
        <span className="text-zinc-800 text-sm font-semibold ">+</span><span className="text-yellow-500 text-sm font-semibold ">$</span><span className="text-zinc-800 text-sm font-semibold ">5.59</span>
      </h2>
    </div>
  )
}