import Rating from "./Rating";
import Image from "next/image";
import React from "react";
const ReviewCard = ({ REVIEWS_SECTION_DETAILS }) => {
  return (
    <div className="flex flex-col items-center justify-around bg-white py-10">
      <p className="md:text-5xl text-xl  pb-14 font-bold"> Dont just listen to us</p>
      <div className="flex sm:flex-row flex-col items-center justify-center lg:gap-20 gap-5 md:px-14 px-8 pb-20">
        {REVIEWS_SECTION_DETAILS.map((user) => {
          return (
            <div
              key={user.id}
              className={`${user.id === 2 ? "shadow-2xl  shadow-zinc-600" : ""} bg-slate flex flex-col py-10 items-center justify-evenly w-auto h-auto gap-7 md:text-lg lg:px-10 px-2 `}
            >
              <Image
                src={user.imgUrl}
                width={720}
                height={1020}
                alt=""
                className="w-[100px] h-[100px] aspect-square rounded-full"
              />
              <div className="flex flex-row fill-yellow-500 items-center ">
                {[...Array(5)].map((_, i) => (
                  <Rating key={i} />
                ))}
              </div>
              <p className="font-semibold text-center md:leading-9">
                {user.review}
              </p>
              <span className="font-bold">{user.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewCard;


