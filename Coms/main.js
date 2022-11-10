var modal = document.getElementById('Login-form');
var modal1 = document.querySelector("#Zoom-in")

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}