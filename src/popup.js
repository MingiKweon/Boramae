function setCookie(name, value, expires) {
  var todayDate = new Date();
  todayDate.setDate(todayDate.getDate() + expires);
  document.cookie =
    name + "=" + value + "; path=/; expires=" + todayDate.toUTCString() + ";";
}

function closePopup() {
  if (document.pop.checkbox.checked) {
    setCookie("maindiv", "done", 1);
  }
  window.close();
}
