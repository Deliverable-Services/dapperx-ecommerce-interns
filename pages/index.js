import Image from 'next/image';
import { Sparkles } from 'lucide-react'

import ProductCard from '@/components/ProductCard';
import { HERO_SECTION_PRODUCTS, SERVICE_DETAILS, MARQUEE_DETAILS, REVIEWS_SECTION_DETAILS, GRID_IMAGES } from '@/utils/constants.js'
import Carousel from '@/components/Carousel';
import GridImg from '@/components/GridImg';
import Button from '@/components/Button/Button';
import MarqueeSlider from '@/components/MarqueeSlider';
import SliderCard from '@/components/SliderCard/SliderCard';
import BlazerCarousel from '@/components/BlazerCarousel';
import FavCarousel from '@/components/FavCarousel';
import ReviewCard from '@/components/ReviewCard';


export default function Home() {


  return (
    <div className='w-full flex flex-col'>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-6 mt-10 px-16 w-full'>
        <div className='flex flex-col gap-[70px] lg:w-[45%] w-full mt-6'>
          <div className=' flex  md:text-7xl text-4xl flex-col md:gap-8 gap-2 font-bold tracking-wide'>
            <h2 >Your </h2>
            <p><span className='text-[#BA9B88] '>Ultimate </span>Fashion </p>
            <p >Destination</p>
          </div>
          <p className=' text-lg tracking-widest'>Discover the latest trends in fashion for men and kids.Explore our curated collection of clothing, shoes, and accessories that blend style and comfort seamlessly</p>
          <button className='text-white text-center bg-[#141311] w-[150px] h-[38px] mx-auto '>Start Exploring</button>
          <div className='flex flex-col gap-5 '>
            <h3 className='text-lg font-bold'>Recent Trends</h3>

            <ProductCard items={HERO_SECTION_PRODUCTS} />
          </div>
        </div>
        <Image width={450} height={300} alt='main' src={'/mens-clothes.jpg'} className='w-[55%] lg:flex hidden h-[870px]  mt-6' />
      </div>
      {/* section 2 */}
      <div className='bg-white mt-10 flex flex-col items-center justify-center w-full'>
        <div className='md:flex flex-row grid grid-cols-2 grid-rows-2  items-center justify-between lg:gap-28 gap-16 px-8 py-16'>
          {
            SERVICE_DETAILS.map((item) => (
              <div key={item.id} className='flex flex-row  gap-6 items-center justify-center'>

                {item.iconName}

                <span>
                  <h3 className='sm:text-2xl font-bold'>{item.title}</h3>
                  <p>{item.details}</p>
                </span>
              </div>)
            )
          }
        </div>

        <div className='w-full md:px-14 px-2 md:py-3 '>
          <GridImg />
        </div>

        <div className='w-full'>
          <MarqueeSlider items={MARQUEE_DETAILS} />
        </div>

        <div className='md:text-4xl text-xl font-bold tracking-wide mb-10 '>
          SHOP BY CATEGORY
        </div>

        <div className='w-full '>
          <Carousel />
        </div>

        <div className='w-full '>
          <SliderCard />
        </div>

        <div className='w-full flex flex-col text-center md:gap-14 gap-7 md:py-16 py-8 items-center justify-center'>
          <p className='md:text-4xl text-lg font-bold'>LUXURY ATTIRE</p>
          <BlazerCarousel />

          <Button components='button'>
            View All Products
          </Button>
        </div>

        <div className='bg-slate w-full md:text-4xl text-xl flex md:flex-row md:gap-0 gap-3 flex-col py-6 items-center justify-evenly'>
          <div className='flex flex-col items-center md:justify-between justify-center md:gap-6'>
            <p className=' font-bold'>1 Million+</p>
            <span className='text-lg font-semibold'>Yearly Sales</span>
          </div>

          <div className='flex items-center md:justify-between justify-center md:gap-6 flex-col md:border-x-2 md:border-black md:px-44'>
            <p className=' font-bold'>95%</p>
            <span className='text-lg font-semibold'>Happy Customers</span>
          </div>

          <div className='flex items-center md:justify-between justify-center md:gap-6 flex-col'>
            <p className=' font-bold'>20k+</p>
            <span className='text-lg font-semibold'>Customer Rating</span>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center md:py-14 py-7 md:gap-9 gap-4 w-full'>
          <p className='md:text-4xl text-xl font-bold '>SHE QUEEN ATTIRES</p>

          <span className='md:text-lg text-sm px-4 md:px-0 flex items-center justify-center text-center'>&quot;Elevate your alegance with our luxurious womens dresses, crafted for sophistiction and style.&quot;</span>
          <div className='flex flex-row w-full md:gap-10 gap-4 items-center justify-center md:px-20 px-3'>
            <Image src={'/queen-attire1.avif'} width={720} height={1020} alt='queen' className=' w-[33%] h-auto' />
            <Image src={'/queen-attire2.webp'} width={720} height={1020} alt='queen' className=' w-[33%] h-auto' />
            <Image src={'/queen-attire3.avif'} width={720} height={1020} alt='queen' className='w-[33%] h-auto' />
          </div>


          <Button components='button'>
            View All Products
          </Button>


        </div>

        <div className='w-full'>
          <FavCarousel />
        </div>

        <div className='w-full flex md:flex-row flex-col-reverse items-center gap-10  md:px-20 px-2 py-10 '>
          <div className='flex flex-col md:items-start items-center gap-10 md:w-[55%] px-4 w-full'>

            <div className='md:text-7xl text-2xl font-bold gap-4 flex flex-col'>
              <h3 >WE THINK</h3>
              <h2 className='flex items-center gap-3'>YOU&apos;LL <span className='text-2xl tracking-wider'>LIKE THESE</span></h2>
            </div>

            <p className=' text-center md:text-left text-xl tracking-wide leading-loose'>Fashion is more than just clothing; it&apos;s an art form, a means of self-expression, and a reflection of culture and society. From haute couture runways to street style, fashion encompasses a wide spectrum of styles, trends, and influences.</p>

            <div className='flex lg:flex-row flex-col gap-10 lg:items-center items-start justify-between w-full md:pr-10'>
              <div className='flex gap-5 items-center text-lg'>
                <div className='border-2 rounded-full p-2 w-16 h-16 border-black flex items-center justify-center'>
                  <Sparkles strokeWidth={1.75} />
                </div>
                <div>
                  <p className='font-bold'>Core instruction</p>
                  <span >Machine wash at 30°C</span>
                </div>
              </div>

              <div className='flex gap-5 items-center text-lg'>
                <div className='border-2 rounded-full p-2 w-16 h-16 border-black flex items-center justify-center'>
                  <Sparkles strokeWidth={1.75} />
                </div>
                <div>
                  <p className='font-semibold'>Fabric Material</p>
                  <span >84% Cotton, 16% Polyster</span>
                </div>
              </div>
            </div>
          </div>
          <div className='md:w-2/5 w-3/4 flex items-center justify-center relative'>
            <Image src={'/hexagon.svg'} width={720} height={1020} alt='hexagon' />
            <Image src={'/hoodie1.png'} width={720} height={1020} alt='hoodie' className='absolute w-auto h-[75%]' />
          </div>
        </div>
      </div>
      {/* section 3 */}
      <div className='w-full'>

        <div className='w-full bg-slate flex flex-col items-center justify-center md:px-24 px-3 md:py-14 py-2 md:gap-10 gap-3'>
          <p className='md:text-4xl text-xl font-bold '>OUR BLOGS</p>
          <div className='grid grid-rows-8 grid-cols-11 w-full md:gap-8 gap-3'>
            {
              GRID_IMAGES.map((image) => (
                <div key={image.id} className={`
            ${image.id === 1 ? 'col-start-1 col-end-4 row-start-1 row-end-4' : ''}
            ${image.id === 2 ? 'col-start-4 col-end-9 row-start-1 row-end-6' : ''}
            ${image.id === 3 ? 'col-start-9 col-end-12 row-start-1 row-end-4' : ''}
            ${image.id === 4 ? 'row-start-4 row-end-7 col-start-1 col-end-4' : ''}
            ${image.id === 5 ? 'row-start-6 row-end-9 col-start-4 col-end-7' : ''}
            ${image.id === 6 ? 'row-start-6 row-end-8 col-start-7 col-end-9' : ''}
            ${image.id === 7 ? 'row-start-4 row-end-7 col-start-9 col-end-12' : ''}`}>
                  <Image width={1000} height={1000} alt='category-image' src={image.bgimage} className='w-auto h-auto aspect-square ' />
                </div>
              ))
            }
          </div>

        </div>


        <ReviewCard items={REVIEWS_SECTION_DETAILS} />

        <div className='w-full bg-slate  '>
          <div className='bg-white  sm:m-8 flex xl:flex-row flex-col items-center justify-evenly py-7 '>

            <p className='flex text-lg font-bold items-baseline gap-2'>NEWS<span className='md:text-5xl text-3xl flex font-bold tracking-widest  items-end'>LETTER</span></p>

            <div className='flex flex-row items-center justify-between px-2 my-10   sm:h-[70px] h-[40px] bg-[#2B2B2B] md:text-xl text-sm'>
              <input
                type='email'
                placeholder='Enter your Email'
                required
                id='email'
                name='email'
                className='bg-[#2B2B2B] text-white text-center md:ml-5 ml-0 '
              />
              <button className=' bg-white text-black  text-center md:text-lg text-sm font-semibold w-full px-3 h-[80%]'>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
