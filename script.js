function generateQR() {
    var name = document.getElementById('nameInput').value;
    
    if (name.trim() === '') {
        alert('Please enter your name.');
        return;
    }

    var qrCodeDiv = document.getElementById('qrCode');
    qrCodeDiv.innerHTML = ''; // Clear previous QR code

    var qr = new QRCode(qrCodeDiv, {
        text: name,
        width: 128,
        height: 128,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
}
