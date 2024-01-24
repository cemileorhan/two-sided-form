const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");
const logBtn = document.querySelector(".btn-log");
const signBtn = document.querySelector(".btn-sign");
const backLayer = document.querySelector(".back-layer");

signBtn.addEventListener("click", () =>{
    loginForm.classList.remove("active");
    signupForm.classList.add("active");
    backLayer.style.clipPath = "inset(0 0 0 50%)";
});

logBtn.addEventListener("click", () =>{
    signupForm.classList.remove("active");
    loginForm.classList.add("active");
    backLayer.style.clipPath = "";
});
