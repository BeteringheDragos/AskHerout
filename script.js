function nextPage() {
  window.location.href = "yes.html";
}

function moveButton() {
  var x = Math.random() * (window.innerWidth - document.getElementById('noButton').offsetWidth) - 85;
  var y = Math.random() * (window.innerHeight - document.getElementById('noButton').offsetHeight) - 48;
  document.getElementById('noButton').style.left = `${x}px`;
  document.getElementById('noButton').style.top = `${y}px`;
}

function redirectToWhatsAppPlimbare() {
  var whatsappURL = "https://wa.me/40756932997?text=Da, mi-ar face placere sa iesim la o plimbare!";
  window.location.href = whatsappURL;
}

function redirectToWhatsAppRestaurant() {
  var whatsappURL = "https://wa.me/40756932997?text=Da, as vrea sa iesim la un restaurant!";
  window.location.href = whatsappURL;
}

function redirectToWhatsAppSurprise() {
  var whatsappURL = "https://wa.me/40756932997?text=Surprinde-ma!";
  window.location.href = whatsappURL;
}



