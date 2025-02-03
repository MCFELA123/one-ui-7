import React from 'react'
import { Component } from '../../style'

export const QuickAnimate = () => {
  return (
    <Component size={100} display={'flex'} position={'absolute'} top={0} left={0} height={2} zIndex={999999999}>
        <Component size={50} height={2.5}></Component>
        <Component size={50} className='quick-toggle' height={2.5}></Component>
    </Component>
  )
}

export default QuickAnimate