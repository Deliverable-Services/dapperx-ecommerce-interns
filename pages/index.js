import Image from "next/image";
import { Inter } from "next/font/google";
import ProductCard from "@/components/ProductCard";
import {categories, data, salesData} from "@/data/Homepage.js"
import CheckBox from "@/components/CheckBox";
import { CategoriesData } from "@/data/Homepage.js";
import { useState } from "react";
import SizeBox from "@/components/Products/SizeBox";
import ProductPage from "@/components/ProductPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const[indicate,setIndicate]=useState(false)
  const handleCheck = () =>{
    setIndicate(!indicate)
  }

  return (
    <div className="">
      {/* section 1 */}
         <div className="flex flex-row gap-6 mt-10 pl-16">
          <div className="flex flex-col gap-[70px] w-[45%] ">
            <div className=" flex flex-col gap-4">
              <h2 className=" text-7xl font-bold tracking-wide">Your </h2>
              <p className="text-7xl font-bold tracking-wide"><span className="text-[#BA9B88] ">Ultimate </span>Fashion </p>
              <p className="text-7xl font-bold tracking-wide">Destination</p> 
            </div>
              <p className=" text-lg tracking-widest">Discover the latest trends in fashion for men and kids.Explore our curated collection of clothing, shoes, and accessories that blend style and comfort seamlessly</p>
              <button className="text-white text-md bg-[#141311] w-[28%] h-[35%] ml-[34%]">Start Exploring</button>
              <div className="flex flex-col gap-5 ">
                <h3 className="text-lg font-semibold">Recent Trends</h3>
                <div className=" ">
                    <ProductCard data={data}/> 
                </div>
              </div>
          </div>
          <Image width={450} height={300} alt="main" src={"/mens-clothes.jpg"} className="w-[50%] pr-4"/>
        </div>
      {/* section 2 */}
         <div className="bg-white mt-10">
            <div className="flex flex-row items-center justify-evenly py-16">
              {
                salesData.map((item) => {
                  return <div key={item.id} className="flex flex-row gap-4 items-center justify-center">
                    
                      {item.iconName}
                    
                      <span>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p>{item.details}</p>
                      </span>
                  </div>
                })
              }
            </div>
        </div>
      {/* section 3 */}
      <ProductPage/>
      {/* section 4 */}
        <div>

        </div>
    </div>
  );
}
