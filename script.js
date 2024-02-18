import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const displayedPosts = [];

function displayPosts(posts) {
  const postLinksContainer = document.getElementById("postLinks");
  postLinksContainer.innerHTML = ""; // Clear previous posts

  posts.forEach((item) => {
    const postCard = document.createElement("div");
    postCard.className = "post-card";

    const imageUrl = item.content.match(/src="(.*?)"/)[1]; // Extract the image URL
    const description = item.content.split(" ").slice(0, 50).join(" "); // Take first 30 words
    const firstParagraph = item.content.match(/<p>(.*?)<\/p>/)[1];
    postCard.innerHTML = `
                <h2>${item.title}</h2>
                <div class="post-image">
                     <img src="${imageUrl}" alt="${item.title}">
                </div>
                <p>${firstParagraph || "Not Found Description"}</p>
            `;
    postCard.onclick = function () {
      viewPostDetails(item);
    };
    postLinksContainer.appendChild(postCard);
  });
}

function viewPostDetails(post) {
  // Open the post in a new page
  window.open(`SinglePost.html?id=${post.id}`, "_blank");
}

function filterPosts() {
  const searchTerm = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const filterValue = document
    .getElementById("filterSelect")
    .value.toLowerCase();
  const dateValue = document.getElementById("dateInput").value;
  const yearValue = document.getElementById("yearInput").value;
  const monthValue = document.getElementById("monthInput").value;

  let filteredPosts = displayedPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm)
  );

  if (filterValue) {
    filteredPosts = filteredPosts.filter((post) =>
      post.labels.some((label) => label.toLowerCase() === filterValue)
    );
  }

  if (dateValue) {
    filteredPosts = filteredPosts.filter((post) => {
      const postDate = new Date(post.published); // Assuming 'published' is the property that holds the post date
      const selectedDate = new Date(dateValue);
      return postDate.toDateString() === selectedDate.toDateString();
    });
  }

  if (yearValue) {
    filteredPosts = filteredPosts.filter((post) => {
      const postDate = new Date(post.published);
      return postDate.getFullYear() === parseInt(yearValue);
    });
  }

  if (monthValue) {
    filteredPosts = filteredPosts.filter((post) => {
      const postDate = new Date(post.published);
      return postDate.getMonth() + 1 === parseInt(monthValue); // Months are zero-based
    });
  }

  displayPosts(filteredPosts);
}

function fetchPosts() {
  fetch(
    "https://www.googleapis.com/blogger/v3/blogs/7594117796358667017/posts?key=AIzaSyDSdTJ0Y1-zP4kO7R08hLNTLTySvuEjGf0"
  )
    .then((response) => response.json())
    .then((data) => {
      displayedPosts.push(...data.items);
      displayPosts(data.items);

      // Populate filter select options
      const filterSelect = document.getElementById("filterSelect");
      const labels = data.items.reduce((acc, curr) => {
        curr.labels.forEach((label) => {
          if (!acc.includes(label)) {
            acc.push(label);
          }
        });
        return acc;
      }, []);

      labels.forEach((label) => {
        const option = document.createElement("option");
        option.value = label.toLowerCase();
        option.textContent = label;
        filterSelect.appendChild(option);
      });
    })
    .catch((error) => console.error("Error fetching posts:", error));
}

document
  .getElementById("searchInput")
  .addEventListener("input", filterPosts);
document
  .getElementById("filterSelect")
  .addEventListener("change", filterPosts);
document
  .getElementById("dateInput")
  .addEventListener("change", filterPosts);
document
  .getElementById("yearInput")
  .addEventListener("input", filterPosts);
document
  .getElementById("monthInput")
  .addEventListener("change", filterPosts);

fetchPosts();



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

//Contact Section

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDocauDFZvF-ID17iythlrKRvJopwkTvnM",
  authDomain: "chtahirportfolio.firebaseapp.com",
  projectId: "chtahirportfolio",
  storageBucket: "chtahirportfolio.appspot.com",
  messagingSenderId: "961935495919",
  appId: "1:961935495919:web:6cd1cd6a7deb6981dd811a",
};

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

//Footer Section
document.addEventListener("DOMContentLoaded", function () {
  const currentYear = new Date().getFullYear();
  document.getElementById("current-year").textContent = currentYear;
});


// Function to toggle responsive navigation
function toggleNavbar() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}


