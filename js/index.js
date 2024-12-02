// JavaScript Typewriter Effect for welcome message
    document.addEventListener("DOMContentLoaded", function () {
        //todo, make new line
    const message = "Hi, I'm Stephan Gani-Ikilama, a Cyber Security Analyst and a software engineer focused on building secure and user-friendly applications! I have experience in web development, cyber security, consulting, and networking(CISCO). I am passionate about learning new technologies and solving problems. I am currently open to opportunities to work in a challenging environment.";
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

// Re-typewriter for about me page
document.addEventListener("DOMContentLoaded", function () {
    const aboutMessage = "Without being repetitive and boring, here are some things to know about me that havent been mentioned yet:";
    const aboutSpeed = 50; // Typing speed in milliseconds
    let j = 0;

    function aboutTypeWriter() {
        if (j < aboutMessage.length) {
            document.getElementById("aboutTypewriter").innerHTML += aboutMessage.charAt(j);
            j++;
            setTimeout(aboutTypeWriter, aboutSpeed);
        }
    }

    aboutTypeWriter();
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



// DYNAMIC JOB FILLING
const experienceData = [
    {
        company: "Tech Corp",
        url: "https://techcorp.example.com",
        time: "Jan 2020 - Present",
        position: "Software Engineer",
    },
    {
        company: "Web Solutions",
        url: "https://websolutions.example.com",
        time: "May 2018 - Dec 2019",
        position: "Frontend Developer",
    },
    {
        company: "Tech Corp",
        url: "https://techcorp.example.com",
        time: "Jan 2020 - Present",
        position: "Software Engineer",
    },
    {
        company: "Web Solutions",
        url: "https://websolutions.example.com",
        time: "May 2018 - Dec 2019",
        position: "Frontend Developer",
    },
    ];
  
  // Reference the jobs container
  const jobsContainer = document.querySelector('.jobs');
  
  // Generate HTML with template literals
  experienceData.forEach(job => {
    const jobHTML = `
      <div class="job">
        <div class="time-place">
          <div class="job__company">
            <a href="${job.url}" target="_blank">${job.company}</a>
          </div>
          <div class="job__time">${job.time}</div>
        </div>
        <div class="job__position">${job.position}</div>
      </div>
    `;
    jobsContainer.innerHTML += jobHTML; // Append HTML
  });
  
  // Set the resume link dynamically (if needed)
  document.querySelector('.arrow-link').href = '/path-to-resume.pdf';
  