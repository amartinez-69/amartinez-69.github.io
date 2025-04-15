<html>
<body>


<button type="button" onclick="loadDoc()">Update</button>
<div id="demo">
</div>

<script>
function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML =
    this.responseText;
  }
  xhttp.open("GET", "./php/admin.php");
  xhttp.send();
}
</script>


</body>
</html>