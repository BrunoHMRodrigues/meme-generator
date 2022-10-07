const inputBox = document.getElementById("section-input-text");

function copyText(event) {
    let textPreviewMeme = document.getElementById("meme-text");
    let getTextValue = document.getElementById("text-input").value;

    textPreviewMeme.innerText = getTextValue;
}
inputBox.addEventListener("keyup", copyText);

const buttonImage = document.getElementById("meme-insert");

function insertImagePreview () {
     const getImage = new FileReader();

     getImage.addEventListener("load", () => {
         const uploadedImage = getImage.result;
         const sectionPreview = document.getElementById("meme-image");
         sectionPreview.style.backgroundImage = `url(${uploadedImage})`;
     });
     getImage.readAsDataURL(this.files[0]);    
}
buttonImage.addEventListener("change", insertImagePreview);
