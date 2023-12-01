"use client";

import React from "react";
import {
  FaCalendar,
  FaChevronLeft,
  FaChevronRight,
  FaClock,
  FaPlayCircle,
} from "react-icons/fa";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { getHomeData } from "@/lib/utils";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Home = async () => {
  const homeData = await getHomeData();

  return (
    <div className="min-h-screen pt-24 px-10 text-left">
      <Swiper
        className="relative flex w-full h-[500px] overflow-hidden z-10 md:h-570 lg:h-500 xl:h-350"
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        direction="horizontal"
        loop={true}
        autoplay={{ delay: 3000 }}
        modules={[Pagination]}
        navigation={{
          nextEl: ".btn-next",
          prevEl: ".btn-prev",
        }}
      >
        {homeData.spotLightAnimes.map((anime) => (
          <SwiperSlide key={anime.id}>
            <div>
              <img src={anime.img} className="w-full h-full absolute"></img>
            </div>
            <div className="z-1 w-600 h-full absolute flex flex-col justify-end text-yellow-400 left-8 bottom-8 pb-12 md:w-1/2 lg:w-full lg:pr-100 md:left-10 md:pr-10">
              <div className="text-yellow-400 mb-10 font-bold font-ubuntu uppercase md:text-1 hidden md:inline md:text-xs">
                <p className="text-4xl">#{anime.sno + 1} Spotlight</p>
              </div>
              <h1 className="font-ubuntu pb-5 text-white tracking-wide mb-20 text-5xl md:text-3xl md:leading-tight md:line-clamp-2 lg:line-clamp-2 md:mb-5 md:text-2xl lg:text-2xl lg:mb-0 md:leading-5 lg:leading-5 md:tracking-tight md:mb-0 lg:mb-0">{anime.name}</h1>
              <div className="flex text-sm pb-5 items-center md:gap-1 md:font-base md:items-center md:mb-0 md:flex md:text-base lg:flex lg:text-base lg:gap-1 lg:items-center lg:mb-0">
                <p className="flex items-center gap-2 text-white">
                  <FaPlayCircle size={12} />
                  {anime.extra.category}
                </p>
                <p className="flex items-center gap-2 text-white">
                  <FaClock size={12} /> {anime.extra.duration}
                </p>
                <p className="flex items-center gap-2 text-white">
                  <FaCalendar size={12} />
                  {anime.extra.releasedDay}
                </p>
                <span className="inline-block px-2 py-1 bg-yellow-400 text-black rounded font-semibold text-xs">{anime.extra.quality}</span>
              </div>
              <div className="overflow-ellipsis pb-10 mr-10 font-poppins text-white text-base md:line-clamp-2 md:leading-tight md:my-0 md:text-sm lg:text-base lg:leading-tight lg:my-0 lg:text-sm xl:line-clamp-4 xl:leading-tight xl:my-0 xl:text-base">{anime.description}</div>
              <div className="flex mt-5 items-center gap-4 md:gap-1 md:flex-wrap">
                <Link href={`${process.env.NEXT_PUBLIC_CLIENT}/anime/${anime.id}`} /// in future it need to UPDATE
                className="flex items-center gap-1 p-2 bg-yellow-400 text-black text-lg rounded-full font-ubuntu">
                  <FaPlayCircle />
                  Watch Now
                </Link>
                <Link href={`${process.env.NEXT_PUBLIC_CLIENT}/anime/${anime.id}`}
                className="flex items-center p-2 bg-gray-700 text-white gap-1 text-lg rounded-full font-ubuntu">
                  Detail <FaChevronRight size={12} />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
};

export default Home;
