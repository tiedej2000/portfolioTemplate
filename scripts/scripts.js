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