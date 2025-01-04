import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Dock from '../Dock/Dock'
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import weather_icon from '../../Apps/icon pack/weather.png'
import cloud_icon from '../../Apps/icon pack/cloud.png'
import theme_icon from '../../Apps/icon pack/themes.png'
import clock_icon from '../../Apps/icon pack/clock.png'
import microphone_icon from '../../Apps/icon pack/microphone.svg'
import internet_search_icon from '../../Apps/icon pack/browser-search.png'
import reminder_icon from '../../Apps/icon pack/reminder.png'
import calendar_icon from '../../Apps/icon pack/calendar.png'
import voice_icon from '../../Apps/icon pack/voice.png'
import wallet_icon from '../../Apps/icon pack/wallet.png'
import store_icon from '../../Apps/icon pack/galaxy-store.png'

import { EffectFade, Pagination } from 'swiper/modules';
import { App_Page, App_Page_More, AppView_Module, Icon, Item, Text, ObjectModule, PageContent, InputBar, Span, Component, PageView } from '../../style';
import Contents from './Contents';
import Test from './test';
import AppsScreen from './AppsSreen/AppsScreen';

export const Pages = () => {
  return (
    <App_Page>
    <Swiper
        spaceBetween={30}
        effect={'fade'}
        direction='vertical'
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Swiper modules={[Pagination]} pagination={true} className="mySwiper">
        <SwiperSlide className='d-center'>
          <PageContent className='page-content'>
            <Contents/>
          </PageContent>
        </SwiperSlide>
        <SwiperSlide>
          <PageView>
          <div className="d-center">
          <InputBar radius={.9} display='flex'>
        <Span float={'left'} size={15} className='d-center'>
          <Icon src={internet_search_icon} className='bar-icons' scale={.65}/>
        </Span>
        <Span float={'left'} size={70} className='d-align'>
          
        </Span>
        <Span float={'left'} size={15} className='d-center'>
          <Icon src={microphone_icon} className='bar-icons' scale={.55} />
        </Span>
      </InputBar>
          </div>
        <Item className="d-justify" mt={-1}>
      <ObjectModule display={'grid'} justify={'center'} align={'end'}>
      <AppView_Module className={'fsm com_app'}>
        <Icon src={store_icon} width={50}/>
      </AppView_Module>
      <Text className='app-name'>Store</Text>
      </ObjectModule>

      <ObjectModule display={'grid'} justify={'center'} align={'end'}>
      <AppView_Module className={'fsm com_app'}>
        <Icon src={reminder_icon} width={50}/>
      </AppView_Module>
      <Text className='app-name'>Reminder</Text>
      </ObjectModule>

      <ObjectModule display={'grid'} justify={'center'} align={'end'}>
      <AppView_Module className={'fsm com_app'}>
        <Icon src={calendar_icon} width={50}/>
      </AppView_Module>
      <Text className='app-name'>Calendar</Text>
      </ObjectModule>

      <ObjectModule display={'grid'} justify={'center'} align={'end'}>
      <AppView_Module className={'fsm com_app'}>
        <Icon src={voice_icon} width={50}/>
      </AppView_Module>
      <Text className='app-name'>Recorder</Text>
      </ObjectModule>
      </Item>

      <Item className="d-justify">
      <ObjectModule display={'grid'} justify={'center'} align={'end'}>
      <AppView_Module className={'fsm com_app'}>
        <Icon src={cloud_icon} width={50}/>
      </AppView_Module>
      <Text className='app-name'>Cloud</Text>
      </ObjectModule>

      <ObjectModule display={'grid'} justify={'center'} align={'end'}>
      <AppView_Module className={'fsm com_app'}>
        <Icon src={theme_icon} width={50}/>
      </AppView_Module>
      <Text className='app-name'>Themes</Text>
      </ObjectModule>

      <ObjectModule display={'grid'} justify={'center'} align={'end'}>
      <AppView_Module className={'fsm com_app'}>
        <Icon src={weather_icon} width={50}/>
      </AppView_Module>
      <Text className='app-name'>Weather</Text>
      </ObjectModule>

      <ObjectModule display={'grid'} justify={'center'} align={'end'}>
      <AppView_Module className={'fsm com_app'}>
        <Icon src={clock_icon} width={50}/>
      </AppView_Module>
      <Text className='app-name'>Clock</Text>
      </ObjectModule>
      </Item>
          </PageView>
        </SwiperSlide>
        <SwiperSlide className='d-center'></SwiperSlide>
        <SwiperSlide className='d-ceer'>
          <br /><br />
        </SwiperSlide>
      </Swiper>
          <Dock/>
        </SwiperSlide>
        <SwiperSlide>
          <App_Page_More>
          <AppsScreen/>
          </App_Page_More>
        </SwiperSlide>
      </Swiper>
    </App_Page>
  )
}

export default Pages