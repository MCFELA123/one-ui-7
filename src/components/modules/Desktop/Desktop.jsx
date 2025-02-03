import React from 'react'
import Wallpaper from './wallpaper/Wallpaper'
import { View } from '../style'
import Nav from './Navigation bar/nav'
// import { Swiper, SwiperSlide } from 'swiper/react';
import Pages from './Pages/Pages'
import Status from './Status bar/Status-bar';
import Locskreen from './Lockscreen/Locskreen';
import QuickPan from './Quick Panel/QuickPanel'
import QuickAnimate from './Quick Panel Action/QuickAnimate'
import AppSettings from '../Apps/com.settings/app-settings'

export const Desktop = () => {
  return (
    <View>
    {/* <Locskreen/> */}
    <Wallpaper/>
    <Pages/>
    {/* <AppSettings/> */}
    <QuickPan/>
    <QuickAnimate/>
    <Status/>
    <Nav/>
    </View>
  )
}

export default Desktop