function responsivo() {
    var x = document.getElementById("menu");
    if (x.className === "menubar") {
        x.className += " responsive";
    } else {
        x.className = "menubar";
    }
}