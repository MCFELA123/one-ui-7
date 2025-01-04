import React from 'react'
import { Background } from '../../style'
import titanium from '../wallpaper/titanium.jpg'

export const Wallpaper = () => {
  return (
    <Background wallpaper={titanium} className='com_background' />
  )
}

export default Wallpaper