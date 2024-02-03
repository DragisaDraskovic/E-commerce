
let flag = false

const showMore = () => {

    const showMoreContainer = document.getElementById("showMoreContainer")
    const showMoreButton = document.getElementById("learnLessButton")
    const showMoreOther = document.getElementById("showOtherContainer")
    const regulationImg = document.getElementById("imgBackground")
    const regulationBackground = document.getElementById("background")

    if(flag === false) {
        showMoreContainer.style.display = "inline"
        showMoreOther.style.display = "inline"
        showMoreButton.innerText = "Learn Less"
        flag = true
    } else {
        showMoreContainer.style.display = "none"
        showMoreOther.style.display = "none"
        showMoreButton.innerText = "Learn More"
        flag = false
    }
}
