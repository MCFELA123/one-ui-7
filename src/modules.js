window.onload = ()=> {
    const lockscreen = document.querySelector('.lockscreen')
    const lockscreen_actions = document.querySelectorAll('.lockscreen-actions')
    const status = document.querySelector('.status-bar')
    const res_actions = document.querySelectorAll('.res-actions')

lockscreen.addEventListener('contextmenu', ()=>{
    setTimeout(() => {
        lockscreen.setAttribute('style', 'scale: .85;border-radius:1.5em;transform: translateY(-5%);box-shadow:0 4px 1.5em -1px #00000030')
        status.setAttribute('style','opacity: 0;visibility:hidden')
        document.querySelector('.res-in').setAttribute('style','box-shadow:0 0 0 1.7px #ffffff50')
        lockscreen_actions.forEach(element => {
            element.setAttribute('style','opacity:1;visibility:visible')
        });
        res_actions.forEach(element => {
            element.setAttribute('style','opacity:1;visibility:visible')
        });
    }, 300);
})
document.querySelector('.lock-done').addEventListener('click', ()=>{
    setTimeout(() => {
        lockscreen.setAttribute('style', 'scale: 1;border-radius:0;transform: translateY(0);box-shadow:0 4px 0 -1px #00000000')
        status.setAttribute('style','opacity: 1;visibility:visible')
        document.querySelector('.res-in').setAttribute('style','box-shadow:0 0 0 1.7px #ffffff00')
        lockscreen_actions.forEach(element => {
            element.setAttribute('style','opacity:0;visibility:hidden')
        });
        res_actions.forEach(element => {
            element.setAttribute('style','opacity:0;visibility:hidden')
        });
    }, 300);
})


document.querySelector('.rest').addEventListener('mouseenter', (event)=> {
    const { clientX, clientY } = event;
    document.querySelector('.rest').style.left = `${clientX}px`
        document.querySelector('.rest').style.position = 'absolute'
                document.querySelector('.rest').style.transition = '.3s'
        document.querySelector('.rest').style.top = `${clientY}px`
})


}

window.oncontextmenu = ()=> {
    return false;
}