// const button = document.querySelector(".btn1")
// const button2 = document.querySelector(".btn2")
// const silde2 = document.querySelector(".slide2")
// const slide1 = document.querySelector(".slide1")
const nav = document.querySelector("nav")
const navcontent = document.querySelector(".sideMenu")
const cvBtn = document.querySelector("#cvbtn")
const gettouch = document.querySelector(".touch")

// button.addEventListener("click", ()=>{
//     slide1.classList.remove("selected")
//     silde2.classList.remove("selected")
//     button.classList.add("selectedbtn")
//     button2.classList.remove("selectedbtn")
// })
// button2.addEventListener("click", ()=>{
//     silde2.classList.add("selected")
//     slide1.classList.add("selected")
//     button.classList.remove("selectedbtn")
//     button2.classList.add("selectedbtn")
// })

nav.addEventListener("click", ()=>{
    nav.classList.toggle("clicked")
    navcontent.classList.toggle("show")
})
cvBtn.addEventListener("click", ()=>{
    let resume = window.open("Resume up.pdf")
    resume.document.title = "Resume"
})
gettouch.addEventListener("click", ()=>{
    location.href = "mailto:manojmk27@outlook.com"
})
