import Image from "next/image";
import { Inter } from "next/font/google";
import ProductCard from "@/components/ProductCard";
import {category1, category2,dealsData, data, salesData} from "@/data/Homepage.js"
import { Dot } from "lucide-react";
import Rating from "@/components/Rating";
import Carausel from "@/components/Carausel";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col w-[100vw] relative">
        <div className="flex flex-row max-lg:flex-col sm:w-[100%] max-lg:w-[100vw]   gap-6 mt-10 pl-16">
          <div className="flex flex-col gap-[70px] w-[45%] max-lg:w-[100%] ">
            <div className=" flex  text-7xl  max-lg:text-4xl  flex-col gap-4 ">
              <h2 className="font-bold tracking-wide">Your </h2>
              <p className=" font-bold tracking-wide"><span className="text-[#BA9B88] ">Ultimate </span>Fashion </p>
              <p className="font-bold tracking-wide">Destination</p> 
            </div>
              <p className=" text-lg tracking-widest">Discover the latest trends in fashion for men and kids.Explore our curated collection of clothing, shoes, and accessories that blend style and comfort seamlessly</p>
              <button className="text-white  text-md bg-[#141311] w-[160px] h-[50px] mx-auto ">Start Exploring</button>
              <div className="flex flex-col gap-5 max-lg:items-center max-lg:justify-center  ">
                <h3 className="text-md font-bold">Recent Trends</h3>
                <div className="">
                    <ProductCard data={data}/> 
                </div>
              </div>
          </div>
          <Image width={450} height={300} alt="main" src={"/mens-clothes.jpg"} className="w-[50%] h-[100%] max-lg:hidden pr-4"/>
        </div>
      {/* section 2 */}
        <div className="bg-white mt-10 flex flex-col place-items-center justify-center w-full">


          <div className="flex flex-row max-lg:grid max-lg:grid-cols-2 max-lg:grid-rows-2 items-center justify-evenly gap-40 py-16">
              {
                salesData.map((item) => {
                  return <div key={item.id} className="flex flex-row gap-4 max-lg:flex-col items-center justify-center">
                    
                      {item.iconName}
                    
                      <span>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p>{item.details}</p>
                      </span>
                  </div>
                })
              }
            </div>

            <div className="flex flex-row gap-10 w-[100%] h-[100%]">

            <div className="flex flex-col gap-10  w-[50%]">
              {

                category1.map((category) => { 
                    return <div key={category.id} className= {`${category.id === 1 ? '' :''} flex relative items-end justify-end`}>
                    <Image  width={650} height={550} alt="category-image" src={category.bgimage} />
                    <div className=" flex flex-col absolute justify-center items-center mb-[10%] mr-[8%] text-lg font-semibold text-white">
                      <p className="">{category.offer}</p>
                      <h3 className="text-3xl font-bold">{category.category}</h3>
                      <p className="text-3xl ">{category.text}</p>
                      <button className="bg-black text-sm w-[150px] h-[30px] rounded-lg">{category.buttonText}</button>
                    </div>
                  </div>
                }) 
                
              } 
            </div>

            {/* <div className="grid grid-rows-2 grid-cols-1 gap-10 ">
            {
              
              category2.map((category) => { 
                return <div key={category.id} className="flex flex-auto relative items-end justify-end ">
               <Image  width={350} height={550} alt="category-image" src={category.bgimage} className=" h-auto w-auto aspect-square"/>
                <div className=" flex flex-col absolute justify-center items-center mb-[10%] mr-[8%] text-lg font-semibold text-white">
                  <p className="">{category.offer}</p>
                  <h3 className="text-3xl font-bold">{category.category}</h3>
                 <p className="text-3xl ">{category.text}</p>
                 <button className="bg-black text-sm w-[150px] h-[30px] rounded-lg">{category.buttonText}</button>
               </div>
             </div>
              }) 

            } 
            </div> */}

          </div>
            <div className="bg-[#EDEEF1] flex flex-row text-3xl px-3 py-8 font-semibold items-center justify-evenly w-full my-10">
              <p >SHORTS AND TRACKSUITS </p>
              <span><Dot size={56} strokeWidth={3} /></span>
              <p >SUNGLASSES </p>
              <span><Dot size={56} strokeWidth={3} /></span>
              <p >30% OFF ON FRAGRANCES </p>
              <span><Dot size={56} strokeWidth={3} /></span>
              <p >FORMAL WEARS</p>
            </div>


            <div className="text-4xl font-bold tracking-wide mb-10">
              SHOP BY CATEGORY
            </div>


            <div>
              <Carausel/>
            </div>

            <div className="bg-[#EDEEF1] w-full flex flex-col items-center justify-center py-10">
              <p className="text-4xl font-bold mb-10">DEALS OF THE DAY</p>
              <div className="flex flex-row items-center gap-32">
                {
                  dealsData.map((deal,index) => {
                    return <div key={index} className={`${active === index ? "" : ""}`}>
                            <Image src={deal.imageUrl} width={250} height={150} alt="deal" />
                            <div>
                              <div className="">
                                <p>{deal.name}</p>
                                <div>
                                  <span>₹ {deal.price}</span>
                                  <div className='flex flex-row fill-yellow-500'>
                                    {
                                      [...Array(5)].map((_, index) => {
                                        return <Rating key={index}/>
                                      })
                                    }
                                  </div>
                                </div>
                              </div>
                            </div>
                      </div>
                  })
                }
              </div>
            </div>
        </div>
      {/* section 3 */}
        <div>

        </div>
      {/* section 4 */}
        <div>

        </div>
    
    </div>
  );
}
