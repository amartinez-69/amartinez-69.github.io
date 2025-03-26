var acc = document.getElementsByClassName("accordion");
var i;

let NRIMAGES = 3;
images = ["../images/image1.jpeg", "../images/image2.webp", "../images/triumphant-success-reaching-new-heights-of-achievement-ai-generative-photo.jpg"]

function loadAccordion() {
  let accordionContainer = document.getElementById("accordionContainer");

  for (let i = 0; i < NRIMAGES; i++) {
      let accordionDiv = document.createElement("button");
      accordionDiv.className = "accordion";
      accordionDiv.innerHTML = "Download Image " + (i+1);

      let panelDiv = document.createElement("div");
      panelDiv.className = "panel";
      panelDiv.innerHTML = "<p><a href="+ images[i] + ">Image" + (i+1)+ "</a></p>"

      accordionContainer.appendChild(accordionDiv);
      accordionContainer.appendChild(panelDiv);  
    }
}

function toggleFunction() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }

loadAccordion();
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", toggleFunction);
}