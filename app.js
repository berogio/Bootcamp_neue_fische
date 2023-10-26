function toggleSunColors() {
    let sunColorsList = document.querySelectorAll("ul[type='square'] li");
    sunColorsList.forEach(function(element) {
        if (element.style.color === "black") {
            element.style.color = "";
        } else {
            element.style.color = "black";
        }
    });
}
document.getElementsByClassName("colorChangeBtn")[0].addEventListener("click", toggleSunColors);