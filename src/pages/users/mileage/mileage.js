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

    mileageList.appendChild(div);
  });
}

document.addEventListener('DOMContentLoaded', fetchMileageData);
document.addEventListener('DOMContentLoaded', fetchMileageData);
