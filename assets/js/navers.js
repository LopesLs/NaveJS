let container = document.querySelector('.navers-container');

window.addEventListener('load', () => {
  let navers = JSON.parse(localStorage.getItem('navers'));
  
  if (!navers) {
    container.innerHTML = '<p>Nenhum naver encontrado</p>';
  };

  navers.forEach((object) => {
    container.innerHTML += `
    <div class='naver-card'>
      <h3 class='naver-title'>${object.nome}</h3>
      <p class='naver-role'>${object.cargo}</p>
      <p class='edit-button'>Editar</p>
      <p class='delete-button'>Excluir</p>
    </div>`;
  });
});

container.addEventListener('click', (event) => {
  let target = event.target;

  if (target.classList.contains('delete-button')) {
    deleteNaver(target);
  } else if (target.classList.contains('edit-button')) {
    editNaver(target);
  };
});

document.getElementsByClassName('btn-add')[0].addEventListener('click', () => {
  window.location.href = "../html/addnavers.html"
});

document.getElementsByClassName('btn-logout')[0].addEventListener('click', () => {
  localStorage.removeItem('activeUser');
  window.location.href = "../../index.html"
});

const deleteNaver = (naverTarget) => {
  let navers = JSON.parse(localStorage.getItem('navers'));
  let naverName = naverTarget.parentElement.children[0].innerHTML;

  navers = navers.filter((naver) => naver.nome !== naverName);

  localStorage.setItem('navers', JSON.stringify(navers));

  window.location.reload();
}

const editNaver = (naverTarget) => {
  let naverName = naverTarget.parentElement.children[0].innerHTML;
  localStorage.setItem('naverToEdit', JSON.stringify(naverName));
  window.location.href = './editnavers.html';
};