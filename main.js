// button Up
let btn = document.querySelector("#button-up");

window.onscroll = function () {
    if(window.scrollY >= 700) {
        btn.style.display = "block";
    }else
    {
        btn.style.display = "none";
    }
}
btn.addEventListener("click", function () {
    const scrollToTop = () => {
        const currentPosition = window.scrollY;
        if (currentPosition > 0) {
            window.scrollTo(0, currentPosition - 50); // Adjust the scroll speed
            requestAnimationFrame(scrollToTop);
        }
    };
    scrollToTop();
});
// button Up
// click ul
let ul = document.querySelector("ul");
document.addEventListener("click" ,function (e) { 
    if(e.target.classList.contains("click"))
        ul.style.display = "block";
    else 
        ul.style.display = "none"; 
})
// click ul