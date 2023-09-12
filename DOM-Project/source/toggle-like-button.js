// Get a reference to the like button element and the icon element
const likeButton = document.querySelector(".like-button");
const likeIcon = likeButton.querySelector("i");

// Initialize a variable to track the like state
let isLiked = false;

// Function to toggle the like state and update the button icon
function toggleLike() {
    if (isLiked) {
        likeIcon.classList.remove("fas");
        likeIcon.classList.add("far");
        likeIcon.style.color = ""; // Remove the liked icon color
    } else {
        likeIcon.classList.remove("far");
        likeIcon.classList.add("fas");
        likeIcon.style.color = "#ff0000"; // Set the liked icon color to red
    }
    isLiked = !isLiked;
}

// Add a click event listener to the like button
likeButton.addEventListener("click", toggleLike);