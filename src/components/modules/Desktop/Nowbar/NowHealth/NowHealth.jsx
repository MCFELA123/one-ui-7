import React from 'react'
import { Component, Text, Icon } from '../../../style'
import { useBattery } from 'react-use';
import health_module_icon from '../../../Apps/icon pack/system/health.svg'


export const NowHealth = () => {
const hrs = document.querySelector('.hrs')
const min = document.querySelector('.min')
const sec = document.querySelector('.sec')

let i = 1
function count() {
  // sec.innerHTML=1
  setTimeout(() => {
    countone()
  }, 1000);
  function countone() {
    sec.innerHTML -=- .5
    setTimeout(() => {
      countplus()
    }, 1000);
  }
  function countplus() {
    sec.innerHTML -=- .5
    setTimeout(() => {
      countone()
    }, 1000);
  }
  setTimeout(() => {
    countMin()
  }, 60000);
  function countMin() {
    min.innerHTML -=- .5
    sec.innerHTML = 0
    setTimeout(() => {
      countMinPlus()
    }, 60000);
  }
  function countMinPlus() {
    min.innerHTML -=- .5
    sec.innerHTML = 0
    setTimeout(() => {
      countMin()
    }, 60000);
  }

  setTimeout(() => {
    countHrs()
  }, 3600000);
  function countHrs() {
    hrs.innerHTML -=- .5
    min.innerHTML = 0
    sec.innerHTML = 0
    setTimeout(() => {
      countHrsPlus()
    }, 3600000);
  }
  function countHrsPlus() {
    hrs.innerHTML -=- .5
    min.innerHTML = 0
    sec.innerHTML = 0
    setTimeout(() => {
      countHrsPlus()
    }, 3600000);
  }
}


const battery = useBattery();
const { isSupported, level, charging, dischargingTime, chargingTime } = battery;

return (
    <Component size={100} onLoad={count} height={3} background={'#00000020'} blur={1} radius={5} overflow={'hidden'} className={'d-center'}>
        <Component position={'absolute'} px={1.1} py={1.1} radius={5} className='d-center now-icon' zIndex={1} left={.6}>
          <Icon src={health_module_icon} size={1.6} position={'absolute'}/>
        </Component>
    <Component position={'absolute'} left={3.3} height={2.3} zIndex={9}>
      <Text size={.9} className='semi-bold' opacity={.9}>
      <Text className="hrs semi-bold">00</Text>:
      <Text className="min semi-bold">00</Text>:
      <Text className="sec semi-bold"></Text>
      </Text><br />
    <Component mt={-.15}>
    <Text size={.8} opacity={.5}>1.58 km</Text>
    </Component>
    </Component>
    <Component className={'now-health d-center'} overflow={'hidden'} size={100} position={'absolute'} left={0} height={3}>
    {/* <Component className='battery-shadow-status-effect'/> */}
    </Component>
    </Component>
  )
}

export default NowHealth