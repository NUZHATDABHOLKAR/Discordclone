function togglecontent() {
    var content = document.getElementById("hamburger-content");
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}