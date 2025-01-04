import React from 'react'
import Wallpaper from './wallpaper/Wallpaper'
import { View } from '../style'
import Nav from './Navigation bar/nav'
// import { Swiper, SwiperSlide } from 'swiper/react';
import Pages from './Pages/Pages'
import Status from './Status bar/Status-bar';
import Locskreen from './Lockscreen/Locskreen';

export const Desktop = () => {
  return (
    <View>
    <Locskreen/>
    <Wallpaper/>
    <Pages/>
    <Status/>
    <Nav/>
    </View>
  )
}

export default Desktop