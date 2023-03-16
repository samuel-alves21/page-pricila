const general = () => {
  const sections = document.querySelectorAll('.sections')

  sections.forEach((section) => {
    section.style.height = `${window.innerHeight}px`
  })

  const handleResize = () => {
    sections.forEach((section) => {
      section.style.height = `${window.innerHeight}px`
    })
  }

  window.onresize = handleResize
}

general()
