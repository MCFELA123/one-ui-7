import React from 'react'
import { AppView_Module, Component, Icon, ObjectModule, InputSect, Item, Text } from '../../../style'
import moreOptions_module_icon from '../../../Apps/icon pack/system/more.svg'

import file_icon from '../../../Apps/icon pack/files.png'
import contact_icon from '../../../Apps/icon pack/contacts.png'
import store_icon from '../../../Apps/icon pack/galaxy-store.png'
import gallery_icon from '../../../Apps/icon pack/gallery.png'
import settings_icon from '../../../Apps/icon pack/settings.png'
import weather_icon from '../../../Apps/icon pack/weather.png'
import cloud_icon from '../../../Apps/icon pack/cloud.png'
import theme_icon from '../../../Apps/icon pack/themes.png'
import wallet_icon from '../../../Apps/icon pack/wallet.png'
import calendar_icon from '../../../Apps/icon pack/calendar.png'
import clock_icon from '../../../Apps/icon pack/clock.png'
import microphone_icon from '../../../Apps/icon pack/microphone.svg'
import internet_search_icon from '../../../Apps/icon pack/browser-search.png'
import weather_module_icon from '../../../Apps/icon pack/system/weather.svg'
import sun_module_icon from '../../../Apps/icon pack/system/sun.svg'
import gallery_doodle from '../../../Apps/icon pack/doodle.png'
import dog_doodle from '../../../Apps/icon pack/system/widgets/dog.png'
import plus_doodle from '../../../Apps/icon pack/system/plus.svg'

import reminder_icon from '../../../Apps/icon pack/reminder.png'
import voice_icon from '../../../Apps/icon pack/voice.png'

export const AppsScreen = () => {
  return (
    <Component size={100} background={'#00'} position={'absolute'} top={0} style={{height:'100%'}}>
    {/* App View */}
    <Component size={100} style={{height:'79%'}} mt={2} background={'#00'}>
          <Item className="d-justify" mt={-2}>
          <ObjectModule display={'grid'} justify={'center'} align={'end'}>
          <AppView_Module className={'fsm com_app'}>
            <Icon src={file_icon} width={50}/>
          </AppView_Module>
          <Text className='app-name'>My Files</Text>
          </ObjectModule>
    
          <ObjectModule display={'grid'} style={{marginLeft:'8%'}} justify={'center'} align={'end'}>
          <AppView_Module className={'fsm com_app'}>
            <Icon src={contact_icon} width={50}/>
          </AppView_Module>
          <Text className='app-name'>Contacts</Text>
          </ObjectModule>
    
          <ObjectModule display={'grid'} style={{marginLeft:'8%'}} justify={'center'} align={'end'}>
          <AppView_Module className={'fsm com_app'}>
            <Icon src={settings_icon} width={50}/>
          </AppView_Module>
          <Text className='app-name'>Settings</Text>
          </ObjectModule>
    
          <ObjectModule display={'grid'} style={{marginLeft:'8%'}} justify={'center'} align={'end'}>
          <AppView_Module className={'fsm com_app'}>
            <Icon src={gallery_icon} width={50}/>
          </AppView_Module>
          <Text className='app-name'>Gallery</Text>
          </ObjectModule>
          </Item>

     <Item className="d-justify">
      <ObjectModule display={'grid'} justify={'center'} align={'end'}>
      <AppView_Module className={'fsm com_app'}>
        <Icon src={store_icon} width={50}/>
      </AppView_Module>
      <Text className='app-name'>Store</Text>
      </ObjectModule>

      <ObjectModule display={'grid'} style={{marginLeft:'8%'}} justify={'center'} align={'end'}>
      <AppView_Module className={'fsm com_app'}>
        <Icon src={reminder_icon} width={50}/>
      </AppView_Module>
      <Text className='app-name'>Reminder</Text>
      </ObjectModule>

      <ObjectModule display={'grid'} style={{marginLeft:'8%'}} justify={'center'} align={'end'}>
      <AppView_Module className={'fsm com_app'}>
      <Icon src={calendar_icon} width={50}/>
      </AppView_Module>
      <Text className='app-name'>Calendar</Text>
      </ObjectModule>
          
      <ObjectModule display={'grid'} style={{marginLeft:'8%'}} justify={'center'} align={'end'}>
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
          
      <ObjectModule display={'grid'} style={{marginLeft:'8%'}} justify={'center'} align={'end'}>
      <AppView_Module className={'fsm com_app'}>
        <Icon src={theme_icon} width={50}/>
      </AppView_Module>
      <Text className='app-name'>Themes</Text>
      </ObjectModule>

      <ObjectModule display={'grid'} style={{marginLeft:'8%'}} justify={'center'} align={'end'}>
      <AppView_Module className={'fsm com_app'}>
        <Icon src={weather_icon} width={50}/>
      </AppView_Module>
      <Text className='app-name'>Weather</Text>
      </ObjectModule>
          
      <ObjectModule display={'grid'} style={{marginLeft:'8%'}} justify={'center'} align={'end'}>
      <AppView_Module className={'fsm com_app'}>
        <Icon src={clock_icon} width={50}/>
      </AppView_Module>
      <Text className='app-name'>Clock</Text>
      </ObjectModule>
      </Item>
    </Component>

    <Component style={{width:'12px', height:'70%'}} background={'#ffffff40'} position={'absolute'} blur={1} right={.3} top={2} radius={2}>

    </Component>

    <Component size={100} position={'absolute'} bottom={0} style={{paddingBottom:'3.5em',paddingTop:'5px'}} background={'#00'} className={'d-center'}>
        <Component size={90} className='d-align' background={'#ffffff55'} blur={3} overflow={'hidden'} radius={5}>
            <Component size={100}>
                <InputSect size={100} placeholder={'Search'} height={2.6} border={'none'} outline={0} textGap={1} background={'unset'} />
            </Component>
            <Component size={15} className='d-center'>
                <Icon src={moreOptions_module_icon} size={1.4} cursor={'pointer'}/>
            </Component>
        </Component>
    </Component>
    </Component>
  )
}

export default AppsScreen