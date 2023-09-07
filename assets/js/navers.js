document.getElementsByClassName('btn-add')[0].addEventListener('click', () => {
  window.location.href = "../html/addnavers.html"
});

document.getElementsByClassName('btn-logout')[0].addEventListener('click', () => {
  localStorage.removeItem('activeUser');
  window.location.href = "../../index.html"
});