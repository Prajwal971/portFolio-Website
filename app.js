// For the entire container
const boxContainer = document.querySelector(".boxContainer")
// For the Text HI
const saluteTextContainer = document.querySelector(".saluteTextContainer")
// For the Text Image
const saluteImgContainer = document.querySelector(".saluteImgContainer")
// For name intro
const authorName = document.querySelector(".name")
// For Title
// querySelectorAll for both dark and purple
const jobTitleContainers = document.querySelectorAll(".jobTitleContainer")
// jobTitleContainer[0] dark and [1] for purple
const jobTitles = document.querySelectorAll(".jobTitle")
// Title of the projects
const projectsTitle = document.querySelector(".projectsTitle")
// Phones
const phones = document.querySelectorAll(".phone")
// Laptop
const laptop = document.querySelector(".laptop")




for (let i = 0; i < 365; i++) {

    const list = [
        0, 1, 2, 3, 41, 42, 43, 44, 82, 83, 123, 124, 125, 126, 164, 165, 166, 167,
        205, 206, 246, 247, 287, 288, 5, 6, 46, 47, 87, 88, 128, 129, 169, 170, 210,
        211, 251, 252, 292, 293, 8, 9, 14, 15, 49, 50, 51, 90, 91, 92, 131, 132,
        133, 134, 172, 173, 213, 214, 254, 255, 295, 296, 175, 176, 217, 177, 218,
        259, 55, 56, 96, 97, 137, 138, 178, 179, 219, 220, 260, 261, 217, 218, 259,
        260, 261, 301, 302, 17, 18, 19, 58, 59, 60, 61, 99, 100, 102, 103, 140, 141,
        144, 181, 182, 185, 222, 223, 225, 226, 263, 264, 265, 266, 304, 305, 306,
        24, 25, 65, 66, 67, 106, 107, 108, 147, 148, 149, 150, 188, 189, 229, 230,
        270, 271, 311, 312, 67, 108, 149, 150, 191, 232, 192, 233, 274, 234, 275,
        316, 194, 235, 276, 154, 195, 236, 73, 114, 155, 33, 34, 74, 75, 115, 116,
        156, 157, 197, 198, 238, 239, 279, 280, 320, 321, 36, 37, 38, 39, 77, 78,
        79, 80, 118, 119, 159, 160, 161, 162, 200, 201, 202, 203, 241, 242, 282,
        283, 284, 285, 323, 324, 325, 326,
    ];

    const ele = document.createElement("div")
    ele.classList = list.includes(i) ? "box active" : "box"
    boxContainer.appendChild(ele)
}

// position will be increasing in the same number
// and it will look like its not moving
window.addEventListener("scroll", () => {
    let offsetY = window.scrollY // when scrolling vertically
    saluteTextContainer.style.transform = `translateY(${offsetY * 0.9}px)` //Translate Y for Y axis
    saluteImgContainer.style.transform = `translate(${offsetY * 0.4}px, ${offsetY * 0.7}px)`  //Translate for XY axis
    //Name animation only X axis and 0.1 will be slow and 1 will be fast
    authorName.style.transform = `translateX(${offsetY * 0.1}px)`
    // Move the background image #parallax effect
    jobTitleContainers[0].style.backgroundPositionY = `${offsetY * 0.5}px`
    // Move the  designation    #parallax effect
    jobTitleContainers[1].style.backgroundPositionY = `${-offsetY * 0.5}px`
    jobTitles[0].style.transform = `translateX(calc(200vh - ${offsetY}px))` // 200 becs the container needs the offset value to be 0 so height of 2 div is 200 and the 3rd div we need to be 0
    jobTitles[1].style.transform = `translateX(calc(-300vh + ${offsetY}px))`// 300 becs the container needs the offset value to be 0 so height of 2 div is 200 and the 3rd div we need to be 0
    //projectsTitle
    projectsTitle.style.transform = `translateY(calc(400vh - ${offsetY}px))`
    phones[0].style.transform = `translateX(calc(500vh - ${offsetY}px))`
    // Laptop image transform
    laptop.style.transform = `translateX(calc(600vh - ${offsetY}px))`
    // for last Phone image
    phones[1].style.transform = `translateX(calc(750vh - ${offsetY}px))`
})