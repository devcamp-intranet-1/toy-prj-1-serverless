//  모달
const openButton = document.querySelector('.modalOpenBtn');
const modal = document.querySelector('.modal');
const closeButton = modal.querySelector('.close__btn');
const modalBackground = modal.querySelector('.modal__background');

function displayModal() {
  modal.classList.toggle('modalHidden');
}

// 탭형식
openButton.addEventListener('click', displayModal);
closeButton.addEventListener('click', displayModal);
modalBackground.addEventListener('click', displayModal);

function openTab(event, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tab-content');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('tab-link');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  document.getElementById(tabName).style.display = 'block';
  event.currentTarget.className += ' active';
}
document.getElementById('심사중').style.display = 'block';
