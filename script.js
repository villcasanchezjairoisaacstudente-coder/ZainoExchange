// ZainoExchange - script della home
// Per ogni carosello della pagina
document.querySelectorAll('.carosello').forEach(function (carosello) {
  var pista = carosello.querySelector('.carosello__pista');
  var sx = carosello.querySelector('.carosello__freccia--sx');
  var dx = carosello.querySelector('.carosello__freccia--dx');

  // Scorre dell'80% della larghezza visibile, con animazione morbida
  sx.addEventListener('click', function () {
    pista.scrollBy({ left: -pista.clientWidth * 0.8, behavior: 'smooth' });
  });
  dx.addEventListener('click', function () {
    pista.scrollBy({ left: pista.clientWidth * 0.8, behavior: 'smooth' });
  });
});