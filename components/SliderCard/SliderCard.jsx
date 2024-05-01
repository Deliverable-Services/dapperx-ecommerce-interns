import { SLIDER_CARD_DETAILS } from '@/utils/constants'
import Image from 'next/image'
import Rating from '../Rating'
import React, { useState, useCallback, useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const SliderCard = () => {

  const [indexes, setIndexes] = useState({
    previousIndex: 1,
    currentIndex: 0,
    nextIndex: 2,
  });

  function determineClasses(indexes, cardIndex) {
    if (indexes.currentIndex === cardIndex) {
      return 'active';
    } else if (indexes.nextIndex === cardIndex) {
      return 'next';
    } else if (indexes.previousIndex === cardIndex) {
      return 'prev';
    }
    return 'inactive';
  }

  const handleCardTransition = useCallback(() => {
    
    if (indexes.currentIndex >= SLIDER_CARD_DETAILS.length - 1) {
      setIndexes({
        previousIndex: SLIDER_CARD_DETAILS.length - 1,
        currentIndex: 0,
        nextIndex: 1,
      });
    } else {
      setIndexes((prevState) => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex + 1,
        nextIndex: prevState.currentIndex + 2 === SLIDER_CARD_DETAILS.length ? 0 : prevState.currentIndex + 2,
      }));
    }
  }, [indexes.currentIndex]);

  useEffect(() => {
    const transitionInterval = setInterval(() => {
      handleCardTransition();
    }, 4000);
  
    return () => clearInterval(transitionInterval);
  }, [handleCardTransition, indexes]);

    const settings = {
    
        infinite: true,
        // centerPadding: "150px",
        slidesToShow: 3,
        slidesToScroll:1,
        // centerMode:true,
        autoplay:true,
        speed: 3000,
        rows: 1,
        arrows:false,
        dots:true, 
        responsive: [
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              // infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          }
        ]
      };



    return (
    <div className={`bg-slate w-full flex flex-col items-center justify-center py-10 md:px-44`}>
        <p className="sm:text-4xl text-xl font-bold mb-10">DEALS OF THE DAY</p>
              <div className="w-full" >
                <Slider className='w-full'{...settings} >
                {
                    SLIDER_CARD_DETAILS.map((card,index) => {
                        return (
                        <div key={index} className= {`${determineClasses(indexes,index) === 'active' ? 'shadow-lg shadow-zinc-600' : 'scale-75'} flex flex-col bg-white  py-2 px-2 mx-10 my-5 max-h-[330px] max-w-[250px] `}>
                      
                            <Image src={card.imageUrl} width={720} height={1020} alt="" className='h-auto w-full aspect-square'/>
                            
                            <div className='flex flex-row justify-between items-center mt-5 mb-3 px-4 w-full'>
                              <div className="text-sm font-bold">
                                <p>{card.text}</p>
                                <div className='flex flex-row gap-3 items-center font-bold '>
                                  <span className=' text-xs'>₹ {card.price}</span>
                                  <div className='flex flex-row fill-yellow-500 w-[56px]'>
                                    {
                                        [...Array(5)].map((_, index) => {
                                        return <Rating key={index}/>
                                      })
                                    }
                                  </div>
                                </div>
                              </div>
                              <div className='bg-black text-white w-[40px] h-[40px] flex items-center justify-center'>
                                <button className='text-xl'>{card.btnIcon}</button>
                              </div>
                            </div>
                      </div>)
                  })
                }
                </Slider>
              </div>
    </div>
  )
}


export default SliderCard
