import React from 'react'
import { Component, Text, Icon } from '../../../style'
import { useBattery } from 'react-use';
import charge_module_icon from '../../../Apps/icon pack/system/charge.png'


export const NowBattery = () => {
const battery = useBattery();
const { isSupported, level, charging, dischargingTime, chargingTime } = battery;

return (
    <Component size={100} height={3} background={'#00000020'} blur={1} radius={5} overflow={'hidden'} className={'d-center'}>
        <Component position={'absolute'} className='d-align' zIndex={1} left={.7}>
          <Icon src={charge_module_icon} size={1.8}/>
        </Component>
    <Component position={'absolute'} zIndex={9}>
      <Text size={1.4} className='bold'>{(level * 100).toFixed(0)}%</Text>
    </Component>
    <Component className={'now-battery d-center'} overflow={'hidden'} size={level * 100} position={'absolute'} left={0} height={3}>
    <Component className='battery-shadow-status-effect'/>
    </Component>
    </Component>
  )
}

export default NowBattery