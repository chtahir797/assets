//  // Function to parse query parameters from URL
//  function getParameterByName(name, url) {
//     if (!url) url = window.location.href;
//     name = name.replace(/[\[\]]/g, "\\$&");
//     var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
//       results = regex.exec(url);
//     if (!results) return null;
//     if (!results[2]) return "";
//     return decodeURIComponent(results[2].replace(/\+/g, " "));
//   }

//   // Retrieve post ID from query parameter
//   var postId = getParameterByName("id");

//   // Fetch post details using the retrieved ID
//   fetch(
//     `https://www.googleapis.com/blogger/v3/blogs/7594117796358667017/posts/${postId}?key=AIzaSyDSdTJ0Y1-zP4kO7R08hLNTLTySvuEjGf0`
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       // Display post details
//       var postDetailsContainer = document.getElementById("postDetails");
//       postDetailsContainer.innerHTML = `
//                 <h2>${data.title}</h2>
//                 <p>${data.content || "No content available"}</p>
//             `;
//     })
//     .catch((error) => console.error("Error fetching post details:", error));



// Function to parse query parameters from URL
// function getParameterByName(name, url) {
//   if (!url) url = window.location.href;
//   name = name.replace(/[\[\]]/g, "\\$&");
//   var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
//     results = regex.exec(url);
//   if (!results) return null;
//   if (!results[2]) return "";
//   return decodeURIComponent(results[2].replace(/\+/g, " "));
// }

// // Retrieve post ID from query parameter
// var postId = getParameterByName("id");

// // Fetch post details using the retrieved ID
// fetch(
//   `https://www.googleapis.com/blogger/v3/blogs/7594117796358667017/posts/${postId}?key=AIzaSyDSdTJ0Y1-zP4kO7R08hLNTLTySvuEjGf0`
// )
//   .then((response) => response.json())
//   .then((data) => {
//     // Display post details
//     var postDetailsContainer = document.getElementById("postDetails");
//     postDetailsContainer.innerHTML = `
//               <h2>${data.title}</h2>
//               <div class="post-meta">
//                 <p>Date: ${new Date(data.published).toLocaleDateString()}</p>
//                 <p>Tags: ${data.labels.join(", ")}</p>
//               </div>
//               <div class="post-content">${data.content || "No content available"}</div>
//           `;
//   })
//   .catch((error) => console.error("Error fetching post details:", error));







//   // Function to fetch top posts
// function fetchTopPosts() {
//   fetch("https://www.googleapis.com/blogger/v3/blogs/7594117796358667017/posts?orderBy=published&key=AIzaSyDSdTJ0Y1-zP4kO7R08hLNTLTySvuEjGf0&maxResults=3")
//     .then((response) => response.json())
//     .then((data) => {
//       displayPosts("Top Posts", data.items);
//     })
//     .catch((error) => console.error("Error fetching top posts:", error));
// }

// // Function to fetch recent posts
// function fetchRecentPosts() {
//   fetch("https://www.googleapis.com/blogger/v3/blogs/7594117796358667017/posts?orderBy=published&key=AIzaSyDSdTJ0Y1-zP4kO7R08hLNTLTySvuEjGf0&maxResults=3")
//     .then((response) => response.json())
//     .then((data) => {
//       displayPosts("Recent Posts", data.items);
//     })
//     .catch((error) => console.error("Error fetching recent posts:", error));
// }

// // Function to fetch popular posts
// function fetchPopularPosts() {
//   fetch("https://www.googleapis.com/blogger/v3/blogs/7594117796358667017/posts?orderBy=viewCount&key=AIzaSyDSdTJ0Y1-zP4kO7R08hLNTLTySvuEjGf0&maxResults=3")
//     .then((response) => response.json())
//     .then((data) => {
//       displayPosts("Popular Posts", data.items);
//     })
//     .catch((error) => console.error("Error fetching popular posts:", error));
// }

// // Function to display posts
// // function displayPosts(title, posts) {
// //   var postDetailsContainer = document.getElementById("container2");
// //   var html = `<h2>${title}</h2>`;
// //   posts.forEach((post) => {
// //     console.log(post.content)
// //     html += `
// //       <div class="container2-posts">
// //         <h3>${post.title}</h3>
// //         <p>${post.content || "No content available"}</p>
// //       </div>`;
// //   });
// //   postDetailsContainer.innerHTML += html;
// // }
// // function displayPosts(title, posts) {
// //   var postDetailsContainer = document.getElementById("container2");
// //   var html = `<h2>${title}</h2>`;
// //   posts.forEach((post) => {
// //     var postContent = document.createElement("div");
// //     postContent.classList.add("container2-posts");

// //     // Extracting the first paragraph of content
// //     var firstParagraph = post.content.match(/<p>(.*?)<\/p>/);
// //     var truncatedContent = firstParagraph ? firstParagraph[1] : "No content available";

// //     postContent.innerHTML = `
// //       <h3>${post.title}</h3>
// //       <div class="post-image">
// //         ${getPostImage(post.content)}
// //       </div>
// //       <p>${truncatedContent}</p>
// //     `;
// //     postDetailsContainer.appendChild(postContent);
// //   });
// // }
// function displayPosts(title, posts, containerId) {
//   var postDetailsContainer = document.getElementById(containerId);
//   var html = `<h2>${title}</h2>`;
//   posts.forEach((post) => {
//     var postContent = document.createElement("div");
//     postContent.classList.add("container2-posts");

//     // Extracting the first paragraph of content
//     var firstParagraph = post.content.match(/<p>(.*?)<\/p>/);
//     var truncatedContent = firstParagraph ? firstParagraph[1] : "No content available";

//     postContent.innerHTML = `
//       <h3>${post.title}</h3>
//       <div class="post-image">
//         ${getPostImage(post.content)}
//       </div>
//       <p>${truncatedContent}</p>
//     `;
//     postDetailsContainer.appendChild(postContent);
//   });
// }

// Call the function for popular, recent, and top posts
// displayPosts("Popular Posts", fetchPopularPosts(), "popularPosts");
// displayPosts("Recent Posts", fetchRecentPosts(), "recentPosts");
// displayPosts("Top Posts", fetchTopPosts(), "topPosts");

// Function to extract and return the image element from post content
// function getPostImage(content) {
//   var imgElement = document.createElement("div");
//   var parser = new DOMParser();
//   var doc = parser.parseFromString(content, "text/html");
//   var img = doc.querySelector("img");
//   if (img) {
//     imgElement.innerHTML = img.outerHTML;
//   }
//   return imgElement.innerHTML;
// }


// fetchTopPosts();
// fetchRecentPosts();
// fetchPopularPosts();





















// Function to parse query parameters from URL
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Retrieve post ID from query parameter
var postId = getParameterByName("id");

// Fetch post details using the retrieved ID
fetch(`https://www.googleapis.com/blogger/v3/blogs/7594117796358667017/posts/${postId}?key=AIzaSyDSdTJ0Y1-zP4kO7R08hLNTLTySvuEjGf0`)
  .then((response) => response.json())
  .then((data) => {
    // Display post details
    var postDetailsContainer = document.getElementById("postDetails");
    postDetailsContainer.innerHTML = `
              <h2>${data.title}</h2>
              <div class="post-meta">
                <p>Date: ${new Date(data.published).toLocaleDateString()}</p>
                <p>Tags: ${data.labels.join(", ")}</p>
              </div>
              <div class="post-content">${data.content || "No content available"}</div>
          `;
  })
  .catch((error) => console.error("Error fetching post details:", error));


// Function to fetch top posts
function fetchTopPosts() {
  return fetch("https://www.googleapis.com/blogger/v3/blogs/7594117796358667017/posts?orderBy=published&key=AIzaSyDSdTJ0Y1-zP4kO7R08hLNTLTySvuEjGf0&maxResults=3")
    .then((response) => response.json());
}

// Function to fetch recent posts
function fetchRecentPosts() {
  return fetch("https://www.googleapis.com/blogger/v3/blogs/7594117796358667017/posts?orderBy=published&key=AIzaSyDSdTJ0Y1-zP4kO7R08hLNTLTySvuEjGf0&maxResults=3")
    .then((response) => response.json());
}

// Function to display posts
function displayPosts(title, posts, containerId) {
  var postDetailsContainer = document.getElementById(containerId);
  var html = `<h2>${title}</h2>`;
  posts.forEach((post) => {
    var postContent = document.createElement("div");
    postContent.classList.add("container2-posts");

    // Extracting the first paragraph of content
    var firstParagraph = post.content.match(/<p>(.*?)<\/p>/);
    var truncatedContent = firstParagraph ? firstParagraph[1] : "No content available";

    postContent.innerHTML = `
      <h3>${post.title}</h3>
      <div class="post-image">
        ${getPostImage(post.content)}
      </div>
      <p>${truncatedContent}</p>
    `;
    postDetailsContainer.appendChild(postContent);
  });
}

// Call the function for popular, recent, and top posts
fetchTopPosts()
  .then((data) => displayPosts("Top Posts", data.items, "topPosts"))
  .catch((error) => console.error("Error fetching top posts:", error));

fetchRecentPosts()
  .then((data) => displayPosts("Recent Posts", data.items, "recentPosts"))
  .catch((error) => console.error("Error fetching recent posts:", error));

// Function to extract and return the image element from post content
function getPostImage(content) {
  var imgElement = document.createElement("div");
  var parser = new DOMParser();
  var doc = parser.parseFromString(content, "text/html");
  var img = doc.querySelector("img");
  if (img) {
    imgElement.innerHTML = img.outerHTML;
  }
  return imgElement.innerHTML;
}

