const modal = document.getElementById('modal');

function nextPage() {
  let nameValue = document.getElementsByName('name')[0].value;
  let emailValue = document.getElementsByName('email')[0].value;
  
  localStorage.setItem('activeUser', JSON.stringify({name: nameValue, email: emailValue}));
  modal.showModal();
};

document.getElementsByClassName('btn-close')[0].addEventListener('click', () => {
  modal.close();
  window.location.href = './assets/html/navers.html';
});