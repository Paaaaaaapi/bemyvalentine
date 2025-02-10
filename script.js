document.getElementById('change-gif-btn').addEventListener('click', function() {
    // Change the GIF
    document.getElementById('gif').src = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTJiejhta2c4YzV5aHI0bHM1NGhranEzNXg4MGl3em54NXI0Mjc2YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/t1O7EJSUQfgNveFVgd/giphy.gif";

    // Add text below the GIF
    document.getElementById('text-container').innerHTML = "I have got a surprise for you! I'll see you soon.";

    // Hide the button
    this.style.display = "none";
});