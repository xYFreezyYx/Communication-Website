var modal = document.getElementById('Login-form');
var modal1 = document.querySelector("#Zoom-in");

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }

  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}

let info = document.querySelector(".Info");
let files = document.querySelector(".All-Files");
let Flist = document.querySelector(".F-List");

function Prgoramming(){
  info.style.display = "none";
  files.style.display = "flex";
}

function FriendsList(){
  if(Flist.id == "Closed"){
    Flist.id = "Open";
    Flist.style.marginRight = "0px";
  }else if(Flist.id == "Open"){
    Flist.id = "Closed";
    Flist.style.marginRight = "-250px";
  }
}