import React from 'react'
import conimg from '../../Apps/icon pack/contacts.png'
import styled from 'styled-components'
import fileing from '../../Apps/icon pack/files.png'
import wallet_icon from '../../Apps/icon pack/wallet.png'

export const Test = () => {

  const Image = styled.img`
  width: 4em !important;
  float: left ;
  margin: 1em;
  cursor: pointer !important;
`
const H1 = styled.h1`
color: ${(props) => props.color};
font-size: ${(props) => props.size}em !important;
`


  return (
    <>
      <div>
        <Image src={conimg} alt="" className='fsm' />
        <Image src={fileing} alt="" />
        <div>
          <Image src={conimg} alt="" />
          <Image src={fileing} alt="" />
        </div>
        <div>
          <Image src={conimg} alt="" />
          <Image src={wallet_icon} alt="" />
        </div>
      </div>
      <H1 color={'green'} size={4}>Today is a good day</H1>
      
    </>

  )
}

export default Test