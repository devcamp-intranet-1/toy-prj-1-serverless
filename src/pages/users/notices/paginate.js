//테이블에 JSON 데이터 불러오기
const jsonFilePath = 'notice.json';

fetch(jsonFilePath)
  .then((response) => response.json())
  .then((data) => {
    const postsContainer = document.querySelector('#noticeTable tbody');

    data.posts.forEach((post) => {
      const postElement = document.createElement('tr');
      postElement.className = 'postElement';
      postElement.innerHTML = `
        <td>${post.index}</td>
        <td> ${post.title}</td>
        <td>${post.author}</td>
        <td>${post.date}</td>
        <td>${post.attachments.join(', ')}</td>
        <td>${post.views}</td>
        `;
      postsContainer.appendChild(postElement);
    });

    const rowsPerPage = 5; //한페이지 당 테이블 로우를 몇개 보여줄건지
    const rows = document.querySelectorAll('.postElement');
    const rowsCount = rows.length; //총 로우 수
    const pageCount = Math.ceil(rowsCount / rowsPerPage); //총 개수를 5개씩 나눔-몇개의 페이지가 생기는지를 계산
    const numbers = document.querySelector('#pagination__numbers'); //ol tag
    const prevBtn = document.querySelector('.prevBtn');
    const nextBtn = document.querySelector('.nextBtn');
    let pageActiveIndex = 0; //현재 보고 있는 페이지번호
    let currentPageNum = 0; //페이지 그룹의 번호
    let maxPageNum = 10; //페이지 그룹의 최대 개수

    //page수만큼 페이지네이션 생성
    for (let i = 1; i <= pageCount; i++) {
      numbers.innerHTML += `<a href=""><li class="paginateItem">${i}</li></a>`;
    }

    const numberBtn = numbers.querySelectorAll('a');

    //페이지네이션 번호 감추기
    for (nb of numberBtn) {
      nb.style.display = 'none';
    }

    numberBtn.forEach((item, index) => {
      item.className = 'numberBtn';

      item.addEventListener('click', (event) => {
        event.preventDefault();

        //테이블 출력 함수
        showRow(index);
      });
    });

    const showRow = (index) => {
      //nodelist를 array로 변환
      const rowArrray = [...rows];

      let start = index * rowsPerPage;
      let end = start + rowsPerPage;

      for (ra of rowArrray) {
        ra.style.display = 'none';
      }

      let newRows = rowArrray.slice(start, end);

      for (nr of newRows) {
        nr.style.display = '';
      }
      //numberBtn안에 있는 하나하나의 값들을 nb로 받아오겠디
      for (nb of numberBtn) {
        //반복문을 돌면서 모든 버튼에서 numberBtn--active 클래스를 제거
        nb.classList.remove('numberBtn--active');
      }
      //numberBtn에 numberBtn--active를 추가
      numberBtn[index].classList.add('numberBtn--active');
    };

    showRow(0); //브라우저가 실행되면 0번째 페이지를 보여줌

    //페이지네이션 그룹 표시
    const showPageGroup = (num) => {
      //페이지네이션 번호 감추기
      for (nb of numberBtn) {
        nb.style.display = 'none';
      }
      let totalPageCount = Math.ceil(pageCount / maxPageNum);
      let pageArr = [...numberBtn];
      let start = num * maxPageNum;
      let end = start + maxPageNum;
      let pageListArr = pageArr.slice(start, end);

      for (let item of pageListArr) {
        item.style.display = 'flex';
      }

      //첫페이지면 이전 버튼이 안보임
      if (pageActiveIndex == 0) {
        prevBtn.style.display = 'none';
      } else {
        prevBtn.style.display = 'block';
      }
      //마지막 페이지면 다음 버튼이 안보임
      if (pageActiveIndex == totalPageCount - 1) {
        nextBtn.style.display = 'none';
      } else {
        nextBtn.style.display = 'block';
      }
    };

    showPageGroup(0);

    nextBtn.addEventListener('click', () => {
      let nextPageNum = pageActiveIndex * maxPageNum + maxPageNum;
      showRow(nextPageNum);
      ++pageActiveIndex;
      showPageGroup(pageActiveIndex);
    });

    prevBtn.addEventListener('click', () => {
      let nextPageNum = pageActiveIndex * maxPageNum - maxPageNum;
      showRow(nextPageNum);
      --pageActiveIndex;
      showPageGroup(pageActiveIndex);
    });
  })
  .catch((error) => console.error('Error fetching JSON:', error));

// TODO: 페이지네이션 << >> 아이콘 추가
