
import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";

import ProductCard from "../Components/ProductCard";


export default function Home() {
    return (
        <section className="w-full  flex justify-between ">
            <div className="container-1">
                <Sidebar />
            </div>
            <div className="container-2 px-5 h-screen overflow-y-auto">
                <Topbar headLine={"Favourite Food"} />
                <div className="flex w-full">
                    <div className="w-full h-screen overflow-y-auto pr-2 grid grid-cols-4">
                        <ProductCard type={"popular"} />
                        <ProductCard type={"popular"} />
                        <ProductCard type={"popular"} />
                        <ProductCard type={"popular"} />
                        <ProductCard type={"popular"} />
                        <ProductCard type={"popular"} />
                        <ProductCard type={"popular"} />
                        <ProductCard type={"popular"} />
                    </div>
                </div>
            </div>

        </section>
    )
}
