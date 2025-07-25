function toggleTheme() {
  document.body.classList.toggle("light-mode");
  document.body.classList.toggle("dark-mode");

  var icon = document.getElementById("modeIcon");
  if (document.body.classList.contains("dark-mode")) {
    icon.src = "./resources/icons/light_mode.png";
  } else if (document.body.classList.contains("light-mode")) {
    icon.src = "./resources/icons/darkmode.png";
  }
}
// FOR UL
function toggleList() {
  var list = document.getElementById("myList");
  if (list.style.display === "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
}

function toggleList1() {
  var list = document.getElementById("myList1");
  if (list.style.display === "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
}
function toggleList2() {
  var list = document.getElementById("myList2");
  if (list.style.display === "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
}
