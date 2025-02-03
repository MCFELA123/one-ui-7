import React from 'react'
import { Component, Text, Icon } from '../../style'
import Ripples from 'react-ripples'
import settings_icon from '../../Apps/icon pack/settings.png'
import accUser from './modules/user/user.jpeg'

export const AppSettings = () => {
  return (
<Component>
<Component size={100} style={{height:'100%'}} overflow={'scroll'} background={'#000'} className='comApp' position={'abolute'} top={0} left={0} zIndex={9999}>
    <Component className="d-justify">
    <Component size={83} mt={4} className='d-align'>
    <Component float={'left'} className='d-justify-start' size={50}>
      <Text className={'semi-bold'} opacity={.85} size={1.4}>Settings</Text>
    </Component>
    <Component float={'right'} className='d-justify-end' size={50}>
    <svg width={20} opacity={.85} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#fff" stroke-width="2.088" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    </Component>
    </Component>
    </Component>
    
    <Component className="d-justify">
    <Component size={90} mt={2}>
    <Ripples color='#ffffff45' className='rippler'>
    <Component py={.9} background={'#ddeeff25'} size={100} radius={1.5} className={'d-center'}>
      <Component size={83} display={'flex'}>
      <Component size={100} className='d-justify'>
      <Component size={100}>
      <Component float={'left'}>
      <Text className={'semi-bold'} size={1.2} opacity={.85}>Michael Jackson</Text>
      </Component><br />
      <Component className={'d-justify-start'} mt={.4}>
      <Text size={.85} opacity={.4}>Samsung account</Text>
      </Component>
      </Component>
      </Component>
      </Component>
    </Component>
    </Ripples>
    <Component overflow={'hidden'} shadow={'0 0 0 2px #ffffff20'} style={{width:'4.5em',transform:'translateY(-1em)'}} mr={1.5} float={'right'} mt={-4.5} height={4.5} radius={5}>
      <Icon src={accUser} style={{width:'100%'}}/>
      </Component>
    </Component>
    </Component>

    <Component className="d-jutify">
    <Component size={90} margin={'0 auto'} mt={1} radius={1.5} overflow={'hidden'}>
    <Ripples color='#ffffff45' className='ripplers'>
    <Component background={'#ddeeff25'} py={0} size={100} className={'d-cnter'}>
      <Component size={88} display={'flex'} margin={'0 auto'} style={{paddingTop:'1em'}}>
      <Component className='d-justify-start d-align'>
        <Component px={.6} py={.6} mt={-1.2} ml={0} scale={.9} background={'#0088ff'} radius={.7} className={'d-center'}>
        <Component className={'d-center'}>
        <svg width="14" style={{scale:'1.5'}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff90"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 19.5H12.01M22.8064 8.70076C19.9595 6.09199 16.1656 4.5 11.9999 4.5C7.83414 4.5 4.04023 6.09199 1.19336 8.70076M4.73193 12.243C6.67006 10.5357 9.21407 9.5 12 9.5C14.7859 9.5 17.3299 10.5357 19.268 12.243M15.6983 15.7751C14.6792 14.9763 13.3952 14.5 11.9999 14.5C10.5835 14.5 9.28172 14.9908 8.25537 15.8116" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </Component>
        </Component>
      </Component>
      <Component size={91} className='d-justify-tart com_span_bbt'>
      <Component ml={1.1}>
      <Component float={'left'}>
      <Text className={'normal'} size={1.1} opacity={.85}>Connections</Text>
      </Component><br />
      <Component className={'d-justify-start'} mt={.4}>
      <Text size={.9} className='light' opacity={.4}>Wi-Fi . Bluetooth . SIM manager</Text>
      </Component>
      <Component size={100} shadow={'0 0 0 1px #ffffff15'} mt={1}/>
      </Component>
      </Component>
      </Component>
    </Component>
    </Ripples>

    <Ripples color='#ffffff45' className='ripplers'>
    <Component background={'#ddeeff25'} py={0} size={100} className={'d-cnter'}>
      <Component size={88} display={'flex'} margin={'0 auto'} style={{paddingTop:'1em'}}>
      <Component className='d-justify-start d-align'>
        <Component px={.6} py={.6} mt={-1.2} ml={0} scale={.9} background={'#0088ff'} radius={.7} className={'d-center'}>
        <Component className={'d-center'}>
        <svg width="14" style={{scale:'1.5'}} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>device_fill</title> <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Device" transform="translate(-288.000000, -48.000000)" fill-rule="nonzero"> <g id="device_fill" transform="translate(288.000000, 48.000000)"> <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero"> </path> <path d="M20,8 C21.0543909,8 21.9181678,8.81587733 21.9945144,9.85073759 L22,10 L22,19 C22,20.0543909 21.18415,20.9181678 20.1492661,20.9945144 L20,21 L16,21 C14.9456091,21 14.0818322,20.18415 14.0054856,19.1492661 L14,19 L14,10 C14,8.94563773 14.81585,8.08183483 15.8507339,8.00548573 L16,8 L20,8 Z M17,4 C18.1046,4 19,4.89543 19,6 L15,6 C13.3431,6 12,7.34315 12,9 L12,20 L4,20 C2.89543,20 2,19.1046 2,18 L2,6 C2,4.89543 2.89543,4 4,4 L17,4 Z" id="形状" fill="#ffffff"> </path> </g> </g> </g> </g></svg>
        </Component>
        </Component>
      </Component>
      <Component size={91} className='d-justify-tart com_span_bbt'>
      <Component ml={1.1}>
      <Component float={'left'}>
      <Text className={'normal'} size={1.1} opacity={.85}>Connected devices</Text>
      </Component><br />
      <Component className={'d-justify-start'} mt={.4}>
      <Text size={.9} className='light' opacity={.4}>Quick Share . Android Auto</Text>
      </Component>
      <br />
      </Component>
      </Component>
      </Component>
    </Component>
    </Ripples>
    </Component>
    </Component>

    <Component className="d-jutify">
    <Component size={90} margin={'0 auto'} mt={1} radius={1.5} overflow={'hidden'}>
    <Ripples color='#ffffff45' className='ripplers'>
    <Component background={'#ddeeff25'} py={0} size={100} className={'d-cnter'}>
      <Component size={88} display={'flex'} margin={'0 auto'} style={{paddingTop:'1em'}}>
      <Component className='d-justify-start d-align'>
        <Component px={.6} py={.6} mt={-1.2} ml={0} scale={.9} background={'#7541ee'} radius={.7} className={'d-center'}>
        <Component className={'d-center'}>
        <svg width="14" style={{scale:'1.5'}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 11.0857V12.0057C21.9988 14.1621 21.3005 16.2604 20.0093 17.9875C18.7182 19.7147 16.9033 20.9782 14.8354 21.5896C12.7674 22.201 10.5573 22.1276 8.53447 21.3803C6.51168 20.633 4.78465 19.2518 3.61096 17.4428C2.43727 15.6338 1.87979 13.4938 2.02168 11.342C2.16356 9.19029 2.99721 7.14205 4.39828 5.5028C5.79935 3.86354 7.69279 2.72111 9.79619 2.24587C11.8996 1.77063 14.1003 1.98806 16.07 2.86572M22 4L12 14.01L9 11.01" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </Component>
        </Component>
      </Component>
      <Component size={91} className='d-justify-tart com_span_bbt'>
      <Component ml={1.1}>
      <Component float={'left'}>
      <Text className={'normal'} size={1.1} opacity={.85}>Modes and Routines</Text>
      </Component><br />
      <Component className={'d-justify-start'} mt={.4}>
      <Text size={.9} className='light' opacity={.4}>Modes . Routines</Text>
      </Component>
      <Component size={100} shadow={'0 0 0 1px #ffffff15'} mt={1}/>
      </Component>
      </Component>
      </Component>
    </Component>
    </Ripples>

    <Ripples color='#ffffff45' className='ripplers'>
    <Component background={'#ddeeff25'} py={0} size={100} className={'d-cnter'}>
      <Component size={88} display={'flex'} margin={'0 auto'} style={{paddingTop:'1em'}}>
      <Component className='d-justify-start d-align'>
        <Component px={.6} py={.6} mt={-1.2} ml={0} scale={.9} background={'#7541ee'} radius={.7} className={'d-center'}>
        <Component className={'d-center'}>
        <svg  width="14" style={{scale:'1.7'}} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="sound-max" class="icon glyph" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M18.36,19.36a1,1,0,0,1-.7-.29,1,1,0,0,1,0-1.41,8,8,0,0,0,0-11.32,1,1,0,0,1,1.41-1.41,10,10,0,0,1,0,14.14A1,1,0,0,1,18.36,19.36Z" style={{fill:'#ffffff'}}></path><path d="M15.54,16.54a1,1,0,0,1-.71-.3,1,1,0,0,1,0-1.41,4,4,0,0,0,0-5.66,1,1,0,0,1,1.41-1.41,6,6,0,0,1,0,8.48A1,1,0,0,1,15.54,16.54Z" style={{fill:'#ffffff'}}></path><path d="M11.38,4.08a1,1,0,0,0-1.09.21L6.59,8H4a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2H6.59l3.7,3.71A1,1,0,0,0,11,20a.84.84,0,0,0,.38-.08A1,1,0,0,0,12,19V5A1,1,0,0,0,11.38,4.08Z" style={{fill:'#ffffff'}}></path></g></svg>
        </Component>
        </Component>
      </Component>
      <Component size={91} className='d-justify-tart com_span_bbt'>
      <Component ml={1.1}>
      <Component float={'left'}>
      <Text className={'normal'} size={1.1} opacity={.85}>Sounds and vibration</Text>
      </Component><br />
      <Component className={'d-justify-start'} mt={.4}>
      <Text size={.9} className='light' opacity={.4}>Sound mode . Ringtone</Text>
      </Component>
      <Component size={100} shadow={'0 0 0 1px #ffffff15'} mt={1}/>
      </Component>
      </Component>
      </Component>
    </Component>
    </Ripples>

    <Ripples color='#ffffff45' className='ripplers'>
    <Component background={'#ddeeff25'} py={0} size={100} className={'d-cnter'}>
      <Component size={88} display={'flex'} margin={'0 auto'} style={{paddingTop:'1em'}}>
      <Component className='d-justify-start d-align'>
        <Component px={.6} py={.6} mt={-1.2} ml={0} scale={.9} background={'#e36e00'} radius={.7} className={'d-center'}>
        <Component className={'d-center'}>
        <svg width="14" style={{scale:'1.7'}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z" fill="#ffffff"></path> <path d="M21 10.4V16.48C21 16.62 20.99 16.76 20.98 16.89C20.97 17.01 20.96 17.12 20.94 17.24C20.93 17.36 20.91 17.48 20.89 17.59C20.54 20.01 19 21.54 16.59 21.89C16.48 21.91 16.36 21.93 16.24 21.94C16.12 21.96 16.01 21.97 15.89 21.98C15.76 21.99 15.62 22 15.48 22H7.52C7.38 22 7.24 21.99 7.11 21.98C6.99 21.97 6.88 21.96 6.76 21.94C6.64 21.93 6.52 21.91 6.41 21.89C4 21.54 2.46 20.01 2.11 17.59C2.09 17.48 2.07 17.36 2.06 17.24C2.04 17.12 2.03 17.01 2.02 16.89C2.01 16.76 2 16.62 2 16.48V8.52C2 8.38 2.01 8.24 2.02 8.11C2.03 7.99 2.04 7.88 2.06 7.76C2.07 7.64 2.09 7.52 2.11 7.41C2.46 4.99 4 3.46 6.41 3.11C6.52 3.09 6.64 3.07 6.76 3.06C6.88 3.04 6.99 3.03 7.11 3.02C7.24 3.01 7.38 3 7.52 3H13.6C14.24 3 14.7 3.58 14.58 4.2C14.58 4.22 14.57 4.24 14.57 4.26C14.55 4.36 14.54 4.46 14.52 4.57C14.48 4.99 14.5 5.44 14.59 5.9C14.62 6.02 14.64 6.12 14.68 6.23C14.76 6.56 14.89 6.87 15.06 7.16C15.12 7.28 15.2 7.4 15.27 7.51C15.6 7.99 16.01 8.4 16.49 8.73C16.6 8.8 16.72 8.88 16.84 8.94C17.13 9.11 17.44 9.24 17.77 9.32C17.88 9.36 17.98 9.38 18.1 9.41C18.56 9.5 19.01 9.52 19.43 9.48C19.54 9.46 19.64 9.45 19.74 9.43C19.76 9.43 19.78 9.42 19.8 9.42C20.42 9.3 21 9.76 21 10.4Z" fill="#ffffff"></path> </g></svg>
        </Component>
        </Component>
      </Component>
      <Component size={91} className='d-justify-tart com_span_bbt'>
      <Component ml={1.1}>
      <Component float={'left'}>
      <Text className={'normal'} size={1.1} opacity={.85}>Notifications</Text>
      </Component><br />
      <Component className={'d-justify-start'} mt={.4}>
      <Text size={.9} className='light' opacity={.4}>Status bar . Do not disturb</Text>
      </Component>
      <br />
      </Component>
      </Component>
      </Component>
    </Component>
    </Ripples>
    </Component>
    </Component>

    <Component className="d-jutify">
    <Component size={90} margin={'0 auto'} mt={1} radius={1.5} overflow={'hidden'}>
    <Ripples color='#ffffff45' className='ripplers'>
    <Component background={'#ddeeff25'} py={0} size={100}>
      <Component size={88} display={'flex'} margin={'0 auto'} style={{paddingTop:'1em'}}>
      <Component className='d-justify-start d-align'>
        <Component px={.6} py={.6} mt={-1.2} ml={0} scale={.9} background={'#81bb2a'} radius={.7} className={'d-center'}>
        <Component className={'d-center'}>
        <svg width="14" style={{scale:'1.7'}} fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12,8a4,4,0,1,1-4,4A4,4,0,0,1,12,8Zm1-3.2V3a1,1,0,0,0-2,0V4.8a1,1,0,1,0,2,0ZM11,19.2V21a1,1,0,0,0,2,0V19.2a1,1,0,0,0-2,0ZM17.091,7.909a1,1,0,0,0,.707-.293l1.273-1.272a1,1,0,1,0-1.414-1.415L16.384,6.2a1,1,0,0,0,.707,1.708ZM6.343,19.071,7.616,17.8A1,1,0,0,0,6.2,16.384L4.929,17.657a1,1,0,1,0,1.414,1.414ZM21,11H19.2a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2ZM2,12a1,1,0,0,0,1,1H4.8a1,1,0,1,0,0-2H3A1,1,0,0,0,2,12Zm14.384,5.8,1.273,1.272a1,1,0,1,0,1.414-1.415L17.8,16.384A1,1,0,0,0,16.384,17.8ZM6.343,4.929A1,1,0,0,0,4.929,6.343L6.2,7.616A1,1,0,0,0,7.616,6.2Z"></path></g></svg>
        </Component>
        </Component>
      </Component>
      <Component size={91} className='d-justify-tart com_span_bbt'>
      <Component ml={1.1}>
      <Component float={'left'}>
      <Text className={'normal'} size={1.1} opacity={.85}>Display</Text>
      </Component><br />
      <Component className={'d-justify-start'} mt={.4}>
      <Text size={.9} className='light' opacity={.4}>Brightness . Eye shield . Navbar</Text>
      </Component>
      <Component size={100} shadow={'0 0 0 1px #ffffff15'} mt={1}/>
      </Component>
      </Component>
      </Component>
    </Component>
    </Ripples>

    <Ripples color='#ffffff45' className='ripplers'>
    <Component background={'#ddeeff25'} py={0} size={100} className={'d-cnter'}>
      <Component size={88} display={'flex'} margin={'0 auto'} style={{paddingTop:'1em'}}>
      <Component className='d-justify-start d-align'>
        <Component px={.6} py={.6} mt={-1.2} ml={0} scale={.9} background={'#0fa88a'} radius={.7} className={'d-center'}>
        <Component className={'d-center'}>
        <svg width="14" style={{scale:'1.7'}} fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 297 297" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M169.577,186.957c6.287-3.554,8.504-11.529,4.951-17.815l-14.648-25.917c-2.318-4.104-6.668-6.643-11.381-6.643 c-4.715,0-9.064,2.539-11.385,6.643l-14.645,25.917c-3.551,6.287-1.334,14.263,4.951,17.815c2.033,1.148,4.242,1.693,6.422,1.693 c4.561,0,8.99-2.391,11.395-6.645l3.262-5.773l3.264,5.773C155.314,188.294,163.292,190.512,169.577,186.957z"></path> <path d="M190.999,195.066c-3.555-6.285-11.529-8.499-17.818-4.947c-6.285,3.554-8.5,11.53-4.947,17.816l3.619,6.402l-10.215,0.001 c-7.221,0.001-13.076,5.855-13.074,13.075c0,7.222,5.855,13.075,13.076,13.074l32.623-0.003c4.65,0,8.951-2.47,11.293-6.486 c2.344-4.016,2.377-8.976,0.09-13.022L190.999,195.066z"></path> <path d="M133.097,214.339h-7.949l3.617-6.401c3.555-6.286,1.34-14.263-4.947-17.816c-6.287-3.554-14.264-1.338-17.816,4.947 L91.354,220.98c-2.287,4.048-2.254,9.006,0.088,13.022c2.344,4.018,6.645,6.486,11.295,6.486h30.359 c7.221,0,13.074-5.854,13.074-13.075C146.171,220.192,140.317,214.339,133.097,214.339z"></path> <path d="M188.962,18.539c0.766-1.665,1.207-3.511,1.207-5.464C190.169,5.853,184.315,0,177.095,0h-57.189 c-7.221,0-13.074,5.853-13.074,13.075c0,1.953,0.439,3.799,1.207,5.464C77.251,21.005,52.95,46.83,52.95,78.242v158.846 c0,33.035,26.875,59.912,59.91,59.912h71.277c33.035,0,59.912-26.877,59.912-59.912V78.242 C244.05,46.83,219.747,21.005,188.962,18.539z M217.899,237.088c0,18.617-15.145,33.763-33.762,33.763H112.86 c-18.615,0-33.76-15.145-33.76-33.763V78.242c0-18.619,15.145-33.766,33.76-33.766h71.277c18.617,0,33.762,15.146,33.762,33.766 V237.088z"></path> </g> </g></svg>
        </Component>
        </Component>
      </Component>
      <Component size={91} className='d-justify-tart com_span_bbt'>
      <Component ml={1.1}>
      <Component float={'left'}>
      <Text className={'normal'} size={1.1} opacity={.85}>Connected devices</Text>
      </Component><br />
      <Component className={'d-justify-start'} mt={.4}>
      <Text size={.9} className='light' opacity={.4}>Quick Share . Android Auto</Text>
      </Component>
      <br />
      </Component>
      </Component>
      </Component>
    </Component>
    </Ripples>
    </Component>
    </Component>

<br /><br />
{/* <Component size={100} style={{height:'100%',transform:'translateY(-100%)'}} background={'#000'} className='com_app_block'> */}

{/* </Component> */}
</Component>
</Component>
  )
}

export default AppSettings