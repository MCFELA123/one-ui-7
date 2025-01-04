import React from 'react'
import { Component, Text, Icon } from '../../../style'
import { useBattery } from 'react-use';
import sos_module_icon from '../../../Apps/icon pack/system/sos.png'


export const NowSos = () => {
const battery = useBattery();
const { isSupported, level, charging, dischargingTime, chargingTime } = battery;

return (
    <Component size={100} height={3} background={'#00000020'} blur={1} radius={5} overflow={'hidden'} className={'d-center'}>
        <Component position={'absolute'} px={1.1} py={1.1} radius={5} className='d-center now-sos-icon' zIndex={1} left={.6}>
          <Icon src={sos_module_icon} size={1.4} position={'absolute'}/>
        </Component>
    <Component position={'absolute'} left={3.3} height={2.3} zIndex={9}>
      <Text size={.9} className='semi-bold' opacity={.9}>Sharing..</Text><br />
    <Component mt={-.15}>
    <Text size={.8} opacity={.5}>We're Updating..</Text>
    </Component>
    </Component>
    <Component className={'now-sos d-center'} overflow={'hidden'} size={100} position={'absolute'} left={0} height={3}>
    {/* <Component className='battery-shadow-status-effect'/> */}
    </Component>
    </Component>
  )
}

export default NowSos