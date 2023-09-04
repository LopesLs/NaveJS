const modal = document.getElementById('modal');

document.getElementsByClassName('btn-save')[0].addEventListener('click', () => {
  modal.showModal();
});

document.getElementsByClassName('btn-close')[0].addEventListener('click', () => {
  modal.close();
})

document.getElementsByClassName('btn-back')[0].addEventListener('click', () => {
  window.location.href = '../html/navers.html';
})