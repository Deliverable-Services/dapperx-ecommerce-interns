import React, { useState } from 'react'
import { CollectionData, sizeData } from '@/data/Homepage'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { CategoriesData } from '@/data/Homepage';
import { colorData } from '@/data/Homepage';
import { tagData } from '@/data/Homepage';
import Rating from '../Rating';
import { IoMdCloseCircleOutline } from "react-icons/io";
import PriceSelector from './PriceSelector';
import CheckBox from '../CheckBox';
import ClothColor from './ClothColor';
import SizeBox from './SizeBox';
const FilterSection = () => {

    const[size,setSize]=useState([10,78]);


    const handleSizeChange = (newValue) => {
        setSize(newValue);
        // onOptionChange('size', newValue.toString());
      };

  return (
    <div className='w-full p-4 sm:hidden'>
          <div>
            <span className='text-[16px] font-bold'>Size</span>
            <span className='flex border-b-2 border-gray-400 pb-2'>
              {sizeData.map((item,index)=>(
                <SizeBox key={index} size={item.size}/>
              ))}
            </span>
          </div>
          <div className='border-b-2 border-gray-400 pb-2'>
            <div className='flex justify-between items-center mt-4'>
            <span className='font-bold text-[16px]'>Availability</span>
            <IoIosArrowDown/>
            </div>
            <div className='mt-1'>
              <div>
                <input type='checkbox'/>
                <span className='pl-2'>In stock(20)</span>
              </div>
              <div>
                <input type='checkbox'/>
                <span className='pl-2'>In stock(20)</span>
              </div>
            </div>
          </div>
          <div className='border-b-2 border-gray-400 pb-2 mt-4'>
            <div className='flex justify-between items-center'>
              <span className='font-bold text-[16px]'>Category</span>
              <IoIosArrowDown/>
            </div>
            <div>
              {CategoriesData.map((item)=>(
                // <div key={item.id}>{item.category}</div>
                <CheckBox key={item.id} name={item.category}/>
              ))}
            </div>
          </div>
          <div className='border-b-2 border-gray-400 pb-2 mt-4'>
            <div className='flex justify-between items-center'>
              <span className='font-bold text-[16px]'>Colors</span>
              <IoIosArrowDown/>
            </div>
            <div className='flex flex-wrap pr-4'>
              {colorData.map((data)=>(
                <ClothColor key={data.id} color={data.colour}/>
              ))}
            </div>
          </div>
          <div className='border-b-2 border-gray-400 pb-2 mt-4'>
            <div className='flex justify-between items-center'>
                <span className='font-bold text-[16px]'>Price range</span>
                <IoIosArrowDown/>
            </div>
            <div className='mt-2'>
              <PriceSelector 
                min={0}
                max={100}
                value={size}
                onChange={handleSizeChange}
              />
            </div>
            <div className='my-2 '>
              <button className='w-full bg-black text-white text-[16px] items-center py-1'>Apply</button>
            </div>
          </div>
          <div className='border-b-2 border-gray-400 pb-2 mt-4'>
            <div className='flex justify-between items-center'>
              <span className='font-bold text-[16px]'>Collections</span>
              <IoIosArrowDown/>
            </div>
            <div>
              {CollectionData.map((data)=>(
                <CheckBox key={data.id} name={data.col}/>
              ))}
            </div>
          </div>
          <div className='border-b-2 border-gray-400 pb-2 mt-4'>
            <div className='flex justify-between items-center'>
              <span className='font-bold text-[16px]'>Tags</span>
              <IoIosArrowDown/>
            </div>
            <div>
              {tagData.map((data)=>(
                <CheckBox key={data.id} name={data.tag}/>
              ))}
            </div>
          </div>
          <div className='border-b-2 border-gray-400 pb-2 mt-4'>
            <div className='flex justify-between items-center'>
              <span className='font-bold text-[16px]'>Ratings</span>
              <IoIosArrowDown/>
            </div>
            <div>
            </div>
              <div className='flex items-center'>
                <input type='checkbox' className='mr-2'/>
                <Rating/>
                <Rating/>
                <Rating/>
                <Rating/>
                <Rating/>
              </div>
              <div className='flex items-center'>
                <input type='checkbox' className='mr-2'/>
                <Rating/>
                <Rating/>
                <Rating/>
                <Rating/>
                <Rating/>
              </div>
              <div className='flex items-center'>
                <input type='checkbox' className='mr-2'/>
                <Rating/>
                <Rating/>
                <Rating/>
                <Rating/>
                <Rating/>
              </div>
              <div className='flex items-center'>
                <input type='checkbox' className='mr-2'/>
                <Rating/>
                <Rating/>
                <Rating/>
                <Rating/>
                <Rating/>
              </div>
              <div className='flex items-center'>
                <input type='checkbox' className='mr-2'/>
                <Rating/>
                <Rating/>
                <Rating/>
                <Rating/>
                <Rating/>
              </div>
          </div>
        </div>
  )
}

export default FilterSection
