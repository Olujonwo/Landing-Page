let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x'); 
    navbar.classList.toggle('open');
}
let answers = document.querySelectorAll(".accordion");
answers.forEach((event) => {
   event.addEventListener('click', () => {
      if (event.classList.contains("active")) {
         event.classList.remove("active");
      } else {
         event.classList.add("active");
      }
   })
})
