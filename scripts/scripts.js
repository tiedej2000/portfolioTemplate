// image fullscreen functionality

const imageSet = document.querySelectorAll('.gallery__wrapper img')
const fullscreenContainer = document.querySelector('.fullscreen__image')
const fullscreenImg = document.querySelector('.fullscreen__image img')

imageSet.forEach(img =>{
    img.addEventListener('click', ()=>{
        const imgSrc = img.src

        fullscreenContainer.classList.add('active')
        fullscreenImg.src = imgSrc
    })
})

const closeBtn = document.querySelector('.svg__wrapper')

closeBtn.addEventListener('click', () =>{
    fullscreenContainer.classList.remove('active')
})

// menu bar

const inventoryItems = document.querySelectorAll('.inventory li')

inventoryItems.forEach(item => {
    item.addEventListener('mouseenter', () =>{
        inventoryItems.forEach(i => {i.classList.remove('active')})
        item.classList.add('active')
    })
})

const settingsBtn = document.querySelector('.settings')
const settingsMenu = document.querySelector('.expanded__settings')

settingsBtn.addEventListener('mouseenter', () =>{
    settingsMenu.classList.add('active')
})

settingsBtn.addEventListener('mouseleave', () =>{
    settingsMenu.classList.remove('active')
})
 
//darkmode

const darkModeBtn = document.querySelector('.btn__wrapper')
const pageWrapper = document.querySelector('.main__wrapper')
const menuBar = document.querySelector('.menu__bar')

darkModeBtn.addEventListener('click', () => {
    darkModeBtn.classList.toggle('darkmode')
    pageWrapper.classList.toggle('darkmode')
    menuBar.classList.toggle('darkmode')
})

//loader
document.addEventListener('DOMContentLoaded', () => {
    const logoWrapper = document.querySelector('.logo')
    const loaderWrapper = document.querySelector('.loader')

    setTimeout(()=>{
        logoWrapper.classList.add('loaded')
    },1000)

    setTimeout(()=>{
        loaderWrapper.classList.add('loaded')
    },1250)
});