function closeOverlay() {
    document.getElementById('overlay').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
    document.body.style.overflow = 'auto';
}

document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");
    for (let i = 0; i <= 3; i++) {
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
    if (scrollPosition > 20) {
        mybutton.style.display = "block";
        mybutton.style.bottom = "1rem";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}