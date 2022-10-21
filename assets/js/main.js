const clock = document.getElementById("clock")
const modal = document.querySelector(".modal")
const containerEl = document.querySelector(".container")
function smth(){
    let time = new Date();
    let hours = String(time.getHours()).padStart(2, "0");
    let minutes = String(time.getMinutes()).padStart(2, "0");
    let seconds = String(time.getSeconds()).padStart(2, "0")
    let miliSeconds = String(time.getMilliseconds()).padStart(2, "0")
document.body.children[1].innerHTML = hours;
document.body.children[3].innerHTML = minutes;
document.body.children[5].innerHTML = seconds;
document.body.children[7].innerHTML = miliSeconds;
   setInterval(smth, 100);
}
 
smth()
const input = document.querySelector("input")
const btnOk = document.getElementById("submit")
const btnCancel = document.getElementById("cancel")
btnOk.addEventListener('click', () => {
modal.classList.remove("second-style")
localStorage.setItem("Parol", input.value)
    localStorage.setItem("password", "none")

})
modal.style.display = localStorage.getItem("password")
btnCancel.addEventListener('click', () => {
    modal.classList.remove("second-style")
        localStorage.setItem("password", "none")
    })
setTimeout(function(){
modal.classList.add("second-style")


}, 3000)