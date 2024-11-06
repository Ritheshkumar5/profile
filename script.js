// Typing Animation for "I'm a Web Developer"
const text = "I'm a Web Developer";
let index = 0;

function typeAnimation() {
    if (index < text.length) {
        document.getElementById("dynamic-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeAnimation, 150); // Adjust the speed here (in milliseconds)
    }
}

// Start the typing animation when the page loads
window.onload = typeAnimation;

// Smooth Scroll to Section on Navigation Link Click
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent the default anchor behavior
        const sectionId = this.getAttribute("href").substring(1); // Get the section ID
        const section = document.getElementById(sectionId);

        // Scroll to the section smoothly
        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        // Highlight the active link
        document.querySelectorAll("nav a").forEach(link => link.classList.remove("active"));
        this.classList.add("active");
    });
});

// Download CV Button Functionality
function ViewCV() {
    // Replace 'path/to/your/CV.pdf' with the actual path to your CV file
    const cvPath = "C:\Users\HP\Desktop\rithesh\professional resume.pdf";
    window.location.href = cvPath;
}

// Assign the downloadCV function to the download button
document.querySelector(".btn-secondary").addEventListener("click", downloadCV);
