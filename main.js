const email = document.getElementById('email');
const button = document.getElementById('button');
const error = document.getElementById('error');
const confirmationButton = document.querySelector('.content-success button')

button.addEventListener('click', (event) => {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const emailValue = email.value;
  event.preventDefault()
  if (!emailValue.match(validRegex)) {
    
    error.classList.add('error');
    email.classList.add('error');
    setTimeout(() => {
      error.classList.remove('error');
      email.classList.remove('error');
    }, 3000);
  } else {
    document.querySelector('#emailSent').innerHTML = emailValue;
    document.querySelector('.content').style.display = 'none';
    document.querySelector('.content-success .container').style.display = 'flex';
  }
})

confirmationButton.addEventListener('click', () => {
  document.querySelector('.content').style.display = 'block';
  document.querySelector('.content-success .container').style.display = 'none';
  email.value = '';
})
