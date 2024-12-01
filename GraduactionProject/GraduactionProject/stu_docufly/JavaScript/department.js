document.addEventListener("DOMContentLoaded", function() {
    // Get the logout button using its ID
    const logoutButton = document.getElementById("logoutButton");

    // Add a click event listener to the logout button
    logoutButton.addEventListener("click", function(event) {
        // Prevent the default link behavior
        event.preventDefault();

        // Clear session storage (or local storage if you're using it)
        sessionStorage.clear(); // This will clear all session storage data

        // Optional: Log a message to the console
        console.log("Logging out... Session cleared.");

        // Redirect to the index page after clearing the session
        window.location.href = "../HTML/index.html";
    });
});


