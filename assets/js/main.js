const modal = document.getElementById('modal');
const closeButton = document.getElementsByClassName('btn-close')[0];

window.addEventListener('load', () => {
  let activeUser = JSON.parse(localStorage.getItem('activeUser'));
  if (activeUser) {
    window.location.href = './assets/html/navers.html';
  }
});

function nextPage() {
  let nameValue = document.getElementsByName('name')[0].value;
  let emailValue = document.getElementsByName('email')[0].value;
  
  localStorage.setItem('activeUser', JSON.stringify({name: nameValue, email: emailValue}));
  document.body.style.opacity = '0.3';
  modal.showModal();
};

closeButton.addEventListener('click', () => {
  modal.close();
  document.body.style.opacity = '1';
  window.location.href = './assets/html/navers.html';
});