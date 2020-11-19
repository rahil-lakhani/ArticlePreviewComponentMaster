
var inactiveShareButton = document.querySelector(".inactiveShareIcon");
var activeShareButton = document.querySelector(".activeShareIcon")

var profileSection = document.querySelector(".profileSectionContainer");
var shareSection = document.querySelector(".shareSectionContainer");
var triangle = document.querySelector(".triangleShadow");



if (window.innerWidth < 960) {

    // Inactive Share Button Behavior (Mobile Screen)
    inactiveShareButton.addEventListener("click", function () {
        profileSection.classList.remove("sectionMovement2");
        shareSection.classList.remove("sectionMovement2");
        profileSection.classList.add("sectionMovement");
        shareSection.classList.add("sectionMovement");
    })

    // Active Share Button Behavior (Mobile Screen)
    activeShareButton.addEventListener("click", function () {
        profileSection.classList.add("sectionMovement2");
        shareSection.classList.add("sectionMovement2");
    })

} else {

    // Inactive & Active Share Button Behavior (Computer Screen)
    inactiveShareButton.addEventListener("click", function () {

        if (inactiveShareButton.classList.contains("activeShareIcon2")) {
            shareSection.classList.remove("sectionMovement");
            triangle.classList.remove("sectionMovement");
            shareSection.classList.add("opacity0");
            triangle.classList.add("opacity0");
            inactiveShareButton.classList.remove("activeShareIcon2");
            document.querySelector(".inactiveShareIcon img").setAttribute("src", "images/icon-share.svg")
        } else {
            shareSection.classList.remove("opacity0");
            triangle.classList.remove("opacity0");
            shareSection.classList.add("sectionMovement");
            triangle.classList.add("sectionMovement");
            inactiveShareButton.classList.add("activeShareIcon2");
            document.querySelector(".inactiveShareIcon img").setAttribute("src", "images/icon-share (Light).svg")
        }

    })

}