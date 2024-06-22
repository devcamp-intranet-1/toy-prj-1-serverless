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
                        <h3>${item.category}</h3>
                        <h5>${item.data}</h5>
                     </div>`;

    mileageList.appendChild(div);
  });
}

document.addEventListener('DOMContentLoaded', fetchMileageData);
document.addEventListener('DOMContentLoaded', fetchMileageData);
