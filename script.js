const inputBox = document.getElementById("section-input-text");

function copyText(event) {
    let textPreviewMeme = document.getElementById("meme-text");
    let getTextValue = document.getElementById("text-input").value;

    textPreviewMeme.innerText = getTextValue;
}
inputBox.addEventListener("keyup", copyText);