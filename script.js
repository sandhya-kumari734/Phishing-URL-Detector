function checkURL() {
    let url = document.getElementById("urlInput").value;
    let result = document.getElementById("result");

    if (url.trim() === "") {
        result.innerHTML = "⚠️ Please enter a URL.";
        result.style.color = "orange";
        return;
    }

    let score = 0;
    let reasons = [];

    // Check for IP address
    if (url.match(/https?:\/\/\d{1,3}(\.\d{1,3}){3}/)) {
        score++;
        reasons.push("Uses an IP address instead of a domain.");
    }

    // Check
