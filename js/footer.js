document.addEventListener("DOMContentLoaded", function() {
   fetch("/htmlparam/footer.html")
        .then(response => response.text())
        .then(data => document.querySelector("footer").insertAdjacentHTML = data);
});
