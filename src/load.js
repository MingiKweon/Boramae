window.addEventListener("load", function () {
  cookieData = document.cookie;
  if (cookieData.indexOf("maindiv=done") < 0) {
    window.open("./popup.html", "_blank", "width=300px, height=300px");
  }
});

// function openPopup() {
//   cookieData = document.cookie;
//   if (cookieData.indexOf("maindiv=done") < 0) {
//     window.open("./popup.html", "_blank", "width=300px, height=300px");
//   }
// }
