//  모달
const openButton = document.querySelector('.modalOpenBtn');
const modal = document.querySelector('.modal');
const closeButton = modal.querySelector('.close__btn');
const modalBackground = modal.querySelector('.modal__background');
//submitBtn: 새 게시글을 제출하는 버튼.
const submitBtn = document.getElementById('submitBtn');
const detailModal = document.getElementById('detailModal');
const closeDetailModalBtn = document.getElementById('closeDetailModalBtn');
//boardContent: 게시판 내용이 표시될 HTML 요소.
const boardContent = document.getElementById('boardContent');

//detailCategory, detailTitle, detailDate, detailDescription: 게시글의 세부 정보를 표시하는 HTML 요소들.
const detailCategory = document.getElementById('detailCategory');
const detailTitle = document.getElementById('detailTitle');
const detailDate = document.getElementById('detailDate');
const detailDescription = document.getElementById('detailDescription');
//prevBtn, nextBtn, pageNumber: 페이지네이션을 위한 버튼 및 페이지 번호 표시 요소.
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pageNumber = document.getElementById('pageNumber');

const entriesPerPage = 5;
let currentPage = 1;
let entries = [];

function displayModal() {
  modal.classList.toggle('modalHidden');
}

openButton.addEventListener('click', displayModal);
closeButton.addEventListener('click', displayModal);
modalBackground.addEventListener('click', displayModal);
submitBtn.addEventListener('click', displayModal);
closeDetailModalBtn.onclick = function () {
  detailModal.style.display = 'none';
};

submitBtn.onclick = function () {
  //사용자 입력값을 가져옵니다.
  const category = document.getElementById('category').value;
  const title = document.getElementById('title').value;
  const startDate = document.getElementById('startDate').value;
  const endDate = document.getElementById('endDate').value;
  const description = document.getElementById('description').value;
  //현재 날짜와 시간을 문자열로 저장합니다.
  const applicationDate = new Date().toLocaleString();
  //모든 필드가 입력되었는지 확인하고, 입력되지 않은 필드가 있으면 경고 메세지를 표시합니다.
  // 새오룬 게시글 객체를 생성하여 'entries' 배열에 추가하고, 모달 창을 숨깁니다.
  if (category && title && startDate && endDate && description) {
    const newEntry = {
      category: category,
      title: title,
      startDate: startDate,
      endDate: endDate,
      description: description,
      applicationDate: applicationDate,
    };
    entries.push(newEntry);
    renderBoard();
    modal.style.display = 'none';
  } else {
    alert('모든 필드를 입력해주세요.');
  }
};

/*게시판 랜더링
renderBoard: 현재 페이지에 해당하는 게시글을 표시합니다.
start와 end를 계산하여 현재 페이지에 해당하는 게시글을 entries 배열에서 추출합니다.
각 게시글을 행(tr)으로 만들어 게시판(boardContent)에 추가합니다.
페이지네이션을 업데이트합니다.
*/
function renderBoard() {
  boardContent.innerHTML = '';
  const start = (currentPage - 1) * entriesPerPage;
  const end = start + entriesPerPage;
  const paginatedEntries = entries.slice(start, end);

  paginatedEntries.forEach((entry, index) => {
    const newRow = document.createElement('tr');
    newRow.onclick = function () {
      showDetailModal(entry);
    };

    const categoryCell = document.createElement('td');
    categoryCell.textContent = entry.category;
    newRow.appendChild(categoryCell);

    const titleCell = document.createElement('td');
    titleCell.textContent = entry.title;
    newRow.appendChild(titleCell);

    const dateCell = document.createElement('td');
    dateCell.textContent = entry.applicationDate;
    newRow.appendChild(dateCell);

    boardContent.appendChild(newRow);
  });

  updatePagination();
}
function showDetailModal(entry) {
  detailCategory.textContent = entry.category;
  detailTitle.textContent = entry.title;
  detailDate.textContent = `${entry.startDate} - ${entry.endDate}`;
  detailDescription.textContent = entry.description;
  detailModal.style.display = 'block';
}
/*
//현제 페이지 이동
function updatePagination() {
  pageNumber.textContent = currentPage;
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === Math.ceil(entries.length / entriesPerPage);
}*/
//현제 페이지가 1보다 크면 현재 페이지를 1 감소시키고 게시판을 다시 렌더링합니다.
prevBtn.onclick = function () {
  if (currentPage > 1) {
    currentPage--;
    renderBoard();
  }
};
//현재 페이지가 마지막 페이지보다 작으면 현재 페이지를 1 증가시키고 게시판을 다시 렌더링합니다.
nextBtn.onclick = function () {
  if (currentPage < Math.ceil(entries.length / entriesPerPage)) {
    currentPage++;
    renderBoard();
  }
};

// 탭형식
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

// 페이지가 로드될 때 초기 설정
window.onload = function () {
  // 초기 설정이나 로드 시 필요한 작업들을 여기에 추가할 수 있습니다.
  // 초기 렌더링을 호출할 수도 있습니다.
  renderBoard();
};
