var themeBtn = document.querySelector('.button');
var readBtn = document.querySelector('.read__btn');
var circle = document.querySelector('.button__bg--circle');
var body = document.querySelector('body');
var readMore = document.querySelector('.r_more');


// Start Theme
let currentTheme = localStorage.getItem('currentTheme');

if (currentTheme) {
    body.classList.add("d_theme");
    circle.classList.add("on__theme");
}

themeBtn.addEventListener('click', () => {
    body.classList.toggle("d_theme");
    circle.classList.toggle("on__theme");

    if (body.classList.contains("d_theme") || circle.classList.contains("on__theme")) {
        localStorage.setItem('currentTheme', 'themeActive');
    }
        else {
            localStorage.removeItem('currentTheme');
        }
});
// End Theme



// Start Read More
var readMeMore = false;

readBtn.addEventListener('click', () => {
    if (!readMeMore) {
        readMore.style.display = "initial";
        readBtn.innerHTML = "Read Less";

        readMeMore = true;
    }
        else {
            readMore.style.display = "none";
            readBtn.innerHTML = "Read More";

            readMeMore = false;
        }
});
// End Read More



// Start NavBar
window.addEventListener('scroll', () => {
    let navBar = document.querySelector("nav");
    let windowPosition = window.scrollY > 100;

    navBar.classList.toggle("scroll__active", windowPosition);
})
// End Navbar