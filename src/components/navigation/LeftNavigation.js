import React, { useEffect } from "react";
import { useSwiper } from "swiper/react";
import { useState } from "react";
import { ReactComponent as LeftArrow } from '../../assets/leftarrow.svg'
import bookingcarousel from '../bookingcarousel/BookingCarousel.module.css'

const LeftNavigation = () => 
{
  const swiper = useSwiper();

  const [isBegin, setIsBegin] = useState(true);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsBegin(swiper.isBeginning);
    });
  }, [swiper]); 

  return (
    <div>
      {!isBegin && <LeftArrow className={`${bookingcarousel.navigation} ${bookingcarousel.left}`} onClick={() => swiper.slidePrev()} />}
    </div>
  );
};

export default LeftNavigation;
