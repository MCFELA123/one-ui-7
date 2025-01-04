import React from 'react'
import { Component, Icon, InputSect } from '../../../style'
import moreOptions_module_icon from '../../../Apps/icon pack/system/more.svg'

export const AppsScreen = () => {
  return (
    <Component size={100} background={'#00'} position={'absolute'} top={0} left={0} style={{height:'100%'}}>
    

    <Component size={100} position={'absolute'} bottom={0} style={{paddingBottom:'3.5em',paddingTop:'5px'}} background={'#00'} className={'d-center'}>
        <Component size={90} className='d-align' background={'#ffffff45'} blur={3} overflow={'hidden'} radius={5}>
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