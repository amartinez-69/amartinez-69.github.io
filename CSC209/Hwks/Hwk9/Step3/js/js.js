// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function loadDoc(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
    document.getElementById("demo").innerHTML =
    this.responseText;
    }
    xhttp.open("GET", "admin.php");
    xhttp.send();
}

function showUsers(){
    var usersSection = document.getElementById("users");
    usersSection.style.display = "block";
}
