let container = document.querySelector(".container");

let signup =()=>{
    container.classList.add("animated-signin");
    container.classList.remove("animated-signup");

}
let signin =()=>{
    container.classList.add("animated-signup");
    container.classList.remove("animated-signin");
}