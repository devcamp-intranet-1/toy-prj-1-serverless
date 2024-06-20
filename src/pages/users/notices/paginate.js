const rowsPerPage = 5; //한페이지 당 테이블 로우를 몇개 보여줄건지
const rows = document.querySelectorAll('tbody tr');
const rowsCount = rows.length; //총 개수를 5개씩 나눔
const pageCount = Math.ceil(rowsCount / rowsPerPage);
const numbers = document.querySelector('#numbers');
console.log(rows, '1');

for (let i = 1; i <= pageCount; i++) {
  numbers.innerHTML = numbers.innerHTML + `<li><a href="">${i}</a></li>`;
}

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
  })
  .catch((error) => console.error('Error fetching JSON:', error));
