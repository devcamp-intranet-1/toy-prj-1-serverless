// JSON 데이터 파일을 불러오는 함수
fetch('approvla.json')
  .then((response) => response.json())
  .then((data) => {
    addDataToTable(data.post);
  })
  .catch((error) => console.error('Error loading JSON:', error));

// 데이터 추가 함수
function addDataToTable(data) {
  const tableBody = document.getElementById('boardContent');
  data.forEach((item) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.category}</td>
      <td>${item.title}</td>
      <td>${item.requester}</td>
      <td> - </td>
      <td>${item.registrationDate}</td>
    `;
    tableBody.appendChild(row);
  });
}
// 탭 전환 함수
function openTab(evt, tabName) {
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
  evt.currentTarget.className += ' active';
}

window.onload = function () {
  document.getElementById('심사중').style.display = 'block';
};
