const adaptiveVideosSlider = document.querySelector('.adaptive-videos-slider')
const vsCardsWrapper = adaptiveVideosSlider.querySelector('.vs-cards-wrapper')
const vsCards = vsCardsWrapper.querySelectorAll('.vs-card')
const vsPaginationBullets = adaptiveVideosSlider.querySelectorAll(
  '.vs-pagination-bullet'
)
const vsPrevBtn = adaptiveVideosSlider.querySelector('.vs-prev-btn')
const vsNextBtn = adaptiveVideosSlider.querySelector('.vs-next-btn')

let currentVsCard = 0

// Move the cards
function moveVsCards() {
  vsCardsWrapper.style.transform = `translateX(-${
    currentVsCard * (100 / vsCards.length)
  }%)`
  vsPaginationBullets.forEach((bullet, index) => {
    bullet.classList.remove('active')
    if (index === currentVsCard) {
      bullet.classList.add('active')
    }
  })
}

// Рagination Bullets Count
let vsBullet5 = document.getElementById('vs-bullet-5')
let vsBullet6 = document.getElementById('vs-bullet-6')

function vsBulletsCount() {
  if (window.innerWidth < 1000) {
    vsCardsInRow = 1
    vsBullet5.hidden = false
    vsBullet6.hidden = false
  } else if (window.innerWidth < 1360) {
    vsCardsInRow = 2
    vsBullet5.hidden = false
    vsBullet6.hidden = true
  } else {
    vsCardsInRow = 3
    vsBullet5.hidden = true
    vsBullet6.hidden = true
  }
}

// Previous Button
vsPrevBtn.addEventListener('click', () => {
  vsBulletsCount()
  if (currentVsCard > 0) {
    currentVsCard--
    moveVsCards()
  } else if ((currentVsCard = -1)) {
    currentVsCard = vsCards.length - vsCardsInRow
    moveVsCards()
  }
})

// Next Button
vsNextBtn.addEventListener('click', () => {
  vsBulletsCount()
  if (currentVsCard < vsCards.length - vsCardsInRow) {
    currentVsCard++
    moveVsCards()
  } else {
    currentVsCard = 0
    moveVsCards()
  }
})

// Pagination Bullets
vsPaginationBullets.forEach((bullet, index) => {
  bullet.addEventListener('click', () => {
    currentVsCard = index
    moveVsCards()
  })
})

// Wrpap Video Titles
const vsPostTitle = document.getElementsByClassName('vs-post-title')
let maxChars = 52

for (let i of vsPostTitle) {
  if (i.innerHTML.length > maxChars) {
    if (i.innerHTML.charAt(maxChars - 1) === ' ') {
      i.innerHTML = i.innerHTML.substring(0, maxChars - 1) + '...'
    } else i.innerHTML = i.innerHTML.substring(0, maxChars) + '...'
  }
}
