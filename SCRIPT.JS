function upDate(previewPic) {
    // Sélectionner l'élément avec l'id "image"
    let imageDiv = document.getElementById("image");

    // Mettre à jour le texte avec l'attribut alt de l'image
    imageDiv.innerText = previewPic.alt;

    // Mettre à jour l'image de fond avec l'attribut src de l'image
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
}

function undo() {
    // Sélectionner l'élément avec l'id "image"
    let imageDiv = document.getElementById("image");

    // Réinitialiser l'image de fond
    imageDiv.style.backgroundImage = "";

    // Réinitialiser le texte
    imageDiv.innerText = "Hover over an image below to display here.";
}
