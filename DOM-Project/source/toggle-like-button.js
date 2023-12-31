// Get a reference to the like button element and the icon element
    const likeButton = document.getElementById("like-button");
   // Get all "like" buttons by their class name
const likeButtons = document.querySelectorAll(".like-button");

// Initialize a variable to track the like state for each item
const isLiked = Array.from(likeButtons).fill(false);

// Function to toggle the like state and update the button icon
function toggleLike(index) {
    return function () {
        const likeButton = likeButtons[index];
        const likeIcon = likeButton.querySelector("i");

        if (isLiked[index]) {
            likeIcon.classList.remove("fas");
            likeIcon.classList.add("far");
            likeIcon.style.color = ""; // Remove the liked icon color
        } else {
            likeIcon.classList.remove("far");
            likeIcon.classList.add("fas");
            likeIcon.style.color = "#ff0000"; // Set the liked icon color to red
        }
        isLiked[index] = !isLiked[index];
    };
}

// Add a click event listener to each "like" button
likeButtons.forEach((button, index) => {
    button.addEventListener("click", toggleLike(index));
});