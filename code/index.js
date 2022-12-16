//Selecting DOM Elements
const qrImage = document.querySelector("#qrImage");
const generateQR = document.querySelector("#generateQR");
const download = document.querySelector("#download");
const downloadBox = document.querySelector("#downloadBox");
const inputLink = document.querySelector("#inputLink");

generateQR.addEventListener("click", generateQRCode);

function generateQRCode(){
    const linkValue = inputLink.value;
    fetch(`https://api.qrserver.com/v1/create-qr-code/?data=${linkValue}&size=100x100`)
    .then((res) => {
        qrImage.src = res.url;
        qrImage.classList.remove("hidden");
        download.href = res.url;
        downloadBox.classList.remove("hidden");
    })
    .catch(err => console.log(err))
}