import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import firebaseConfig from './config.js'
//Contact Section




const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore

// Handle form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    // Change button text to "Sending Message"
    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.textContent = "Sending Message 💌";
    var formData = {
      name: this.elements.name.value,
      email: this.elements.email.value,
      message: this.elements.message.value,
    };

    addDoc(collection(db, "contact"), {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      timestamp: serverTimestamp(),
    })
      .then(function () {
        // Reset form after submission
        document.getElementById("contact-form").reset();
        alert("Message stored successfully!");
        // Change button text back to "Send Message"
        submitButton.textContent = "Send Message 💌";
      })
      .catch(function (error) {
        console.error("Error submitting feedback:", error);
        // Show error message
        alert("Error storing message. Please try again later.");
        // Change button text back to "Send Message"
        submitButton.textContent = "Send Message 💌";
      });
  });


// Function to start chat
function startChat() {
  window.open("https://wa.me/+923476947000");
}

//Project Section
document.addEventListener("DOMContentLoaded", function () {
  const CardData = [
    {
      id: 1,
      title: "Todo List App",
      tags: ["ReactJS"],
      demo: "See Demo",
      image:
        "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      videoUrl: "https://www.youtube.com/embed/LqE0vrZCS_4",
      projectUrl: "https://www.youtube.com/embed/LqE0vrZCS_4",
    },
    {
      id: 2,
      title: "Todo List App",
      tags: ["ReactJS"],
      demo: "See Demo",
      image:
        "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      videoUrl: "https://www.youtube.com/embed/LqE0vrZCS_4",
      projectUrl: "https://www.youtube.com/embed/LqE0vrZCS_4",
    },
    {
      id: 3,
      title: "Todo List App",
      tags: ["ReactJS"],
      demo: "See Demo",
      image:
        "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      videoUrl: "https://www.youtube.com/embed/LqE0vrZCS_4",
      projectUrl: "https://www.youtube.com/embed/LqE0vrZCS_4",
    },
  ];

  const projectParent = document.querySelector(".project");

  CardData.forEach((card) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-cards";
    projectCard.innerHTML = `
            <div class="image">
                <img src="${card.image}" alt="Project Picture">
            </div>
            <div class="titleandtags">
                <div class="title">
                    <h4>${card.title}</h4>
                </div>
                <div class="tags">
                    ${card.tags.map((tag) => `<p>${tag}</p>`).join("")}
                </div>
            </div>
            <div class="play">
                <div class="demo">
                    <p>${card.demo}</p>
                </div>
                <div class="play-icon">
                    <img src="../assets/play.svg" alt="Play Icon" data-url="${
                      card.videoUrl
                    }">
                </div>
            </div>
        `;
    projectParent.appendChild(projectCard);
  });

  const modal = document.getElementById("modal");
  const close = document.getElementById("close");
  const videoFrame = document.getElementById("video-frame");
  const playIcons = document.querySelectorAll(".play-icon img");
  const closeBtn = document.querySelector(".close");

  playIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      const videoUrl = this.getAttribute("data-url");
      videoFrame.src = videoUrl;
      modal.style.display = "block";
      close.style.display = "inline-block";
    });
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
    videoFrame.src = "";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";

      videoFrame.src = "";
    }
  });
});

//Footer Section
document.addEventListener("DOMContentLoaded", function () {
  const currentYear = new Date().getFullYear();
  document.getElementById("current-year").textContent = currentYear;
});
