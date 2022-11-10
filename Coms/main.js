var modal = document.getElementById('Login-form');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}