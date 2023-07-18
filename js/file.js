

function toggle(toggleBtn, icon ){
toggleBtn.addEventListener("click", () => {
toggleBtn.classList.toggle("off");

if (toggleBtn.classList.contains("off")){
return icon.classList.replace("fa-check", "fa-xmark");
}
icon.classList.replace("fa-xmark", "fa-check");
});
};

toggle(document.querySelector(".toggle-btn"), document.querySelector(".icon i"));
toggle(document.querySelector(".toggle-btn2"), document.querySelector(".icon2 i"));


// let toggleBtn = document.querySelector(".toggle-btn"),
// icon = document.querySelector(".icon i");

// toggleBtn.addEventListener("click", () => {
// toggleBtn.classList.toggle("off");

// if (toggleBtn.classList.contains("off")){
// return icon.classList.replace("fa-check", "fa-xmark");
// }
// icon.classList.replace("fa-xmark", "fa-check");
// });