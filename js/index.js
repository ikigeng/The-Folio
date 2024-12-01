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
