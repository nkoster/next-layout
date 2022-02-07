var toggle = false

function handleClick(event) {
  if (toggle) {
    event.target.style.opacity = '100%'
    toggle = false
  } else {
    event.target.style.opacity = 0
    toggle = true
  }
}
