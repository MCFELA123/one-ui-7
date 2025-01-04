import React from 'react'
import { Component, LockScreen, Button, Text, Icon } from '../../style'
import lock_module_icon from '../../Apps/icon pack/system/lock.svg'
import call_module_icon from '../../Apps/icon pack/system/call.svg'
import camera_module_icon from '../../Apps/icon pack/system/camera.svg'
import resize_module_icon from '../../Apps/icon pack/system/resize.png'
import Wallpaper from '../wallpaper/Wallpaper'
import NowBattery from '../Nowbar/Battery/NowBattery'
import { Swiper, SwiperSlide } from 'swiper/react'
// import { EffectFade, Pagination } from 'swiper/modules';
import Cursor from "react-cursor-follow";

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import NowHealth from '../Nowbar/NowHealth/NowHealth'
import NowSos from '../Nowbar/SOS/NowSos'

const colors = [
    "#ff0000",
    "#ffa500",
    "#ffff00",
    "#008000",
    "#0000ff",
    "#4b0082",
    "#ee82ee",
  ];

export const Locskreen = () => {
    const date = new Date();
    const showHours = date.getHours()
        const showMinutes = date.getMinutes()

        window.addEventListener('loadeddata', ()=>{
            showMinutes(), showHours()
        })
  return (
<LockScreen zIndex={999999}>
<Wallpaper/>
<Component size={100} background={'#00000050'} blur={1.5}>
<LockScreen size={100} className='lockscreen' overflow={'hidden'}>
    <Wallpaper/>
<Component size={93}>
    <Component position={'absolute'} background={'#00000025'} size={100} style={{height:'100%'}} top={0} left={0}/>
<Component position={'absolute'} className='d-center' size={100} left={0}>
<Component mt={.7} size={91}>
    <Component float={'left'}>
        <Button px={1} py={.5} background={'#00000050'} shadow={'0 0 0 1.5px #ffffff15'} duration={.2} opacity={0} visiblity={'hidden'} cursor={'pointer'} border={'none'} radius={2} className='lockscreen-actions'>
            <Text className='semi-bold' color={'#ffffffd3'}>Wallpapers</Text>
        </Button>
    </Component>
    <Component float={'right'}>
        <Button px={1} py={.5} background={'#00000050'} shadow={'0 0 0 1.5px #ffffff15'} duration={.2} opacity={0} visiblity={'hidden'} cursor={'pointer'} border={'none'} radius={2} className='lock-done lockscreen-actions'>
            <Text className='semi-bold' color={'#ffffffd3'}>Done</Text>
        </Button>
    </Component>
</Component>
</Component>
<br /><br />
    <Component position={'absolute'} mt={0} display={'grid'} justify={'center'} left={0} size={100} zIndex={99}>
        <Component className='d-center'>
        <Icon src={lock_module_icon} />
        </Component><br />
    <Component radius={.3} py={.3} px={.3} textAlign={'center'} shadow={'0 0 0 1.7px #ffffff00'} className='res-in'>
    <Component position={'absolute'} className='res-actions resize-y-left'>
        <Icon src={resize_module_icon} size={1}/>
    </Component>
    <Component position={'absolute'} className='res-actions resize-y-right'>
        <Icon src={resize_module_icon} size={1}/>
    </Component> 
    <Text className='bold clock-text-gradient' size={5}>{showHours}</Text><br />
    <Text className='bold clock-text-gradient' size={5}>{showMinutes}</Text><br />
    <Component /* style={{transform:'translateY(-7px)'}} */>
    <Text className='normal' opacity={.75} size={1}>Mon 23 January</Text>
    </Component>
{/* <br /><br /><Component className="rest">dsds</Component> */}
        <Component position={'absolute'} className='res-actions resize-x-left'>
            <Icon src={resize_module_icon} size={1}/>
        </Component>
        <Component position={'absolute'} className='res-actions resize-x-right'>
            <Icon src={resize_module_icon} size={1}/>
        </Component>
    </Component>
    </Component>
    <Component position={'absolute'} size={100} left={0} className='d-center' bottom={1.5}>
    <Component size={90} className={'d-align'}>
    <Component position={'absolute'} size={100} left={0} className='d-center'>
        {/* <NowBattery/> */}
    <Swiper pagination={true} spaceBetween={10} direction='vertical' effect={'fade'} className="mySwiper now-swipe">
    <SwiperSlide><NowHealth/></SwiperSlide>
    <SwiperSlide><NowBattery/></SwiperSlide>
    <SwiperSlide><NowSos/></SwiperSlide>
    </Swiper>
    <Component size={60} mt={1.1} scale={.9} height={3} position={'absolute'} background={'#00000020'} shadow={'0 3px 1em -3px #00000070'} zIndex={99} blur={1} radius={5} overflow={'hidden'} className={'d-center'}><NowHealth/></Component>

    <Component size={50} mt={1.8} scale={.9} height={3} position={'absolute'} background={'#ffffff25'} shadow={'0 3px 1em -3px #00000040'} blur={1} radius={5} overflow={'hidden'} className={'d-center'}/>
    </Component>

    <Component size={50} className='d-justify-start'>
    <Button size={2.8} height={2.8} background={'#ffffff40'} blur={.5} duration={.2} cursor={'pointer'} border={'none'} radius={2}>
        <Icon  src={call_module_icon}/>
    </Button>
    </Component>
    <Component size={50} className='d-justify-end'>
    <Button size={2.8} height={2.8} background={'#ffffff40'} blur={.5} duration={.2} cursor={'pointer'} border={'none'} radius={2}>
        <Icon  src={camera_module_icon} scale={1.3}/>
    </Button>
    </Component>
        </Component>
    </Component>
</Component>
</LockScreen>
</Component>
</LockScreen>
  )
}

export default Locskreen