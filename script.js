let images = document.getElementById("images")

let slide = [
    "img/image1.webp",
    "img/image2.webp",
    "img/image3.webp",
    "img/image4.webp",
    "img/image5.webp"
]

images.src = slide[0]

let numSlide = 0
function imgBefore() {
    if (numSlide == 0) {
        numSlide = slide.length-1
        images.src = slide[numSlide]
    } else {
        numSlide -= 1
        images.src = slide[numSlide]
    }
}
function imgAfter() {
    if (numSlide == slide.length-1) {
        numSlide = 0
        images.src = slide[numSlide]
    } else {
        numSlide += 1
        images.src = slide[numSlide]
    }
}






