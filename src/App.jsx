import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Desktop from './components/modules/Desktop/Desktop'

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';
import './modules'

import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
     <Desktop />
    </>
  );
}
