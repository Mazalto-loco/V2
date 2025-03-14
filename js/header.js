document.addEventListener("DOMContentLoaded", function() {
    fetch("/htmlparam/header.html")
        .then(response => response.text())
        .then(data =>
             document.querySelector("header").insertAdjacentHTML = data);

});


// Fonction pour définir le titre selon la page actuelle
function getPageTitle() {
    const pageTitles = {
        "/index.html": "Accueil - Lambert Lenack",
        "/html/agence.html": "À Propos - Lambert Lenack",
        "/html/contact.html": "Contact - Lambert Lenack",
        "/html/urbanisme.html": "URBANISME - LAMBERT.LENACK",
        "/html/logements.html": "LOGEMENTS - LAMBERT.LENACK",
        "html/equipements.html": "EQUIPEMENTS - LAMBERT.LENACK"?
        "/html/actualite.html": "ACTUALITE - LAMBERT.LENACK",
    };

    const path = window.location.pathname.split("/").pop(); // Récupère le nom du fichier actuel
    return pageTitles[path] || "Lambert Lenack"; // Si non trouvé, titre par défaut
}
