let scrollpos = window.scrollY
  const header = document.querySelector("header")
  const header_height = header.offsetHeight

  const add_class_on_scroll = () => header.classList.add("show")
  const remove_class_on_scroll = () => header.classList.remove("show")

  window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;

    if (scrollpos >= header_height) { add_class_on_scroll() }
    else { remove_class_on_scroll() }

    // console.log(scrollpos)
  })