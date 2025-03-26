let NRTABS = 3;
cities = ["London", "Paris", "Tokyo"]; 
citiesInfo = ["London is the capital city of England.", "Paris is the capital of France.", "Tokyo is the capital of Japan."]
function loadTabs() {
  let tabContainer = document.getElementById("tabContainer");
  let contentContainer = document.getElementById("contentContainer")
  for (let i = 0; i < NRTABS; i++) {
      let tabLinkDiv = document.createElement("button");
      tabLinkDiv.className = "tablinks";
      tabLinkDiv.setAttribute("onclick", "openCity(event, \"" + cities[i] + "\")");
      if(i == 0){
        tabLinkDiv.id = "defaultOpen";
      }
      tabLinkDiv.innerHTML = cities[i];

      let contentDiv = document.createElement("div");
      contentDiv.className = "tabcontent";
      contentDiv.setAttribute("id", cities[i])
      contentDiv.innerHTML = "<h3>" + cities[i] + "</h3><p>" + citiesInfo[i] + "</p>";

      tabContainer.appendChild(tabLinkDiv);
      contentContainer.appendChild(contentDiv); 
     }

}
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
loadTabs();
document.getElementById("defaultOpen").click();