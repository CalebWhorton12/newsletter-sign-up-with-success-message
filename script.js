const contactForm = document.querySelector('.contact-card');
const successBox = document.querySelector('.success-box');
const form = document.getElementById('form');
const email = document.getElementById('email');
const dismissBtn = document.getElementById('dismiss');

// Check email is vaild
function checkEmail(input) {
  const errMsg = document.getElementById('errmsg');
  const re = /\S+@\S+\.\S+/;
  if (re.test(input.value.trim())) {
    errMsg.classList.remove('error');
    email.classList.remove('error');
    contactForm.classList.remove('show');
    successBox.classList.add('show');
  } else {
    errMsg.classList.add('error');
    email.classList.add('error');
  }
}

// Add email to success page
function showEmail(input) {
  const emailValue = document.querySelector('.confirmation');
  emailValue.innerHTML = `A confirmation email has been sent to <br />
  <span class="email-bold">${email.value} </span> Please open it and
  click <br />the button inside to confirm your subscription`;
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  checkEmail(email);
  showEmail(email);
});

// Go back to signup screen on dimiss
dismissBtn.addEventListener('click', () => {
  successBox.classList.remove('show');
  contactForm.classList.add('show');
});
