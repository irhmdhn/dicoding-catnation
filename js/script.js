const btnOpenNav = document.getElementById("toggle-nav");
const btnCloseNav = document.getElementById("close-nav");
const navigation = document.querySelector("nav.navigation");

btnOpenNav.addEventListener("click", function () {
  navigation.style.right = 0;
});
btnCloseNav.addEventListener("click", function () {
  navigation.style.right = "-200px";
});
