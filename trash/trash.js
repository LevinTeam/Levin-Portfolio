// اسکرول هدر

const $ = document

const mainNavElem = $.querySelector("#mainNav")
const imgElem = $.querySelector("img")

function scrollHandher () {
    console.log(document.documentElement.scrollTop)

    if (document.documentElement.scrollTop != 0) {
        mainNavElem.classList.add("bg-black")
        mainNavElem.classList.add("txt-white")
        imgElem.style.height = "64px"
    } else {
        mainNavElem.classList.remove("bg-black")
        mainNavElem.classList.remove("txt-white")
        imgElem.style.height = "84px"
    }
}

document.addEventListener("scroll", scrollHandher)