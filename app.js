function runApp() {
  //   const queryString = window.location.search;
  //   const urlParams = new URLSearchParams(queryString);
  //   const user = urlParams.get("user");
  const user = getCookie("user");
  if (user != "") {
    document.getElementById("sign_in").style.display = "none";
    document.getElementById("sign_up").style.display = "none";
    document.getElementById("logout").style.display = "block";
  }

  //   if (buggy === true) {
  //     document.getElementById("bgwidget").style.display = "inline";
  //     document.getElementById("css").href = "buggy.css";
  //   }
}

let exdays = 30; // cookie expiration in days

function login(user, password) {
  setCookie("user", user, exdays);
  setCookie("password", password, exdays);
}

function logout() {
  document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "password=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  window.location.reload();
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// function checkCookie() {
//   let user = getCookie("username");
//   if (user != "") {
//     alert("Welcome again " + user);
//   } else {
//     user = prompt("Please enter your name:", "");
//     if (user != "" && user != null) {
//       setCookie("username", user, 30);
//     }
//   }
// }
