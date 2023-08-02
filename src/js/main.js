/* Scroll Function */
window.addEventListener("scroll", function() {
    var nav = this.document.querySelector("nav");
    nav.classList.toggle("bg-slate-800", window.scrollY > 0)
});

/* Typed EN Function */
document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed("#typed", {
        strings: ['Front-end Developer', 'Salesforce Experience Cloud', 'Salesforce Marketing Cloud'],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true
    });
});

/* Typed PT-BR Function */
document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed("#typed-pt", {
        strings: ['Desenvolvedor Front-end', 'Salesforce Experience Cloud', 'Salesforce Marketing Cloud'],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true
    });
});