import React from 'react'
import { Icon, NavControl } from '../../style'
import Ripples from 'react-ripples'
import { Button } from '../../style'
import back_icon from './nav icons/back.svg'
import home_icon from './nav icons/home.svg'
import recents_icon from './nav icons/recents.svg'

export const Nav = () => {
    
  return (
    <NavControl>
        <Ripples color='#ffffff45' className='ripple'>
        <Button border={0} py={.8} px={2.7} radius={5} background={'unset'} display={'flex'} align={'center'} justify={'center'}>
        <Icon src={recents_icon} />
        </Button>
        </Ripples>
        <Ripples color='#ffffff45' className='ripple all_close all_home'>
        <Button border={0} py={.8} px={2.7} radius={5} background={'unset'} display={'flex'} align={'center'} justify={'center'}>
            <Icon src={home_icon} />
        </Button>
        </Ripples>
        <Ripples color='#ffffff45' className='ripple'>
        <Button border={0} py={.8} px={2.7} radius={5} background={'unset'} display={'flex'} align={'center'} justify={'center'}>
            <Icon src={back_icon} />
        </Button>
        </Ripples>
    </NavControl>
  )
}

export default Nav