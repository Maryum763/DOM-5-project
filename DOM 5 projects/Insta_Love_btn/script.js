const cont = document.querySelector("#container")
const loveIcon = document.querySelector("#love")
const iIcon = document.querySelector("#i")
// console.log(iIcon)

cont.addEventListener("dblclick", function () {
    // console.log("helloo")
    loveIcon.style.transform = "translate(-50%,-50%) scale(1)";
    loveIcon.style.opacity = "0.8"
    loveIcon.style.color = "red"
    iIcon.style.color = "red"

    setTimeout(function () {
        loveIcon.style.transform = "translate(-50%,-50%) scale(0)";

    }, 2000)
    setTimeout(function () {
        loveIcon.style.opacity = "0"

    }, 1000)
    iIcon.addEventListener("click", function () {
        iIcon.style.color = "white"
    })
})


// setTimeout inbuilt browser ka fun h .....ye delay karta hai ....2000 milisecond

// setTimeout(function(){

// },2000)
