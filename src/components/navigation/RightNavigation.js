import React, { useEffect } from "react";
import { useSwiper } from "swiper/react";
import { useState } from "react";
import { ReactComponent as RightArrow } from '../../assets/rightarrow.svg'
import navstyles from './Navigation.module.css'

const RightNavigation = () => 
{
  const swiper = useSwiper();

  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsEnd(swiper.isEnd);
    });
  }, [swiper]); 

  return (
    <div>
      {!isEnd && <RightArrow className={`${navstyles.navigation} ${navstyles.right}`} onClick={() => swiper.slideNext()}/>}
    </div>
  );
};

export default RightNavigation;
