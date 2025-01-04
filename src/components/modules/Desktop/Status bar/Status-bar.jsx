import React from 'react'
import { useBattery } from 'react-use';
import { Battery, Component, Icon, Meter, StatusBar, Text } from '../../style'
import cellular_module_icon_light from '../../Apps/icon pack/system/status/cellular.svg'
import wifi_module_icon_light from '../../Apps/icon pack/system/status/wifi.svg'
import key_module_icon_light from '../../Apps/icon pack/system/status/key.svg'

export const Status = () => {
    const date = new Date();
    const showTime = date.getHours()
        + ':' + date.getMinutes()
        // const percent =  (level * 100)
        const battery = useBattery();
        const { isSupported, level, charging, dischargingTime, chargingTime } = battery;
  return (
    <StatusBar className='d-center status-bar' duration={.2}>
        <Component size={90} className='d-center'>
            <Component size={100} className='d-align'>
            <Component float={'left'} style={{transform:'translateY(3px)'}} className='d-align'>
            <Text opacity={.7} size={.85} className='semi-bold'>{showTime}</Text>
            </Component>
            </Component>

            <Component size={100} className='d-justify-end'>
            <Component float={'right'} style={{transform: 'translateY(3px)'}} className='d-align-end'>
                <Component  mr={.3} className='d-align-end' style={{transform:'translateY(-1.5px)'}}>
                <Icon src={key_module_icon_light} className='status-icons' mr={.3}/>
                <Icon src={wifi_module_icon_light} className='status-icons' mr={.3}/>
                <Icon src={cellular_module_icon_light}/>
                </Component>
                
                <Battery className='battery d-center' radius={2}>
                <Text position={'absolute'} index={1} size={.67} className='trasnparent-text heavy'>{(level * 100).toFixed(0)}</Text>
                    <Meter levels={level * 100} background={'#fff'} radius={.2}/>
                </Battery>
            </Component>
            </Component>
        </Component>
    </StatusBar>
  )
}

export default Status