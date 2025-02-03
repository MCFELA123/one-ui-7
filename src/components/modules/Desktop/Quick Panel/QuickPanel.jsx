import React from 'react'
import { Background, Component, Icon, Panel, Text } from '../../style'
import msicon from '../../Apps/icon pack/system/player/msicon.svg'
import heart from '../../Apps/icon pack/system/player/heart.svg'
import previousTrack from '../../Apps/icon pack/system/player/previous.svg'
import nextTrack from '../../Apps/icon pack/system/player/next.svg'
import pauseAction from '../../Apps/icon pack/system/player/pause.svg'
import repeatAction from '../../Apps/icon pack/system/player/repeat.svg'

export const QuickPan = () => {
  return (
    <Panel top={0} left={0} blur={3} background={'#ffffff20'} zIndex={999999} style={{}} className={'d-justify quick-panel'}>
    <Component size={87} className='pan-full'>
<br /><br /><br />
    <Component className='d-align'>
        <Component size={50} className='pan-animate'>
        <Component size={95} float={'left'} radius={5} height={3.55} background={'#00000050'} cursor={'pointer'} blur={1} className={'d-align'}>
            <Component float={'left'} ml={.6} px={.7} py={.7} radius={5} className='d-center' background={'#ffffffd1'} cursor={'pointer'}>
            <svg width="14" style={{scale:'1.5'}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#00000090"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 19.5H12.01M22.8064 8.70076C19.9595 6.09199 16.1656 4.5 11.9999 4.5C7.83414 4.5 4.04023 6.09199 1.19336 8.70076M4.73193 12.243C6.67006 10.5357 9.21407 9.5 12 9.5C14.7859 9.5 17.3299 10.5357 19.268 12.243M15.6983 15.7751C14.6792 14.9763 13.3952 14.5 11.9999 14.5C10.5835 14.5 9.28172 14.9908 8.25537 15.8116" stroke="#00000090" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </Component>
            <Component float={'left'} ml={.5}>
                <Text size={.8} opacity={.8}>WLAN</Text>
                <Component mt={-.3}><Text opacity={.5} size={.65}>a05-5G</Text></Component>
            </Component>
        </Component>
        </Component>
        <Component size={50} className='pan-animate'>
        <Component size={95} float={'right'} radius={5} height={3.55} background={'#00000050'} cursor={'pointer'} blur={1} className={'d-align'}>
        <Component float={'left'} ml={.6} px={.7} py={.7} radius={5} className='d-center' background={'#00000035'} cursor={'pointer'}>
        <svg width={'14'} style={{scale:'1.4'}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.63965 18.64L17.9896 7.31998C18.4996 6.84998 18.4896 6.09997 17.9496 5.64997L14.0996 2.43998C13.0996 1.60998 12.2796 1.98998 12.2796 3.28998V20.71C12.2796 22.01 13.0996 22.39 14.0996 21.56L17.9496 18.35C18.4896 17.9 18.4996 17.15 17.9896 16.68L5.63965 5.35996" stroke="#ffffff65" stroke-width="2.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </Component>
        <Component float={'left'} ml={.5}>
        <Component mt={-.2}>
            <Text size={.8} opacity={.8}>Bluetooth</Text></Component>
        {/* <Component mt={-.3}><Text opacity={.5} size={.65}>paring..</Text></Component> */}
        </Component>
        </Component>
        </Component>
    </Component>
    <Component background={'#00000050'} blur={1} size={100} radius={2} py={1} mt={1} className='pan-animate'>
    <Component size={85} className='d-justify' margin={'0 auto'}>
    <Component float={'left'} px={.6} py={.6} radius={5} className='d-center' background={'#ffffffd1'} cursor={'pointer'}>
    <svg  width={'14'} style={{scale:'1.3'}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 4V20M7 20L3 16M7 20L11 16M17 4V20M17 4L21 8M17 4L13 8" stroke="#00000090" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
    </Component>

    <Component float={'left'} style={{marginLeft:'16%'}} px={.6} py={.6} radius={5} className='d-center' background={'#ffffffd1'} cursor={'pointer'}>
    <svg width={'14'} style={{scale:'1.5'}} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="sound-max" class="icon glyph" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M18.36,19.36a1,1,0,0,1-.7-.29,1,1,0,0,1,0-1.41,8,8,0,0,0,0-11.32,1,1,0,0,1,1.41-1.41,10,10,0,0,1,0,14.14A1,1,0,0,1,18.36,19.36Z" fill="#00000090"></path><path d="M15.54,16.54a1,1,0,0,1-.71-.3,1,1,0,0,1,0-1.41,4,4,0,0,0,0-5.66,1,1,0,0,1,1.41-1.41,6,6,0,0,1,0,8.48A1,1,0,0,1,15.54,16.54Z" fill="#00000090"></path><path d="M11.38,4.08a1,1,0,0,0-1.09.21L6.59,8H4a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2H6.59l3.7,3.71A1,1,0,0,0,11,20a.84.84,0,0,0,.38-.08A1,1,0,0,0,12,19V5A1,1,0,0,0,11.38,4.08Z" fill="#00000090"></path></g></svg>
    </Component>

    <Component float={'left'} style={{marginLeft:'16%'}} px={.6} py={.6} radius={5} className='d-center' background={'#00000035'} cursor={'pointer'}>
    <svg width={'14'} style={{scale:'1.6'}} viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M108.92 70.323a35.784 36.301 0 1 1 25.311 61.978c-19.77 0-28.157-19.055-38.213-36.301C85.28 77.6 77.576 59.699 57.805 59.699a35.784 36.301 0 1 0 25.045 62.209" class="a" stroke-width="16" stroke='#ffffff65' ></path></g></svg>
    </Component>

    <Component float={'left'} style={{marginLeft:'16%'}} px={.6} py={.6} radius={5} className='d-center' background={'#00000035'} cursor={'pointer'}>
    <svg  width={'14'} style={{scale:'1.4'}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="System / Qr_Code"> <path id="Vector" d="M19 20H20M16 20H14V17M17 17H20V14H19M14 14H16M4 16.9997C4 16.0679 4 15.6019 4.15224 15.2344C4.35523 14.7443 4.74432 14.3552 5.23438 14.1522C5.60192 14 6.06786 14 6.99974 14C7.93163 14 8.39808 14 8.76562 14.1522C9.25568 14.3552 9.64467 14.7443 9.84766 15.2344C9.9999 15.6019 9.9999 16.0681 9.9999 17C9.9999 17.9319 9.9999 18.3978 9.84766 18.7654C9.64467 19.2554 9.25568 19.6447 8.76562 19.8477C8.39808 19.9999 7.93162 19.9999 6.99974 19.9999C6.06786 19.9999 5.60192 19.9999 5.23438 19.8477C4.74432 19.6447 4.35523 19.2557 4.15224 18.7656C4 18.3981 4 17.9316 4 16.9997ZM14 6.99974C14 6.06786 14 5.60192 14.1522 5.23438C14.3552 4.74432 14.7443 4.35523 15.2344 4.15224C15.6019 4 16.0679 4 16.9997 4C17.9316 4 18.3981 4 18.7656 4.15224C19.2557 4.35523 19.6447 4.74432 19.8477 5.23438C19.9999 5.60192 19.9999 6.06812 19.9999 7C19.9999 7.93188 19.9999 8.39783 19.8477 8.76537C19.6447 9.25542 19.2557 9.64467 18.7656 9.84766C18.3981 9.9999 17.9316 9.9999 16.9997 9.9999C16.0679 9.9999 15.6019 9.9999 15.2344 9.84766C14.7443 9.64467 14.3552 9.25568 14.1522 8.76562C14 8.39808 14 7.93163 14 6.99974ZM4 6.99974C4 6.06786 4 5.60192 4.15224 5.23438C4.35523 4.74432 4.74432 4.35523 5.23438 4.15224C5.60192 4 6.06786 4 6.99974 4C7.93163 4 8.39808 4 8.76562 4.15224C9.25568 4.35523 9.64467 4.74432 9.84766 5.23438C9.9999 5.60192 9.9999 6.06812 9.9999 7C9.9999 7.93188 9.9999 8.39783 9.84766 8.76537C9.64467 9.25542 9.25568 9.64467 8.76562 9.84766C8.39808 9.9999 7.93162 9.9999 6.99974 9.9999C6.06786 9.9999 5.60192 9.9999 5.23438 9.84766C4.74432 9.64467 4.35523 9.25568 4.15224 8.76562C4 8.39808 4 7.93163 4 6.99974Z" stroke="#ffffff35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
    </Component>
    </Component>
    <br />
    <Component size={85} className='d-justify'  margin={'0 auto'}>
    <Component float={'left'} px={.6} py={.6} radius={5} className='d-center' background={'#00000035'} cursor={'pointer'}>
    <svg width={'14'} style={{scale:'1.3'}} version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#ffffff35" d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"></path> </g></svg>
    </Component>
    <Component float={'left'} style={{marginLeft:'16%'}} px={.6} py={.6} radius={5} className='d-center' background={'#00000035'} cursor={'pointer'}>
    <svg width={'14'} style={{scale:'1.5'}} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="ic_fluent_screenshot_24_filled" fill="#ffffff35" fill-rule="nonzero"> <path d="M17.25,3 C19.3210678,3 21,4.67893219 21,6.75 L21,17.25 C21,19.3210678 19.3210678,21 17.25,21 L6.75,21 C4.67893219,21 3,19.3210678 3,17.25 L3,6.75 C3,4.67893219 4.67893219,3 6.75,3 L17.25,3 Z M17.25,13 C16.8703042,13 16.556509,13.2821539 16.5068466,13.6482294 L16.5,13.75 L16.5,16 C16.5,16.2454222 16.3230914,16.4496 16.0898645,16.4919429 L16,16.5 L13.75,16.5 C13.3357864,16.5 13,16.8357864 13,17.25 C13,17.6296958 13.2821539,17.943491 13.6482294,17.9931534 L13.75,18 L16,18 C17.0543909,18 17.9181678,17.18415 17.9945144,16.1492661 L18,16 L18,13.75 C18,13.3357864 17.6642136,13 17.25,13 Z M6.75,13 C6.37030423,13 6.05650904,13.2821539 6.00684662,13.6482294 L6,13.75 L6,16 C6,17.0543909 6.81587733,17.9181678 7.85073759,17.9945144 L8,18 L10.25,18 C10.6642136,18 11,17.6642136 11,17.25 C11,16.8703042 10.7178461,16.556509 10.3517706,16.5068466 L10.25,16.5 L8,16.5 C7.75454222,16.5 7.5503921,16.3230914 7.50805575,16.0898645 L7.5,16 L7.5,13.75 C7.5,13.3357864 7.16421356,13 6.75,13 Z M10.25,6 L8,6 L7.85073759,6.00548573 C6.86762035,6.07801738 6.08213519,6.86122607 6.00604447,7.84334947 L6,8 L6,10.25 L6.00684662,10.3517706 C6.05650904,10.7178461 6.37030423,11 6.75,11 C7.12969577,11 7.44349096,10.7178461 7.49315338,10.3517706 L7.5,10.25 L7.5,8 L7.50805575,7.91012499 C7.54510005,7.70603303 7.70603303,7.54510005 7.91012499,7.50805575 L8,7.5 L10.25,7.5 L10.3517706,7.49315338 C10.7178461,7.44349096 11,7.12969577 11,6.75 C11,6.37030423 10.7178461,6.05650904 10.3517706,6.00684662 L10.25,6 Z M16,6 L13.75,6 C13.3357864,6 13,6.33578644 13,6.75 C13,7.12969577 13.2821539,7.44349096 13.6482294,7.49315338 L13.75,7.5 L16,7.5 C16.2454222,7.5 16.4496,7.67687704 16.4919429,7.91012499 L16.5,8 L16.5,10.25 C16.5,10.6642136 16.8357864,11 17.25,11 C17.6296958,11 17.943491,10.7178461 17.9931534,10.3517706 L18,10.25 L18,8 C18,6.94563773 17.18415,6.08183483 16.1492661,6.00548573 L16,6 Z" id="🎨-Color"> </path> </g> </g> </g></svg>
    </Component>

    <Component float={'left'} style={{marginLeft:'16%'}} px={.6} py={.6} radius={5} className='d-center' background={'#ffffffd1'} cursor={'pointer'}>
    <svg width={'14'} style={{scale:'1.6'}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 2L13 3.99545L12.9408 4.05474M13 18.0001L11 19.9108L11.0297 19.9417M12.9408 4.05474L11 6M12.9408 4.05474C12.6323 4.01859 12.3183 4 12 4C7.58172 4 4 7.58172 4 12C4 14.5264 5.17107 16.7793 7 18.2454M17 5.75463C18.8289 7.22075 20 9.47362 20 12C20 16.4183 16.4183 20 12 20C11.6716 20 11.3477 19.9802 11.0297 19.9417M13 22.0001L11.0297 19.9417" stroke="#00000090" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    </Component>

    <Component float={'left'} style={{marginLeft:'16%'}} px={.6} py={.6} radius={5} className='d-center' background={'#00000035'} cursor={'pointer'}>
    <svg width={'14'} style={{scale:'1.3'}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="style=fill"> <g id="wifi"> <path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M1.25 7.25C1.25 3.93629 3.93629 1.25 7.25 1.25H16.75C20.0637 1.25 22.75 3.93629 22.75 7.25V16.75C22.75 20.0637 20.0637 22.75 16.75 22.75H7.25C3.93629 22.75 1.25 20.0637 1.25 16.75V7.25ZM16.5121 12.4867C13.7721 10.3711 10.2357 10.3711 7.49574 12.4867C7.16788 12.7398 6.69688 12.6792 6.44374 12.3514C6.1906 12.0235 6.25118 11.5525 6.57904 11.2994C9.85906 8.7669 14.1488 8.7669 17.4288 11.2994C17.7567 11.5525 17.8172 12.0235 17.5641 12.3514C17.3109 12.6792 16.84 12.7398 16.5121 12.4867ZM5.45845 10.0506C9.43044 6.98313 14.5697 6.98313 18.5417 10.0506C18.8695 10.3038 19.3405 10.2433 19.5937 9.91543C19.8469 9.5876 19.7864 9.1166 19.4585 8.86342C14.9465 5.37886 9.05368 5.37886 4.54162 8.86342C4.21379 9.1166 4.15327 9.5876 4.40644 9.91543C4.65962 10.2433 5.13062 10.3038 5.45845 10.0506ZM15.1808 15.041C13.2462 13.5425 10.747 13.5425 8.81234 15.041C8.48488 15.2947 8.01379 15.2349 7.76014 14.9074C7.50648 14.5799 7.56632 14.1088 7.89378 13.8552C10.3692 11.9378 13.624 11.9378 16.0994 13.8552C16.4268 14.1088 16.4867 14.5799 16.233 14.9074C15.9794 15.2349 15.5083 15.2947 15.1808 15.041ZM10.6386 17.6037C11.4746 16.9582 12.5329 16.9582 13.3689 17.6037C13.6967 17.8569 14.1677 17.7963 14.4209 17.4684C14.674 17.1406 14.6135 16.6696 14.2856 16.4164C12.9096 15.3539 11.0979 15.3539 9.72184 16.4164C9.39399 16.6696 9.33343 17.1406 9.58658 17.4684C9.83974 17.7963 10.3107 17.8569 10.6386 17.6037Z" fill="#ffffff35"></path> </g> </g> </g></svg>
    </Component>
    </Component>
    </Component>

    <Component background={'#00000050'} overflow={'hidden'} blur={1} size={100} radius={2} py={.8} style={{paddingBottom:'0'}} mt={1} className={'d-center pan-animate'}>
    <Component className='ms00-player-img' size={100} top={0} style={{height:'100%'}} position={'absolute'}/>
    <Component background={'#00000055'} size={100} top={0} style={{height:'100%'}} position={'absolute'}/>
    <Component size={85} zIndex={9} className=''>
        <Component className="d-align">
            <Component float={'left'} className='d-align'>
                <Icon src={msicon} scale={1.3} />
            </Component>
            <Component className='d-align' ml={.5}>
            <Text className='app-name semi-bold' size={.8}>This Phone</Text>
            </Component>
        </Component>
        <Component mt={.7}>
        <Text className='app-name semi-bold' size={1}>Thick of it (ft. Tripple Redd)</Text>
        </Component>
        <Text className='app-name normal' size={.7} opacity={.7}>KSI & Tripple Redd</Text>
        <Component size={100} height={.4} mt={.5} margin={'0 auto'} background={'#ffffff50'} display={'flex'} radius={2} blur={.07}>
            <Component size={50} height={.4} className='seeker-light-blue-theme d-justify-end d-align' radius={2}>
                <Component px={.48} py={.48} cursor={'pointer'} className={'d-center seeker-thumb'} radius={2} />
            </Component>
        </Component>
        <Component>
            <Component float={'left'}>
            <Text className='app-name' size={.7} opacity={.85}>01:05</Text>
            </Component>
            <Component float={'right'}>
            <Text className='app-name' size={.7} opacity={.85}>03:10</Text>
            </Component>
        </Component>
        <br />
        <Component mt={.5} className={'d-center'}>
        <Component cursor={'pointer'}>
            <Icon src={heart}/>
        </Component>
        <Component ml={1.3} cursor={'pointer'}>
            <Icon src={previousTrack}/>
        </Component>
        <Component ml={1.3} cursor={'pointer'}>
            <Icon src={pauseAction}/>
        </Component>
        <Component ml={1.3} cursor={'pointer'}>
            <Icon src={nextTrack}/>
        </Component>
        <Component ml={1.3} cursor={'pointer'}>
            <Icon src={repeatAction}/>
        </Component>
        </Component>
        </Component>
    </Component>
    <br />
    <Component className='d-align'>
        <Component size={50} className='pan-animate'>
        <Component size={95} float={'left'} radius={2} py={1} background={'#00000050'} cursor={'pointer'} blur={1}>
            <Component size={80} margin={'0 auto'} className={'d-algin'}>
            <Component className='d-align' background={'#ffffff40'} size={100} overflow={'hidden'} radius={3} height={2.25}>
            <Component size={60} height={2.25} background={'#ffffff'}/>
            <Component position={'absolute'} ml={1} zIndex={999} className='d-align'>
            <svg width={'14'} style={{scale:'1.2'}} viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>brightness [#000000]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-60.000000, -4399.000000)" fill="#00000090"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M6.929,4241.9289 C6.538,4242.3199 6.538,4242.9529 6.929,4243.3429 C7.32,4243.7339 7.953,4243.7339 8.343,4243.3429 C8.734,4242.9529 8.734,4242.3199 8.343,4241.9289 C7.953,4241.5379 7.32,4241.5379 6.929,4241.9289 M19.657,4254.6569 C19.266,4255.0469 19.266,4255.6809 19.657,4256.0709 C20.047,4256.4619 20.681,4256.4619 21.071,4256.0709 C21.462,4255.6809 21.462,4255.0469 21.071,4254.6569 C20.681,4254.2659 20.047,4254.2659 19.657,4254.6569 M14,4256.9999 C13.448,4256.9999 13,4257.4479 13,4257.9999 C13,4258.5519 13.448,4258.9999 14,4258.9999 C14.552,4258.9999 15,4258.5519 15,4257.9999 C15,4257.4479 14.552,4256.9999 14,4256.9999 M14,4240.9999 C14.552,4240.9999 15,4240.5519 15,4239.9999 C15,4239.4479 14.552,4238.9999 14,4238.9999 C13.448,4238.9999 13,4239.4479 13,4239.9999 C13,4240.5519 13.448,4240.9999 14,4240.9999 M6.929,4254.6569 C6.538,4255.0469 6.538,4255.6809 6.929,4256.0709 C7.32,4256.4619 7.953,4256.4619 8.343,4256.0709 C8.734,4255.6809 8.734,4255.0469 8.343,4254.6569 C7.953,4254.2659 7.32,4254.2659 6.929,4254.6569 M19.657,4241.9289 C19.266,4242.3199 19.266,4242.9529 19.657,4243.3429 C20.047,4243.7339 20.681,4243.7339 21.071,4243.3429 C21.462,4242.9529 21.462,4242.3199 21.071,4241.9289 C20.681,4241.5379 20.047,4241.5379 19.657,4241.9289 M23,4247.9999 C22.448,4247.9999 22,4248.4479 22,4248.9999 C22,4249.5519 22.448,4249.9999 23,4249.9999 C23.552,4249.9999 24,4249.5519 24,4248.9999 C24,4248.4479 23.552,4247.9999 23,4247.9999 M5,4247.9999 C4.448,4247.9999 4,4248.4479 4,4248.9999 C4,4249.5519 4.448,4249.9999 5,4249.9999 C5.552,4249.9999 6,4249.5519 6,4248.9999 C6,4248.4479 5.552,4247.9999 5,4247.9999 M18,4248.9999 C18,4251.2089 16.209,4252.9999 14,4252.9999 C11.791,4252.9999 10,4251.2089 10,4248.9999 C10,4246.7909 11.791,4244.9999 14,4244.9999 C16.209,4244.9999 18,4246.7909 18,4248.9999" id="brightness-[#000000]"> </path> </g> </g> </g> </g></svg>
            </Component>
            </Component>
            </Component><br />
            <Component display={'flex'} size={80} margin={'0 auto'}>
            <Component size={50} className='d-justify-start'>
            <Component ml={.2} px={.8} py={.8} radius={5} className='d-center' background={'#00000035'} cursor={'pointer'}>
            <svg width={'14'} style={{scale:'1.5'}} fill="#ffffff90" viewBox="0 0 512 512" id="_75_Brightness-Half" data-name="75 Brightness-Half" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Group_200" data-name="Group 200"> <path id="Path_100" data-name="Path 100" d="M256,128A128,128,0,1,0,384,256,128.006,128.006,0,0,0,256,128Zm0,192a64,64,0,0,1,0-128Z" fill-rule="evenodd"></path> <path id="Path_101" data-name="Path 101" d="M256,64a32,32,0,1,0-32-32A31.991,31.991,0,0,0,256,64Z" fill-rule="evenodd"></path> <path id="Path_102" data-name="Path 102" d="M96,128A32,32,0,1,0,64,96,31.991,31.991,0,0,0,96,128Z" fill-rule="evenodd"></path> <path id="Path_103" data-name="Path 103" d="M32,224a32,32,0,1,0,32,32A31.991,31.991,0,0,0,32,224Z" fill-rule="evenodd"></path> <path id="Path_104" data-name="Path 104" d="M96,384a32,32,0,1,0,32,32A31.991,31.991,0,0,0,96,384Z" fill-rule="evenodd"></path> <path id="Path_105" data-name="Path 105" d="M256,448a32,32,0,1,0,32,32A32.012,32.012,0,0,0,256,448Z" fill-rule="evenodd"></path> <path id="Path_106" data-name="Path 106" d="M416,384a32,32,0,1,0,32,32A31.991,31.991,0,0,0,416,384Z" fill-rule="evenodd"></path> <path id="Path_107" data-name="Path 107" d="M480,224a32,32,0,1,0,32,32A31.991,31.991,0,0,0,480,224Z" fill-rule="evenodd"></path> <path id="Path_108" data-name="Path 108" d="M416,128a32,32,0,1,0-32-32A31.991,31.991,0,0,0,416,128Z" fill-rule="evenodd"></path> </g> </g></svg>
            </Component>
            </Component>
            
            <Component mr={.2} size={50} className='d-justify-end'>
            <Component float={'left'} px={.8} py={.8} radius={5} className='d-center' background={'#00000035'} cursor={'pointer'}>
            <svg width={'14'} style={{scale:'1.5'}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.5287 15.9294C21.3687 15.6594 20.9187 15.2394 19.7987 15.4394C19.1787 15.5494 18.5487 15.5994 17.9187 15.5694C15.5887 15.4694 13.4787 14.3994 12.0087 12.7494C10.7087 11.2994 9.90873 9.40938 9.89873 7.36938C9.89873 6.22938 10.1187 5.12938 10.5687 4.08938C11.0087 3.07938 10.6987 2.54938 10.4787 2.32938C10.2487 2.09938 9.70873 1.77938 8.64873 2.21938C4.55873 3.93938 2.02873 8.03938 2.32873 12.4294C2.62873 16.5594 5.52873 20.0894 9.36873 21.4194C10.2887 21.7394 11.2587 21.9294 12.2587 21.9694C12.4187 21.9794 12.5787 21.9894 12.7387 21.9894C16.0887 21.9894 19.2287 20.4094 21.2087 17.7194C21.8787 16.7894 21.6987 16.1994 21.5287 15.9294Z" fill="#ffffff90"></path> </g></svg>
            </Component>
            </Component>
            </Component>
        </Component>
        </Component>

        <Component size={50} className='d-justify-end pan-animate'>
        <Component size={95} float={'left'} radius={2} py={1} background={'#00000050'} cursor={'pointer'} blur={1}>
            <Component size={80} margin={'0 auto'} className={'d-algin'}>
            <Component className='d-align' background={'#ffffff40'} size={100} overflow={'hidden'} radius={3} height={2.25}>
            <Component size={40} height={2.25} background={'#ffffff'}/>
            <Component position={'absolute'} ml={1} zIndex={999} className='d-align'>
            <svg width={'14'} style={{scale:'1.2'}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.75 12.508L21.25 9.108V14.7609C20.7449 14.4375 20.1443 14.25 19.5 14.25C17.7051 14.25 16.25 15.7051 16.25 17.5C16.25 19.2949 17.7051 20.75 19.5 20.75C21.2949 20.75 22.75 19.2949 22.75 17.5C22.75 17.5 22.75 17.5 22.75 17.5L22.75 7.94625C22.75 6.80342 22.75 5.84496 22.6696 5.08131C22.6582 4.97339 22.6448 4.86609 22.63 4.76597C22.5525 4.24426 22.4156 3.75757 22.1514 3.35115C22.0193 3.14794 21.8553 2.96481 21.6511 2.80739C21.6128 2.77788 21.573 2.74927 21.5319 2.7216L21.5236 2.71608C20.8164 2.2454 20.0213 2.27906 19.2023 2.48777C18.4102 2.68961 17.4282 3.10065 16.224 3.60469L14.13 4.48115C13.5655 4.71737 13.0873 4.91751 12.712 5.1248C12.3126 5.34535 11.9686 5.60548 11.7106 5.99311C11.4527 6.38075 11.3455 6.7985 11.2963 7.25204C11.25 7.67831 11.25 8.19671 11.25 8.80858V16.7609C10.7448 16.4375 10.1443 16.25 9.5 16.25C7.70507 16.25 6.25 17.7051 6.25 19.5C6.25 21.2949 7.70507 22.75 9.5 22.75C11.2949 22.75 12.75 21.2949 12.75 19.5C12.75 19.5 12.75 19.5 12.75 19.5L12.75 12.508Z" fill="#00000090"></path> <path opacity="0.5" d="M7.75 2C7.75 1.58579 7.41421 1.25 7 1.25C6.58579 1.25 6.25 1.58579 6.25 2V7.76091C5.74485 7.4375 5.14432 7.25 4.5 7.25C2.70507 7.25 1.25 8.70507 1.25 10.5C1.25 12.2949 2.70507 13.75 4.5 13.75C6.29493 13.75 7.75 12.2949 7.75 10.5V5.0045C8.44852 5.50913 9.27955 5.75 10 5.75C10.4142 5.75 10.75 5.41421 10.75 5C10.75 4.58579 10.4142 4.25 10 4.25C9.54565 4.25 8.9663 4.07389 8.51159 3.69837C8.0784 3.34061 7.75 2.79785 7.75 2Z" fill="#00000090"></path> </g></svg>
            </Component>
            </Component>
            </Component><br />
            <Component display={'flex'} size={80} margin={'0 auto'}>
            <Component size={50} className='d-justify-start'>
            <Component ml={.2} px={.8} py={.8} radius={5} className='d-center' background={'#ffffffd1'} cursor={'pointer'}>
            <svg width={'14'} style={{scale:'1.7'}} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="sound-max" class="icon glyph" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M18.36,19.36a1,1,0,0,1-.7-.29,1,1,0,0,1,0-1.41,8,8,0,0,0,0-11.32,1,1,0,0,1,1.41-1.41,10,10,0,0,1,0,14.14A1,1,0,0,1,18.36,19.36Z" fill="#00000090"></path><path d="M15.54,16.54a1,1,0,0,1-.71-.3,1,1,0,0,1,0-1.41,4,4,0,0,0,0-5.66,1,1,0,0,1,1.41-1.41,6,6,0,0,1,0,8.48A1,1,0,0,1,15.54,16.54Z" fill="#00000090"></path><path d="M11.38,4.08a1,1,0,0,0-1.09.21L6.59,8H4a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2H6.59l3.7,3.71A1,1,0,0,0,11,20a.84.84,0,0,0,.38-.08A1,1,0,0,0,12,19V5A1,1,0,0,0,11.38,4.08Z" fill="#00000090"></path></g></svg>
            </Component>
            </Component>
            
            <Component mr={.2} size={50} className='d-justify-end'>
            <Component float={'left'} px={.8} py={.8} radius={5} className='d-center' background={'#00000035'} cursor={'pointer'}>
            <svg width={'14'} style={{scale:'1.8'}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#ffffff90"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 12C7.25 9.37665 9.37665 7.25 12 7.25C14.6234 7.25 16.75 9.37665 16.75 12C16.75 14.6234 14.6234 16.75 12 16.75C9.37665 16.75 7.25 14.6234 7.25 12ZM8.75 12C8.75 10.2051 10.2051 8.75 12 8.75C13.7949 8.75 15.25 10.2051 15.25 12C15.25 13.7949 13.7949 15.25 12 15.25C10.2051 15.25 8.75 13.7949 8.75 12Z" fill="#ffffff90"></path> </g></svg>
            </Component>
            </Component>
            </Component>
        </Component>
        </Component>
    </Component>
    <br />
    <Component className='d-align'>
        <Component size={50} className='pan-animate'>
        <Component size={95} float={'left'} radius={5} height={3.55} background={'#00000050'} cursor={'pointer'} blur={1} className={'d-align'}>
            <Component float={'left'} ml={.6} px={.7} py={.7} radius={5} className='d-center' background={'#00000035'} cursor={'pointer'}>
            <svg  width="14" style={{scale:'1.5'}} fill="#ffffff65" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 314.998 314.998" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g transform="translate(0 -562.36)"> <g> <g> <polygon points="128.6,656.912 128.6,656.912 128.6,656.912 "></polygon> <path d="M115.5,671.112v97.7c0,10.5,10.5,17.3,19.9,12.6l98.2-48.8c10-5.3,10-20,0-25.2l-98.2-48.8c-2.1-1.1-4.2-1.7-6.8-1.7 C121.3,657.412,115.5,663.212,115.5,671.112z M143.3,693.712l52.5,26.3l-52.5,26.3V693.712z"></path> <path d="M237.8,590.812c-23.6-12.6-49.3-18.4-74.5-17.9l0,0c-3.7,0-7.4,0.6-11.1,1.1c-28.3,2.6-55.6,14.2-78.7,33.1 c-7.3-6.3-17.3-10-27.8-10c-25.2,0-45.7,20.5-45.7,45.7c0,24.7,20.5,45.2,45.7,45.2c24.6,0,45.1-20.5,45.1-45.2 c0-4.2-0.6-8.4-1.6-12.6c0.6,0,1.1-0.6,1.6-1.1c37.3-31.6,90.3-37.3,133.9-13.7c43,23.1,67.7,70.4,61.4,119.2 s-41.5,88.7-88.7,100.8c-47.8,12.1-98.2-6.3-126.5-46.2c-11.1-15.2-33.6,1.1-22.6,15.8c35.2,49.3,97.1,72.4,155.9,57.2 c58.3-14.7,102.4-64,109.7-124.4C321.3,678.012,290.8,619.212,237.8,590.812z M45.7,660.112c-9.9,0-17.8-7.8-17.8-17.3 c0-10,7.8-17.9,17.8-17.9c9.4,0,17.3,7.9,17.3,17.9C63,652.212,55.1,660.112,45.7,660.112z"></path> </g> </g> </g> </g></svg>
            </Component>
            <Component float={'left'} ml={.5}>
                <Text size={.8} opacity={.8}>Smart View</Text>
                <Component mt={-.3}><Text opacity={.5} size={.65}>Mirror screen</Text></Component>
            </Component>
        </Component>
        </Component>
        <Component size={50} className='pan-animate'>
        <Component size={95} float={'right'} radius={5} height={3.55} background={'#00000050'} cursor={'pointer'} blur={1} className={'d-align'}>
        <Component float={'left'} ml={.6} px={.7} py={.7} radius={5} className='d-center' background={'#00000035'} cursor={'pointer'}>
        <svg width={'14'} style={{scale:'1.4'}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.63965 18.64L17.9896 7.31998C18.4996 6.84998 18.4896 6.09997 17.9496 5.64997L14.0996 2.43998C13.0996 1.60998 12.2796 1.98998 12.2796 3.28998V20.71C12.2796 22.01 13.0996 22.39 14.0996 21.56L17.9496 18.35C18.4896 17.9 18.4996 17.15 17.9896 16.68L5.63965 5.35996" stroke="#ffffff65" stroke-width="2.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </Component>
        <Component float={'left'} ml={.5}>
        <Component mt={-.2}>
            <Text size={.8} opacity={.8}>Bluetooth</Text></Component>
        {/* <Component mt={-.3}><Text opacity={.5} size={.65}>paring..</Text></Component> */}
        </Component>
        </Component>
        </Component>
    </Component>
    </Component>
    </Panel>
  )
}

export default QuickPan