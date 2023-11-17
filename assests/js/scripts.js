const toggletheme = document.getElementById("toggletheme");

const rootHtml = document.documentElement

function changetheme(){
    const currentTheme = rootHtml.getAttribute("data-theme");

    if(currentTheme === "dark") rootHtml.setAttribute("data-theme", "light") 
    else rootHtml.setAttribute("data-theme", "dark")

    toggletheme.classList.toggle("bi-sun")
    toggletheme.classList.toggle("bi-moon-stars")

}

toggletheme.addEventListener("click", changetheme)