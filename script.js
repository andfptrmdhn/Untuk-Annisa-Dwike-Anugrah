// script.js
document.getElementById('surpriseButton').addEventListener('click', function () {
  const message = document.getElementById('surpriseMessage');
  message.classList.toggle('hidden');
});
// script.js
document.getElementById('surpriseButton').addEventListener('click', function() {
  // Mengubah visibilitas elemen surpriseMessage
  document.getElementById('surpriseMessage').classList.remove('hidden');
  // Mengubah teks tombol menjadi "Terima Kasih"
  document.getElementById('surpriseButton').innerText = "Annisa, engkau adalah alasan mengapa setiap hari terasa seperti puisi. 🌹";
});