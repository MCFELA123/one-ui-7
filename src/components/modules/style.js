import styled from "styled-components";

export const Background = styled.div `
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    transition: all 2s cubic-bezier(0.16, 1, 0.29, 0.99) 0s, background 0s ease 0s;
    background-position: center;
    background-size: cover;
    background-image: url(${(props) => props.wallpaper});
`

export const View = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    // background: #fff;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
`

export const Docker = styled.div`
    width: 100%;
    overflow: hidden;
    // background: #fff;
    z-index: 9;
    position: absolute;
    bottom: 3.5em;
    display: flex;
    justify-content: center;
`

export const PageView = styled.div`
    display: ${(props) => props.display};
    margin-top: ${(props) => props.top}em;
    width: 87%;
    margin: 2.5em auto;
`

//status bar

export const StatusBar = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 999999;
    padding: 4px 0 0 0;
    // background: #fff;
    transition:${(props) => props.duration}s;
`

//battery icon

export const Battery = styled.div`
    width: 1.7em;
    height: .9em;
    overflow: hidden;
    position:${(props) => props.position};
    margin-top:${(props) => props.mt}em;
    float:${(props) => props.float};
    margin-left:${(props) => props.ml}em;
    box-shadow:${(props) => props.shadow};
    outline:${(props) => props.outline};
    border:${(props) => props.border};
    background:${(props) => props.background};
    border-radius: ${(props) => props.radius}em;
    backdrop-filter: blur(${(props) => props.blur}em);
    padding-top:${(props) => props.py}em;
    padding-bottom:${(props) => props.py}em;
    padding-left:${(props) => props.px}em;
    padding-right:${(props) => props.px}em;
    z-index:${(props) => props.zIndex};
    background-position: center;
    background-size: cover;
    position:${(props) => props.position};
    top:${(props) => props.top}em;
    bottom:${(props) => props.bottom}em;
    left:${(props) => props.botom}em;
    left:${(props) => props.left}em;
    right:${(props) => props.right}em;
    background-image: url(${(props) => props.bgImg});
    text-align:${(props) => props.textAlign};
`

//battery meter

export const Meter = styled.div`
    width: ${(props) => props.levels}%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    position:${(props) => props.position};
    margin-top:${(props) => props.mt}em;
    float:${(props) => props.float};
    margin-left:${(props) => props.ml}em;
    box-shadow:${(props) => props.shadow};
    outline:${(props) => props.outline};
    border:${(props) => props.border};
    background:${(props) => props.background};
    border-radius: ${(props) => props.radius}em;
    backdrop-filter: blur(${(props) => props.blur}em);
    padding-top:${(props) => props.py}em;
    padding-bottom:${(props) => props.py}em;
    padding-left:${(props) => props.px}em;
    padding-right:${(props) => props.px}em;
    z-index:${(props) => props.zIndex};
    background-position: center;
    background-size: cover;
    position:${(props) => props.position};
    top:${(props) => props.top}em;
    bottom:${(props) => props.bottom}em;
    left:${(props) => props.botom}em;
    left:${(props) => props.left}em;
    right:${(props) => props.right}em;
    background-image: url(${(props) => props.bgImg});
    text-align:${(props) => props.textAlign};
`

export const Text = styled.text`
    position:${(props) => props.position};
    font-size:${(props) => props.size}em;
    opacity:${(props) => props.opacity};
    scale:${(props) => props.scale};
    color: ${(props) => props.color};
    z-index: ${(props) => props.index};
`

export const InputBar = styled.div`
    display: ${(props) => props.display};
    width: 100%;
    padding: 5px 0 5px 0;
    background: #ffffffe4;
    backdrop-filter: blur(1em);
    -webkit-backdrop-filter: blur(1em);
    border-radius: ${(props) => props.radius}em
`

export const InputSect = styled.input`
    background-position: center;
    background-size: cover;
    background-image: url(${(props) => props.wallpaper});
    display: ${(props) => props.display};
    outline: ${(props) => props.outline};
    align-items: ${(props) => props.align};
    justify-content: ${(props) => props.justify};
    width:${(props) => props.size}%;
    height:${(props) => props.height}em;
    position:${(props) => props.position};
    margin:${(props) => props.margin};
    margin-top:${(props) => props.mt}em;
    overflow:${(props) => props.overflow};
    float:${(props) => props.float};
    margin-left:${(props) => props.ml}em;
    margin-right:${(props) => props.mr}em;
    box-shadow:${(props) => props.shadow};
    outline:${(props) => props.outline};
    border:${(props) => props.border};
    background:${(props) => props.background} !important;
    border-radius: ${(props) => props.radius}em;
    backdrop-filter: blur(${(props) => props.blur}em);
    -webkit-backdrop-filter: blur(${(props) => props.blur}em);
    padding-top:${(props) => props.py}em;
    padding-bottom:${(props) => props.py}em;
    padding-left:${(props) => props.px}em;
    padding-right:${(props) => props.px}em;
    z-index:${(props) => props.zIndex};
    background-position: center;
    background-size: cover;
    position:${(props) => props.position};
    opacity:${(props) => props.opacity};
    top:${(props) => props.top}em;
    bottom:${(props) => props.bottom}em;
    scale:${(props) => props.scale};
    left:${(props) => props.botom}em;
    left:${(props) => props.left}em;
    right:${(props) => props.right}em;
    background-image: url(${(props) => props.bgImg});
    text-align:${(props) => props.textAlign};
    text-indent:${(props) => props.textGap}em;
    &::placeholder {
    color: #ffffffd3;
    }
`

export const Span = styled.div`
    display: ${(props) => props.display};
    align-items: ${(props) => props.align};
    justify-content: ${(props) => props.justify};
    width:${(props) => props.size}%;
    height:${(props) => props.height}%;
    position:${(props) => props.position};
    margin-top:${(props) => props.mt}em;
    float:${(props) => props.float};
    margin-left:${(props) => props.ml}em;
    box-shadow:${(props) => props.shadow};
    outline:${(props) => props.outline};
    border:${(props) => props.border};
    background:${(props) => props.background};
    border-radius: ${(props) => props.radius}em;
    backdrop-filter: blur(${(props) => props.blur}em);
    padding-top:${(props) => props.py}em;
    padding-bottom:${(props) => props.py}em;
    padding-left:${(props) => props.px}em;
    padding-right:${(props) => props.px}em;
    z-index:${(props) => props.zIndex};
    background-position: center;
    background-size: cover;
    position:${(props) => props.position};
    top:${(props) => props.top}em;
    bottom:${(props) => props.bottom}em;
    left:${(props) => props.botom}em;
    left:${(props) => props.left}em;
    right:${(props) => props.right}em;
    background-image: url(${(props) => props.bgImg});
    text-align:${(props) => props.textAlign};
`

export const ObjectModule = styled.div`
    display: ${(props) => props.display};
    align-items: ${(props) => props.align};
    justify-content: ${(props) => props.justify};
    width: 3.3em;
    height:3.3em;
    position:${(props) => props.position};
    margin-top:2.5em;
    float: left;
    margin-left: 10%;
    box-shadow:${(props) => props.shadow};
    outline:${(props) => props.outline};
    border:${(props) => props.border};
    background:${(props) => props.background};
    border-radius: ${(props) => props.radius}em;
    backdrop-filter: blur(${(props) => props.blur}em);
    padding-top:${(props) => props.py}em;
    padding-bottom:${(props) => props.py}em;
    padding-left:${(props) => props.px}em;
    padding-right:${(props) => props.px}em;
    z-index:${(props) => props.zIndex};
    background-position: center;
    background-size: cover;
    position:${(props) => props.position};
    top:${(props) => props.top}em;
    bottom:${(props) => props.bottom}em;
    left:${(props) => props.botom}em;
    left:${(props) => props.left}em;
    right:${(props) => props.right}em;
    background-image: url(${(props) => props.bgImg});
    text-align:${(props) => props.textAlign};
    &:first-child {
    margin-left:0
    }& text {
    color:#ffffff;
    text-shadow: 0 0 .5vmin #000000;
    font-size: small;
    }
`

export const Object = styled.div`
    display: ${(props) => props.display};
    align-items: ${(props) => props.align};
    justify-content: ${(props) => props.justify};
    width:3.2em;
    height:${(props) => props.height}em;
    position:${(props) => props.position};
    margin-top:${(props) => props.mt}em;
    float: left;
    margin-left: 1em;
    box-shadow:${(props) => props.shadow};
    outline:${(props) => props.outline};
    border:${(props) => props.border};
    background:${(props) => props.background};
    border-radius: ${(props) => props.radius}em;
    backdrop-filter: blur(${(props) => props.blur}em);
    padding-top:${(props) => props.py}em;
    padding-bottom:${(props) => props.py}em;
    padding-left:${(props) => props.px}em;
    padding-right:${(props) => props.px}em;
    z-index:${(props) => props.zIndex};
    background-position: center;
    background-size: cover;
    position:${(props) => props.position};
    top:${(props) => props.top}em;
    bottom:${(props) => props.bottom}em;
    left:${(props) => props.botom}em;
    left:${(props) => props.left}em;
    right:${(props) => props.right}em;
    background-image: url(${(props) => props.bgImg});
    text-align:${(props) => props.textAlign};
    &:first-child {
    margin-left:0
    }& text {
    color:#ffffff;
    text-shadow: 0 0 .5vmin #000000;
    font-size: small;
    }
`

export const NavControl = styled.div`
    width: 100%;
    z-index: 9999;
    overflow: hidden;
    // background: #fff;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
`

export const LockScreen = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    background-position: center;
    background-size: cover;
    background-image: url(${(props) => props.wallpaper}) !important;
    margin-top:${(props) => props.mt}em;
    overflow:${(props) => props.overflow};
    float:${(props) => props.float};
    margin-left:${(props) => props.ml}em;
    margin-right:${(props) => props.mr}em;
    box-shadow:${(props) => props.shadow};
    outline:${(props) => props.outline};
    border:${(props) => props.border};
    background:${(props) => props.background};
    border-radius: ${(props) => props.radius}em;
    backdrop-filter: blur(${(props) => props.blur}em);
    padding-top:${(props) => props.py}em;
    padding-bottom:${(props) => props.py}em;
    padding-left:${(props) => props.px}em;
    padding-right:${(props) => props.px}em;
    z-index:${(props) => props.zIndex};
    background-position: center;
    background-size: cover;
    position:${(props) => props.position};
    top:${(props) => props.top}em;
    bottom:${(props) => props.bottom}em;
    scale:${(props) => props.scale};
    left:${(props) => props.botom}em;
    left:${(props) => props.left}em;
    right:${(props) => props.right}em;
    background-image: url(${(props) => props.bgImg});
    text-align:${(props) => props.textAlign};
    transition: all .7s cubic-bezier(0.16, 1, 0.29, 0.99) 0s, background 0s ease 0s;
`

export const App_Page = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`

export const App_Page_More = styled.div`
    width: 100%;
    height: 100%;
    background: #ffffff15;
    transition: .5s filter linear;
    -webkit-transition: 1s -webkit-filter linear;
-moz-transition: 1s -moz-filter linear;
-ms-transition: 1s -ms-filter linear;
-o-transition: 1s -o-filter linear;
    backdrop-filter: blur(1em);
    -webkit-backdrop-filter: blur(1em);
    display: flex;
    justify-content: center;
`

export const App_Module = styled.div`
    width: 3.2em;
    height: 3.2em;
    float: left;
    overflow: hidden;
    // background: #fff;
    border-radius: .85em;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    &:first-child {
    margin-left: 0
    }
`

export const AppView_Module = styled.div`
    width: 3.3em;
    height: 3.3em;
    float: left;
    overflow: hidden;
    // background: #fff;
    border-radius: 1.2em;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  float: left;
	display: flex;
  overflow: hidden;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	color: #f5f5f5;
  transition: all .7s cubic-bezier(0.16, 1, 0.29, 0.99) 0s, background 0s ease 0s;
	cursor: pointer;
	&.growing {
		h1.modal-content {
			height: auto;
			margin: 0;
			opacity: 0;
			transition-delay: 0.5s;
		}
	}
	
	&.full-screen {
		height: 100%;
		z-index: 100;
		margin: 0;
		border-radius: 0;
		
		.fa {
			font-size: 10vw;
		}
		.modal-content {
			height: auto;
			width: auto;
			margin: inital;
		}
		h1.modal-content {
			transition-delay: 0.5s;
			opacity: 1;
		}
	}
	&.shrinking {
		h1.modal-content {
			transition-delay: 0s;
			transition: 0.5s;
			opacity: 0;
			display: block;
		}
	}
	
	&-container {
		display: flex;
		justify-content: space-between;
		width: 100%;
		box-sizing: border-box;
	}
`

export const ClockView = styled.div`
    & canvas {
    width: 5em;
    scale: 1.5;
    height: 5em;
    }
`

export const Component = styled.div`
    background-position: center;
    background-size: cover;
    background-image: url(${(props) => props.wallpaper});
    display: ${(props) => props.display};
    align-items: ${(props) => props.align};
    justify-content: ${(props) => props.justify};
    width:${(props) => props.size}%;
    height:${(props) => props.height}em;
    position:${(props) => props.position};
    margin:${(props) => props.margin};
    margin-top:${(props) => props.mt}em;
    overflow:${(props) => props.overflow};
    float:${(props) => props.float};
    margin-left:${(props) => props.ml}em;
    margin-right:${(props) => props.mr}em;
    box-shadow:${(props) => props.shadow};
    outline:${(props) => props.outline};
    border:${(props) => props.border};
    background:${(props) => props.background} !important;
    border-radius: ${(props) => props.radius}em;
    backdrop-filter: blur(${(props) => props.blur}em);
    -webkit-backdrop-filter: blur(${(props) => props.blur}em);
    padding-top:${(props) => props.py}em;
    padding-bottom:${(props) => props.py}em;
    padding-left:${(props) => props.px}em;
    padding-right:${(props) => props.px}em;
    z-index:${(props) => props.zIndex};
    background-position: center;
    background-size: cover;
    position:${(props) => props.position};
    opacity:${(props) => props.opacity};
    top:${(props) => props.top}em;
    bottom:${(props) => props.bottom}em;
    scale:${(props) => props.scale};
    left:${(props) => props.botom}em;
    left:${(props) => props.left}em;
    right:${(props) => props.right}em;
    background-image: url(${(props) => props.bgImg});
    text-align:${(props) => props.textAlign};
`

export const Button = styled.button`
    display: ${(props) => props.display};
    align-items: ${(props) => props.align};
    justify-content: ${(props) => props.justify};
    width:${(props) => props.size}em;
    height:${(props) => props.height}em;
    position:${(props) => props.position};
    margin-top:${(props) => props.mt}em;
    float:${(props) => props.float};
    margin-left:${(props) => props.ml}em;
    box-shadow:${(props) => props.shadow};
    outline:${(props) => props.outline};
    border:${(props) => props.border};
    cursor:${(props) => props.cursor};
    opacity:${(props) => props.opacity};
    visibility:${(props) => props.visibility};
    background:${(props) => props.background};
    border-radius: ${(props) => props.radius}em;
    backdrop-filter: blur(${(props) => props.blur}em);
    padding-top:${(props) => props.py}em;
    padding-bottom:${(props) => props.py}em;
    padding-left:${(props) => props.px}em;
    padding-right:${(props) => props.px}em;
    z-index:${(props) => props.zIndex};
    background-position: center;
    background-size: cover;
    position:${(props) => props.position};
    top:${(props) => props.top}em;
    bottom:${(props) => props.bottom}em;
    left:${(props) => props.botom}em;
    left:${(props) => props.left}em;
    right:${(props) => props.right}em;
    background-image: url(${(props) => props.bgImg});
    text-align:${(props) => props.textAlign};
    transition:${(props) => props.duration}s;
`



export const Item = styled.div`
    display: ${(props) => props.display};
    align-items: ${(props) => props.align};
    justify-content: ${(props) => props.justify};
    width:${(props) => props.size}em;
    position:${(props) => props.position};
    margin-top:${(props) => props.mt}em;
    float:${(props) => props.float};
    margin-left:${(props) => props.ml}em;
    box-shadow:${(props) => props.shadow};
    outline:${(props) => props.outline};
    border:${(props) => props.border};
    background:${(props) => props.background};
    border-radius: ${(props) => props.radius}em;
    backdrop-filter: blur(${(props) => props.blur}em);
    padding-top:${(props) => props.py}em;
    padding-bottom:${(props) => props.py}em;
    padding-left:${(props) => props.px}em;
    padding-right:${(props) => props.px}em;
    z-index:${(props) => props.zIndex};
    background-position: center;
    background-size: cover;
    position:${(props) => props.position};
    top:${(props) => props.top}em;
    bottom:${(props) => props.bottom}em;
    left:${(props) => props.botom}em;
    left:${(props) => props.left}em;
    right:${(props) => props.right}em;
    background-image: url(${(props) => props.bgImg});
    text-align:${(props) => props.textAlign};
`

export const PageContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
    transition: all 1.5s cubic-bezier(0.16, 1, 0.29, 0.99) 0s, background 0s ease 0s !important;
    top: 0;
    left: 0;
    justify-content: start;
`

export const Icon = styled.img`
    display: ${(props) => props.display};
    align-items: ${(props) => props.align};
    justify-content: ${(props) => props.justify};
    width:${(props) => props.size}em !important;
    position:${(props) => props.position};
    margin-top:${(props) => props.mt}em;
    float:${(props) => props.float};
    margin-left:${(props) => props.ml}em;
    margin-right:${(props) => props.mr}em;
    box-shadow:${(props) => props.shadow};
    padding-top:${(props) => props.py}em;
    padding-bottom:${(props) => props.py}em;
    padding-left:${(props) => props.px}em;
    padding-right:${(props) => props.px}em;
    z-index:${(props) => props.zIndex};
    background-position: center;
    background-size: cover;
    position:${(props) => props.position};
    scale:${(props) => props.scale};
    cursor:${(props) => props.cursor};
    top:${(props) => props.top}em;
    bottom:${(props) => props.bottom}em;
    left:${(props) => props.botom}em;
    transform:${(props) => props.transform}em;
    left:${(props) => props.left}em;
    right:${(props) => props.right}em;
    background-image: url(${(props) => props.bgImg});
    text-align:${(props) => props.textAlign};
`

export const Ripples = styled.div`
    border-radius: ${(props) => props.radius}em;
`