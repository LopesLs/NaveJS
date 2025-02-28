const modal = document.getElementById('modal');

window.addEventListener('load', () => {
  let activeUser = JSON.parse(localStorage.getItem('activeUser'));
  if (!activeUser) {
    window.location.href = "../../index.html";
  }
});

document.getElementsByClassName('btn-save')[0].addEventListener('click', () => {
  let navers = JSON.parse(localStorage.getItem('navers'));

  // When the number of navers is zero
  if (!navers) {
    navers = [];
  }

  let name = document.getElementsByName('name')[0].value;
  let age = document.getElementsByName('age')[0].value;
  let projects = document.getElementsByName('projects')[0].value;
  let role = document.getElementsByName('role')[0].value;
  let time = document.getElementsByName('time')[0].value;
  let image = document.getElementsByName('image')[0].value;

  navers.push(
    {
      nome: name,
      idade: age,
      projetos: projects,
      cargo: role,
      tempo: time,
      imagem: image
    }
  );

  localStorage.setItem('navers', JSON.stringify(navers));

  document.body.style.opacity = '0.3';
  modal.showModal();
});

document.getElementsByClassName('btn-close')[0].addEventListener('click', () => {
  document.body.style.opacity = '1';
  modal.close();
  window.location.href = '../html/navers.html';
})

document.getElementsByClassName('btn-back')[0].addEventListener('click', () => {
  window.location.href = '../html/navers.html';
});

document.getElementsByClassName('btn-logout')[0].addEventListener('click', () => {
  localStorage.removeItem('activeUser');
  window.location.href = "../../index.html"
});