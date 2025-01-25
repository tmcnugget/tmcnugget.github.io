// Select the main element
const mainLink = document.getElementById("venix-link");

// Add a click event listener
mainLink.addEventListener("click", () => {
    window.location.href = "/projects/venix.html";
});

// Add keyboard accessibility (trigger on Enter key press)
mainLink.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        window.location.href = "/projects/venix.html";
    }
});
