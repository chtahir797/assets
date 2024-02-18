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
  fetch(
    `https://www.googleapis.com/blogger/v3/blogs/7594117796358667017/posts/${postId}?key=AIzaSyDSdTJ0Y1-zP4kO7R08hLNTLTySvuEjGf0`
  )
    .then((response) => response.json())
    .then((data) => {
      // Display post details
      var postDetailsContainer = document.getElementById("postDetails");
      postDetailsContainer.innerHTML = `
                <h2>${data.title}</h2>
                <p>${data.content || "No content available"}</p>
            `;
    })
    .catch((error) => console.error("Error fetching post details:", error));