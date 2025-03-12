document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");

    for (let i = 0; i <= 44; i++) {
        let img = document.createElement("img");
        img.src = `all/${i}.png`;
        img.alt = `Gambar ${i}`;
        gallery.appendChild(img);
    }
});

let mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollPosition > 30000) {
        mybutton.style.display = "block";
        mybutton.style.bottom = "3rem";
    } else if (scrollPosition > 20) {
        mybutton.style.display = "block";
        mybutton.style.bottom = "1rem";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
