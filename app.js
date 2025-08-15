
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function userLogin() {
  let u = document.getElementById("username").value.trim();
  let p = document.getElementById("password").value.trim();
  if(u && p) {
    showScreen('screen-login');
  } else {
    alert("Please enter username and password");
  }
}

function startScan(type) {
  let status = document.getElementById("scan-status");
  status.textContent = "Scanning " + type + "...";
  setTimeout(() => {
    status.textContent = type.charAt(0).toUpperCase() + type.slice(1) + " verified!";
    setTimeout(() => { showScreen('screen-delivery'); }, 1000);
  }, 2000);
}

function gotoAction() {
  showScreen('screen-action');
}

function setStatus(msg) {
  document.getElementById("status").textContent = msg;
}
