import React, { useEffect, useState } from 'react'
import { CollectionData, sizeData } from '@/data/Homepage'
import SizeBox from './Products/SizeBox'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { CategoriesData } from '@/data/Homepage';
import CheckBox from './CheckBox';
import ClothColor from './Products/ClothColor';
import { colorData } from '@/data/Homepage';
import PriceSelector from './Products/PriceSelector';
import ClothCard from './Products/ClothCard';
import { tagData } from '@/data/Homepage';
//import Rating from 'react-rating';
import Rating from './Rating';
import MobileFilter from './Products/MobileFilter';
import { IoMdCloseCircleOutline } from "react-icons/io";
import FilterSection from './Products/FilterSection';

const ProductPage = () => {
  const[isFilter,setIsFilter]=useState(false);
  const[size,setSize]=useState([10,78]);

  const handlFilter = () =>{
    setIsFilter(!isFilter)
  }

  //let length=window.innerWidth
  useEffect(()=>{
    window.addEventListener('resize',()=>{{window.innerWidth<500 && setIsFilter(false) }})
    console.log(isFilter)
  },[isFilter])
   const handleSizeChange = (newValue) => {
     setSize(newValue);
     // onOptionChange('size', newValue.toString());
   };

  return (
    <div className='overflow-hidden bg-white'>
      <div className= {isFilter ? 'flex px-8 pt-3 sm:px-3 justify-between p-4' : 'flex justify-between pl-6 mr-9 pt-2'}>
        <span className='font-bold sm:hidden' onClick={handlFilter}>Filter</span>
        <span className='font-semibold hidden sm:block text-[24px]'>Filters</span>
        {isFilter ? <IoMdCloseCircleOutline onClick={handlFilter} /> : <span className='font-bold sm:mr-4'>
          <div className='flex items-center text-gray-600 font-semibold'>Sort by: <span className='font-bold text-black px-2'>
            Featured </span><IoIosArrowDown className='mx-2'/></div>
          </span> } 
      </div>
      <div className='flex gap-5'>
         <div className='sm:w-1/4 hidden sm:block  pl-6 w-full p-4'>
          <div>
            <span className='text-[15px] font-semibold mb-1'>Size</span>
            <span className='flex border-b-2 mt-2 border-gray-400 pb-4'>
              {sizeData.map((item,index)=>(
                <SizeBox  key={index} size={item.size}/>
              ))}
            </span>
          </div>
          <div className='border-b-2 border-gray-400 pb-4'>
            <div className='flex justify-between items-center mt-4'>
            <span className='font-semibold text-[17px]'>Availability</span>
            <IoIosArrowDown/>
            </div>
            <div className='mt-2'>
              <div className='py-[2px] flex items-center'>
                <input type='checkbox'style={{height:'15px', width:'15px'}}/>
                <span className='pl-2 font-semibold'>In stock(20)</span>
              </div>
              <div className='py-[2px] flex items-center'>
                <input type='checkbox' style={{height:'15px', width:'15px'}}/>
                <span className='pl-2 font-medium'>In stock(20)</span>
              </div>
            </div>
          </div>
          <div className='border-b-2 border-gray-400 pb-4 mt-4'>
            <div className='flex justify-between items-center'>
              <span className='font-semibold text-[17px] mb-1'>Category</span>
              <IoIosArrowDown/>
            </div>
            <div className='mt-2'>
              {CategoriesData.map((item)=>(
                // <div key={item.id}>{item.category}</div>
                <CheckBox key={item.id} name={item.category}/>
              ))}
            </div>
          </div>
          <div className='border-b-2 border-gray-400 pb-4 mt-4'>
            <div className='flex justify-between items-center'>
              <span className='font-semibold text-[17px]'>Colors</span>
              <IoIosArrowDown/>
            </div>
            <div className='flex flex-wrap mt-2'>
              {colorData.map((data)=>(
                <ClothColor key={data.id} color={data.colour}/>
              ))}
            </div>
          </div>
          <div className='border-b-2 border-gray-400 pb-4 mt-4'>
            <div className='flex justify-between items-center'>
                <span className='font-semibold text-[17px]'>Price range</span>
                <IoIosArrowDown/>
            </div>
            <div className='mt-4'>
              <PriceSelector 
                min={0}
                max={100}
                value={size}
                onChange={handleSizeChange}
              />
            </div>
            <div className='my-2 mt-4'>
              <button className='w-full bg-black text-white text-[16px] items-center py-1'>Apply</button>
            </div>
          </div>
          <div className='border-b-2 border-gray-400 pb-4 mt-4'>
            <div className='flex justify-between items-center'>
              <span className='font-semibold text-[17px]'>Collections</span>
              <IoIosArrowDown/>
            </div>
            <div className='mt-2'>
              {CollectionData.map((data)=>(
                <CheckBox key={data.id} name={data.col}/>
              ))}
            </div>
          </div>
          <div className='border-b-2 border-gray-400 pb-4  mt-4'>
            <div className='flex justify-between items-center'>
              <span className='font-bold text-[17px]'>Tags</span>
              <IoIosArrowDown/>
            </div>
            <div className='mt-2'>
              {tagData.map((data)=>(
                <CheckBox key={data.id} name={data.tag}/>
              ))}
            </div>
          </div>
          <div className='border-b-2 border-gray-400 pb-4 mt-4'>
            <div className='flex justify-between items-center'>
              <span className='font-bold text-[17px]'>Ratings</span>
              <IoIosArrowDown/>
            </div>
              <div className='flex items-center mt-2'>
                <input type='checkbox' className='mr-2' style={{height:'15px', width:'15px'}}/>
                <span className='fill-yellow-500'>
                <Rating/>
                </span>
                <span className='fill-yellow-500'>
                <Rating/>
                </span>
                <span className='fill-yellow-500'>
                <Rating/>
                </span>
                <span className='fill-yellow-500'>
                <Rating/>
                </span>
                <span className='fill-yellow-500'>
                <Rating/>
                </span>
              </div>
              <div className='flex items-center mt-2'>
                <input type='checkbox' className='mr-2' style={{height:'15px', width:'15px'}}/>
                <span className='fill-yellow-500'>
                <Rating/>
                </span>
                <span className='fill-yellow-500'>
                <Rating/>
                </span>
                <span className='fill-yellow-500'>
                <Rating/>
                </span>
                <span className='fill-yellow-500'>
                <Rating/>
                </span>
                <span className='fill-yellow-500'>
                <Rating/>
                </span>
              </div>
              <div className='flex items-center mt-2'>
                <input type='checkbox' className='mr-2' style={{height:'15px', width:'15px'}}/>
                <span className='fill-yellow-500'>
                <Rating/>
                </span>
                <span className='fill-yellow-500'>
                <Rating/>
                </span>
                <span className='fill-yellow-500'>
                <Rating/>
                </span>
                <span className='fill-yellow-500'>
                <Rating/>
                </span>
                <span className='fill-yellow-500'>
                <Rating/>
                </span>
              </div>
              <div className='flex items-center mt-2'>
                <input type='checkbox' className='mr-2' style={{height:'15px', width:'15px'}}/>
                <span className='fill-yellow-500'>
                <Rating/>
                </span>
                <span className='fill-yellow-500'>
                <Rating/>
                </span>
                <span className='fill-yellow-500'>
                <Rating/>
                </span>
                <span className='fill-yellow-500'>
                <Rating/>
                </span>
                <span className='fill-yellow-500'>
                <Rating/>
                </span>
              </div>
              <div className='flex items-center mt-2'>
                <input type='checkbox' className='mr-2' style={{height:'15px', width:'15px'}}/>
                <span className='fill-yellow-500'>
                <Rating/>
                </span>
                <span className='fill-yellow-500'>
                <Rating/>
                </span>
                <span className='fill-yellow-500'>
                <Rating/>
                </span>
                <span className='fill-yellow-500'>
                <Rating/>
                </span>
                <span className='fill-yellow-500'>
                <Rating/>
                </span>
              </div>
          </div>
        </div>
        {isFilter ? (<FilterSection/>) :
        (<div 
          className= 'grid grid-cols-2 sm:grid sm:grid-cols-3 w-full p-4 -mr-4'>
          <ClothCard/>
          <ClothCard/>
          <ClothCard/>
          <ClothCard/>
          <ClothCard/>
          <ClothCard/>
          <ClothCard/>
          <ClothCard/>
          <ClothCard/>
          <ClothCard/>
          <ClothCard/>
          <ClothCard/>
        </div>) } 
      </div>
    </div>
  )
}

export default ProductPage