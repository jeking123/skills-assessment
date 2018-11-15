function contactSwitch () {
  var prop = document.getElementById("contactType").value;
  var contactPhones = document.getElementsByClassName("phone");
  var contactEmail = document.getElementsByClassName("email");
  console.log(contactPhones);
  switch (prop) {
    case "email": 
      for (var i = 0; i < contactPhones.length; i++) {
        contactPhones[i].classList.add('hidden')
      }
      for (var i = 0; i < contactEmail.length; i++) {
        contactEmail[i].classList.remove('hidden')
      }
      // contactPhones.classList.add("hidden");
      // contactEmail.classList.remove("hidden");
      break;
    case "phone": 
      for (var i = 0; i < contactPhones.length; i++) {
        contactPhones[i].classList.remove('hidden')
      }
      for (var i = 0; i < contactEmail.length; i++) {
        contactEmail[i].classList.add('hidden')
      }
      // contactPhones.classList.remove("hidden");
      // contactEmail.classList.add("hidden");
  }
}

function initOverlay() {
  document.getElementById('overlay').classList.add('is-active');
}
function deactOverlay() {
  document.getElementById('overlay').classList.remove('is-active');
}