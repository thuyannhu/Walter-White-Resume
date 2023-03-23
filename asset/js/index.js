/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function menuBurger() {
  var x = document.getElementById("liens");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function toggleTheme() {
  var theme = document.getElementsByTagName('link')[0];
  if (theme.getAttribute('href') == 'asset/styles/light_style.css') {
    theme.setAttribute('href', 'asset/styles/dark_style.css');
  } else {
    theme.setAttribute('href', 'asset/styles/light_style.css');
  }
}

function toggleThemeIndex() {
  var theme = document.getElementsByTagName('link')[0];
  if (theme.getAttribute('href') == 'asset/styles/light_index.css') {
    theme.setAttribute('href', 'asset/styles/dark_index.css');
  } else {
    theme.setAttribute('href', 'asset/styles/light_index.css');
  }
}  