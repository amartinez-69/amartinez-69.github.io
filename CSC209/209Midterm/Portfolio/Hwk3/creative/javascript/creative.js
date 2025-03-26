function clickHere() {
    var content = document.getElementById("click");
    var newBtnStuff = document.getElementById("newBtn");
    var hiddenImage = document.getElementById("hiddenImage");
    var hideImage = document.getElementById("blank");

    if (content.style.display === "none") {
        newBtnStuff.innerHTML = "Hide Website";
        content.style.display = "block";
        hideImage.style.display = "none";
        hiddenImage.style.display = "none";

    } else {
        newBtnStuff.innerHTML = "Display Website";
        content.style.display = "none";
        hideImage.style.display = "block";
        hiddenImage.style.display = "block";
    }
}
function myFunction() {
    var hideText = document.getElementById("hide");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (hideText.style.display === "none") {
        btnText.innerHTML = "Read Me";
        hideText.style.display = "inline";
        moreText.style.display = "none";
    } else {
        hideText.style.display = "none";
        btnText.innerHTML = "Hide";
        moreText.style.display = "inline";
    } 
    
}