import React from 'react'
import { App_Module, Docker, Icon, Object } from '../../style'
import call_icon from '../../Apps/icon pack/phone.png'
import message_icon from '../../Apps/icon pack/messages.png'
import camera_icon from '../../Apps/icon pack/camera.png'
import browser_icon from '../../Apps/icon pack/internet-browser.png'
import theme_icon from '../../Apps/icon pack/themes.png'


export const Dock = () => {
  return (
    <Docker>
        <Object>
        <App_Module  className={'fsm'}>
            <Icon src={message_icon} width={50}/>
        </App_Module>
        </Object>
        <Object>
        <App_Module  className={'fsm'}>
            <Icon src={call_icon} width={50}/>
        </App_Module>
        </Object>
        <Object>
        <App_Module  className={'fsm'}>
            <Icon src={theme_icon} width={50}/>
        </App_Module>
        </Object>
        <Object>
        <App_Module  className={'fsm'}>
            <Icon src={browser_icon} width={50}/>
        </App_Module>
        </Object>
        <Object>
        <App_Module  className={'fsm'}>
            <Icon src={camera_icon} width={50}/>
        </App_Module>
        </Object>
    </Docker>
  )
}

export default Dock