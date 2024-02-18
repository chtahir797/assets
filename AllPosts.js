function toggleAsideMenu() {
    var asideMenu = document.getElementById("asideMenu");
    asideMenu.style.display = asideMenu.style.display === "block" ? "none" : "block";
  }
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


