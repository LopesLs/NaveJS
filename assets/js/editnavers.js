let navers = JSON.parse(localStorage.getItem('navers'));
let naverName = JSON.parse(localStorage.getItem('naverToEdit'));

window.addEventListener('load', () => { 
  navers.forEach((object) => {
    if (object.nome === naverName) {
      document.getElementsByName('name')[0].value = object.nome;
      document.getElementsByName('age')[0].value = object.idade;
      document.getElementsByName('role')[0].value = object.cargo;
      document.getElementsByName('time')[0].value = object.tempo;
      document.getElementsByName('projects')[0].value = object.projetos;
      document.getElementsByName('image')[0].value = object.imagem;
    };
  });
});

const editNaver = () => {
  navers = navers.filter((naver) => {
    if (naver.nome === naverName) {
      naver.nome = document.getElementsByName('name')[0].value;
    };

    return true;
  });
};

document.getElementsByClassName('btn-back')[0].addEventListener('click', () => {
  window.location.href = '../html/navers.html';
});

document.getElementsByClassName('btn-save')[0].addEventListener('click', () => {
  editNaver();
  localStorage.setItem('navers', JSON.stringify(navers));
  localStorage.removeItem('naverToEdit');
  window.location.href = '../html/navers.html';
});