import React from 'react'
import { AppView_Module, Icon, InputBar, Item, Span, ObjectModule, PageView, Text, Component, ClockView } from '../../style'
import BatteryGauge from "react-battery-gauge";
import { useBattery } from 'react-use';

import file_icon from '../../Apps/icon pack/files.png'
import contact_icon from '../../Apps/icon pack/contacts.png'
import store_icon from '../../Apps/icon pack/galaxy-store.png'
import gallery_icon from '../../Apps/icon pack/gallery.png'
import settings_icon from '../../Apps/icon pack/settings.png'
import weather_icon from '../../Apps/icon pack/weather.png'
import cloud_icon from '../../Apps/icon pack/cloud.png'
import theme_icon from '../../Apps/icon pack/themes.png'
import wallet_icon from '../../Apps/icon pack/wallet.png'
import calendar_icon from '../../Apps/icon pack/calendar.png'
import clock_icon from '../../Apps/icon pack/clock.png'
import microphone_icon from '../../Apps/icon pack/microphone.svg'
import internet_search_icon from '../../Apps/icon pack/browser-search.png'
import weather_module_icon from '../../Apps/icon pack/system/weather.svg'
import sun_module_icon from '../../Apps/icon pack/system/sun.svg'
import gallery_doodle from '../../Apps/icon pack/doodle.png'
import dog_doodle from '../../Apps/icon pack/system/widgets/dog.png'
import plus_doodle from '../../Apps/icon pack/system/plus.svg'

export const Contents = () => {
function app_cmd() {
  let ctx = clock.getContext("2d"),
  cWidth = ctx.canvas.width,
  cHeight = ctx.canvas.height,
  hours = Array(12)
    .fill(undefined)
    .map((_, index) => index + 1),
  t;
  
  class Clock {
  constructor() {
    this.r = cWidth / 2 - 20;
  }
  
  init() {
    this.draw();
    t = setInterval(this.draw.bind(this), 1000);
  }
  
  draw() {
    ctx.clearRect(0, 0, cWidth, cHeight);
    const { hours, minutes, seconds } = getTime();
  
    ctx.save();
    this.drawPanel();
    this.drawHourNums();
  
    this.drawSecondIndicator(seconds);
    this.drawMinuteIndicator(minutes);
    this.drawHourIndicator(hours, minutes);
    this.drawCentralPointer();
    ctx.restore();
  }
  
  drawPanel() {
    ctx.beginPath();
    ctx.translate(cWidth / 2, cWidth / 2);
    ctx.fillStyle = "#fff";
    ctx.arc(0, 0, this.r, 0, 2 * Math.PI);
    ctx.fill();
  }
  
  drawHourNums() {
    ctx.font = "40px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#000";
  
    hours.forEach((text, k) => {
      let rad = ((2 * Math.PI) / 12) * (k - 2);
      let x = Math.cos(rad) * (this.r - 40);
      let y = Math.sin(rad) * (this.r - 40);
      ctx.beginPath();
      ctx.fillText(text, x, y);
    });
  }
  
  drawCentralPointer() {
    ctx.beginPath();
    ctx.fillStyle = "#333";
    ctx.arc(0, 0, 13, 0, 2 * Math.PI);
    ctx.fill();
  
    ctx.beginPath();
    ctx.fillStyle = "#666";
    ctx.arc(0, 0, 6, 0, 2 * Math.PI);
    ctx.fill();
  }
  
  drawHourIndicator(hours, minutes) {
    const rad = ((2 * Math.PI) / 12) * hours,
      mRad = ((2 * Math.PI) / 12 / 60) * minutes;
    ctx.save();
  
    ctx.rotate(rad + mRad);
  
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
  
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -this.r / 2);
    ctx.stroke();
  
    ctx.beginPath();
    ctx.lineWidth = 7;
    ctx.moveTo(0, -this.r / 5);
    ctx.lineTo(0, -this.r / 1.8);
    ctx.stroke();
  
    ctx.restore();
  }
  drawMinuteIndicator(minutes) {
    const rad = ((2 * Math.PI) / 60) * minutes;
    ctx.save();
    ctx.rotate(rad);
  
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -this.r / 1.5);
    ctx.stroke();
  
    ctx.beginPath();
    ctx.lineWidth = 7;
  
    ctx.moveTo(0, -this.r / 5);
    ctx.lineTo(0, -this.r / 1.2);
    ctx.stroke();
    ctx.restore();
  }
  drawSecondIndicator(seconds) {
    const rad = ((2 * Math.PI) / 60) * seconds;
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = "orange";
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.rotate(rad);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -this.r / 1.1);
    ctx.stroke();
    ctx.restore();
  }
  }
  
  function getTime() {
  let d = new Date();
  return {
    hours: d.getHours(),
    minutes: d.getMinutes(),
    seconds: d.getSeconds()
  };
  }
  
  window.Clock = Clock;
  
  new Clock().init();

var fsmActual = document.createElement('div');
fsmActual.setAttribute('id', 'fsm_actual');
document.body.appendChild(fsmActual);
var $fsm = document.querySelectorAll('.fsm');
var $fsmActual = document.querySelector('#fsm_actual');
$fsmActual.style.position = "absolute";

var fsmHome = document.querySelector('.all_home');

var position = {};
var size = {};


var openFSM = function(event) {
	var $this = event.currentTarget;
	position = $this.getBoundingClientRect();
	size = {
		width: window.getComputedStyle($this).width,
		height: window.getComputedStyle($this).height
	}
	document.querySelector('.com_background').setAttribute('style','scale:1.2')
	$fsmActual.style.position = "absolute";
	$fsmActual.style.top = position.top + 'px';
  $fsmActual.className = 'system-mode';
	$fsmActual.style.left = position.left + 'px';
	$fsmActual.style.height = size.height;
  $fsmActual.style.zIndex = 9;
  // $fsmActual.style.borderRadius = 0
  document.querySelector('.page-content').setAttribute('style','scale:.93')
	$fsmActual.style.width = size.width;
	$fsmActual.style.margin = $this.style.margin;
	
	setTimeout(function(){
		$fsmActual.innerHTML = $this.innerHTML;
		var classes = $this.classList.value.split(' ');
		for (var i = 0; i < classes.length; i++) {
			$fsmActual.classList.add(classes[i]);
		}
		$fsmActual.classList.add('growing');
		$fsmActual.style.height = '100%';
		$fsmActual.style.width = '100%';
		$fsmActual.style.top = '0';
		$fsmActual.style.left = '0';
		$fsmActual.style.margin = '0';
	}, 0);
	
	setTimeout(function(){
		$fsmActual.classList.remove('growing');
		$fsmActual.classList.add('full-screen')
	}, 0);
};



for (var i = 0; i < $fsm.length; i++) {
	$fsm[i].addEventListener("click", openFSM);
}
fsmHome.addEventListener("click", closeFSM);
};

function closeFSM() {
	var $this = document.querySelector('#fsm_actual');
  var position = {};
var size = {};

position = $this.getBoundingClientRect();
size = {
  width: window.getComputedStyle($this).width,
  height: window.getComputedStyle($this).height
}
document.querySelector('.com_background').setAttribute('style','scale:1')
	$this.style.height = size.height;
	$this.style.width = size.width;
	$this.style.top = position.top + 'px';
	$this.style.left = position.left + 'px';
  document.querySelector('.page-content').setAttribute('style','scale:1')
	$this.style.opacity = '0';
  $this.style.transform = 'translate(0,10px) scale(.95)';
	$this.classList.remove('full-screen');
  setTimeout(() => {
    $this.style.background = 'unset';
  }, 1000);
	
	setTimeout(()=>{

		$this.style = '';
	}, 1000);
};
const battery = useBattery();

  // Destructuring battery properties
  const { isSupported, level, charging, dischargingTime, chargingTime } = battery;

  return (
    <PageView top={3} onLoad={app_cmd}>
      
{/* <span>{(level * 100).toFixed(0)}%</span> */}

      {/* <div id="battery">
      <div id="charge"></div>
      <b id="charge-level"></b>
      </div>
      <div hidden id="charging-time"></div> */}
      <Component display={'flex'}>
      <Component py={1} height={8.5} px={1} radius={1.3} size={100} overflow={'hidden'} className='green-gradient-bg'>
        <div style={{width: '30em'}}>
        <Text className='semi-bold' size={1}>Mom's <br />birthday</Text>
        <br />
        <Text className='semi-bold lnh-2' opacity={.7} size={.7}>🎂 Dec 12, 2025</Text>
        <br /><br />
        <Text className='bold' size={2}>43</Text><br />
        <Text className='semi-bold' opacity={.7} size={.8}> days left</Text>
      <ClockView hidden>
		  <canvas id="clock" width="500" height="500"/>
	    </ClockView>
        </div>
      </Component>
      <Component py={0} px={2} radius={1} size={100} ml={0}>
        <Component py={.7} px={.9} radius={2} size={100} className='blue-gradient-bg' display={'flex'}>
          <Component float={'left'} className='d-align'>
            <Icon src={weather_module_icon} className='weather-module-icon'/>
            <Component position={'absolute'} className='sun-module-icon'/>
          </Component>
          <Component float={'left'} className='d-align'>
            <Component ml={1} display={'grid'} justify={'start'}>
              <Component scale={1.4} ml={.6}><Text className='semi-bold'>23&deg;</Text></Component>
              <div><Text className='small' size={.7} opacity={.7}>Los angel..</Text></div>
            </Component>
          </Component>
        </Component>
        <Component className="d-justify" size={127}>
          <Text className='app-name'>Weather</Text>
        </Component>
        <Component>
      <Component py={.5} px={1.5} mt={1} position={'absolute'} radius={1} size={25} className='d-align-end d-justify'>
      <Icon src={gallery_doodle} size={9}/>
      <Component position={'absolute'}>
          <Icon src={dog_doodle} size={7}/>
      </Component><br />
      </Component>
        </Component>
      </Component>
      </Component>
      <Item className="d-justify-start" mt={-1}>

      <ObjectModule display={'grid'} justify={'center'} align={'end'}>
      <AppView_Module className={'fsm com_app'}>
        <Icon src={calendar_icon} width={50}/>
      </AppView_Module>
      <Text className='app-name'>Calendar</Text>
      </ObjectModule>

      <ObjectModule style={{marginLeft:'8%'}} display={'grid'} justify={'center'} align={'end'}>
      <AppView_Module className={'fsm com_app'}>
        <Icon src={wallet_icon} width={50}/>
      </AppView_Module>
      <Text className='app-name'>Wallet</Text>
      </ObjectModule>
      </Item>

      <Item className="d-justify" mt={0}>
      <ObjectModule display={'grid'} justify={'center'} align={'end'}>
      <AppView_Module className={'fsm com_app'}>
        <Icon src={file_icon} width={50}/>
      </AppView_Module>
      <Text className='app-name'>My Files</Text>
      </ObjectModule>

      <ObjectModule display={'grid'} justify={'center'} align={'end'}>
      <AppView_Module className={'fsm com_app'}>
        <Icon src={contact_icon} width={50}/>
      </AppView_Module>
      <Text className='app-name'>Contacts</Text>
      </ObjectModule>

      <ObjectModule display={'grid'} justify={'center'} align={'end'}>
      <AppView_Module className={'fsm com_app'}>
        <Icon src={settings_icon} width={50}/>
      </AppView_Module>
      <Text className='app-name'>Settings</Text>
      </ObjectModule>

      <ObjectModule display={'grid'} justify={'center'} align={'end'}>
      <AppView_Module className={'fsm com_app'}>
        <Icon src={gallery_icon} width={50}/>
      </AppView_Module>
      <Text className='app-name'>Gallery</Text>
      </ObjectModule>
      </Item>
      <br /><br />
        <div>
        <Component display={'flex'}>
      <Component size={100} py={.7} px={1.5} radius={3} className='blur-component'>
          <Component>
          <Component float={'left'} className='d-align-start'>
            <Text className='bold col-black' size={.9}>Fri, Nov 10, Today</Text>
          </Component>
          <Component float={'right'}>
            <Icon src={plus_doodle} scale={.6} />
          </Component>
          </Component><br />
          <Component mt={.3}>
            <Component className='d-align' float={'left'}>
            <Component height={1} background={'green'} float={'left'} style={{width:'4px'}} radius={2}></Component><Component float={'left'} ml={.5}>
              <Text className='col-black semi-bold' size={.8}>12:30PM <Text className='col-black' opacity={.7}>Launch with musk</Text></Text>
            </Component>
            </Component>
            <Component float={'right'} className='d-align'>🎂</Component>
          </Component>
      </Component>
      </Component>
      <Component mt={'.3'} className='d-center'><Text className='app-name'>Today</Text></Component>
        </div>
    </PageView>
  )
}

export default Contents