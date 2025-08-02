function generateQRCode() {
  const qrContainer = document.getElementById("qrcode");
  const text = document.getElementById("text-input").value;

  if (!text) {
    alert("Please enter some text or a URL.");
    return;
  }

  qrContainer.innerHTML = ""; // clear previous QR

  QRCode.toCanvas(text, { width: 200 }, function (err, canvas) {
    if (err) {
      console.error(err);
      alert("Failed to generate QR code.");
      return;
    }
    qrContainer.appendChild(canvas);
  });
}
