

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");

}

document.addEventListener('DOMContentLoaded', function() {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var submit = document.getElementById('submit');
  
    function checkForm() {
      if (name.value && email.value) {
        submit.disabled = false;
      } else {
        submit.disabled = true;
      }
    }
  
    name.addEventListener('input', checkForm);
    email.addEventListener('input', checkForm);
  
    document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault();
      console.log(`Name: ${name.value}, Email: ${email.value}, Message: ${message.value}`);
      alert(`Name: ${name.value}\nEmail: ${email.value}\nMessage: ${message.value}`);
    });
});
  
  
