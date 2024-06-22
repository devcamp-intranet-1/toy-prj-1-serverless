function app() {
  toggleSwitch();
  fetchMileageData();
  makeModal();
}

function toggleSwitch() {
  const toggleSwitch = document.querySelector('#toggleSwitch');
  const toggleText = document.querySelector('#toggleText');

  toggleSwitch.addEventListener('click', () =>
    // this.checked
    toggleSwitch.checked
      ? (toggleText.textContent = '확인')
      : (toggleText.textContent = '미확인')
  );
}

async function fetchMileageData() {
  const response = await fetch('../mileage/mileage.json');
  const data = await response.json();
  fillMileageList(data);
}
function fillMileageList(data) {
  const mileageList = document.querySelector('.mileage-list');

  data.forEach((item) => {
    const div = document.createElement('div');
    div.className = 'mileage-list__item';
    div.style.backgroundImage = `url(${item.image})`;
    div.innerHTML = `<div class="mileage-list__title">
      <h4>${item.category}</h4>
      <h6>${item.data}</h6>
      </div>`;

    makeModal(div);

    mileageList.appendChild(div);
  });
}

function makeModal(div) {
  div.classList.add('modalOpenBtn');
}

//모든 함수 포함
document.addEventListener('DOMContentLoaded', app);
