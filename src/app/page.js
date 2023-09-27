import Sidebar from "./Components/Sidebar";
import Topbar from "./Components/Topbar";

export default function Home() {
  return (
    <section className="w-full flex justify-between ">
      <div className="container-1">
        <Sidebar />
      </div>
      <div className="container-2 ">
        <Topbar />
      </div>
      <div className="container-3 bg-gray-100">

      </div>


    </section>
  )
}
