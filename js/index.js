// JavaScript Typewriter Effect
    document.addEventListener("DOMContentLoaded", function () {
    const message = "Hi, I'm Stephan Gani-Ikilama, a Cyber Security Analyst and a software engineer focused on building secure and user-friendly applications";
    const speed = 50; // Typing speed in milliseconds
    let i = 0;

    function typeWriter() {
        if (i < message.length) {
        document.getElementById("typewriter").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});

//I want to dynamicaly load my header and footer with js, instead of having the code repeated in all my html files
// Load header
fetch('header.html')
.then(response => response.text())
.then(data => document.getElementById('header').innerHTML = data);

// Load footer
fetch('footer.html')
.then(response => response.text())
.then(data => document.getElementById('footer').innerHTML = data);