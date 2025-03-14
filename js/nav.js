document.addEventListener("DOMContentLoaded", function() {
    fetch("/htmlparam/nav.html")
        .then(response => response.text())
        .then(data =>
             document.querySelector("nav").insertAdjacentHTML = data);

});

