// Typing Effect
const text = ["Tech Enthusiast 💻", "C & Python Programmer 👩‍💻", "Creative Thinker 🎨"];
let i = 0, j = 0, currentText = "", isDeleting = false;

function type() {
    const display = document.querySelector(".typing");
    currentText = text[i];

    if (!isDeleting) {
        display.textContent = currentText.substring(0, j++);
        if (j > currentText.length) {
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        }
    } else {
        display.textContent = currentText.substring(0, j--);
        if (j === 0) {
            isDeleting = false;
            i = (i + 1) % text.length;
        }
    }
    setTimeout(type, 100);
}

type();

// Button Message
function showMessage() {
    alert("Thanks for visiting my portfolio 🚀");
}
function goToProjects() {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
}
function downloadResume() {
    alert("Resume download will be available soon 📄");
}