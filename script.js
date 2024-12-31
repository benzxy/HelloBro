function updateTime() {
  const timeElement = document.getElementById("time");
  const now = new Date();
  const timeString = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  timeElement.textContent = timeString;
}

// Handle search form submission
document
  .getElementById("search-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    const query = document.getElementById("search-bar").value;
    if (query.trim()) {
      const url =
        query.startsWith("http://") || query.startsWith("https://")
          ? query
          : `https://v4-hawktuah23.vercel.app/mastery?auth=a3utb1o`;
      window.open(url, "_blank"); // Open the URL or search in a new tab
    }
  });

// Update time every second
setInterval(updateTime, 1000);
updateTime();
