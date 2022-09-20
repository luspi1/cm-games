const hoverTarget = document.querySelector('.game-item__img')

if (hoverTarget) {
  hoverTarget.addEventListener('mouseover', (e) => {
    const video = e.currentTarget.querySelector('video')
    video.play()
  })

  hoverTarget.addEventListener('mouseout', (e) => {
    const video = e.currentTarget.querySelector('video')
    video.pause()
  })
}
