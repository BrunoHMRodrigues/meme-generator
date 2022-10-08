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
         sectionPreview.src = uploadedImage;
     });
     getImage.readAsDataURL(this.files[0]);    
}
buttonImage.addEventListener("change", insertImagePreview);

const buttonFire = document.getElementById("fire");

function borderFire (event) {
    const memeDisplay = document.getElementById("meme-image-container");
    
    memeDisplay.className = "fire";
}
buttonFire.addEventListener("click", borderFire);

const buttonWater = document.getElementById("water");

function borderWater (event) {
    const memeDisplay = document.getElementById("meme-image-container");
    
    memeDisplay.className = "water";
}
buttonWater.addEventListener("click", borderWater);

const buttonEarth = document.getElementById("earth");

function borderEarth (event) {
    const memeDisplay = document.getElementById("meme-image-container");

    memeDisplay.className = "earth";
}
buttonEarth.addEventListener("click", borderEarth);

const imagesMemes = document.querySelector("#section-memes");

function getMeme (event) {
    const getMeme = event.target.src;
    const sectionPreview = document.getElementById("meme-image");

    sectionPreview.src = getMeme;
}
imagesMemes.addEventListener("click", getMeme);