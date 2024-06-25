/*모달 두 개 이상일 때의 버전 사용 방법
* 각 모달 실행 요소(data-modal-target)와 해당 모달(id)을 매핑
* 요소 1에 data-modal-target="#modal-1" 추가
* 모달 1에 id="modal-1 추가
* 하단에 모달 HTML 요소 있습니다.
*/

function modal() {
  const openModalButtons = document.querySelectorAll('.open-modal');
  const closeModalButtons = document.querySelectorAll('.close-modal');
  const modalBackground = document.querySelector('#modal__background');

  //모달 활성화 버튼 클릭 시, toggle로 모달 활성화
  openModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.modalTarget);

      toggleModal(modal);
    });
  });

  //모달 비활성화 버튼 클릭 시, toggle로 모달 비활성화
  closeModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const modal = document.querySelector('.modal-box.active');

      toggleModal(modal);
    });
  });

  //배경 클릭 시, toggle로 모달 비활성화
  modalBackground.addEventListener('click', () => {
    const modal = document.querySelector('.modal-box.active');

    toggleModal(modal);
  });

  // 모달 활성화/비활성화 토글 함수
  function toggleModal(modal) {
    if (modal === null) return;
    modal.classList.toggle('active');
    modalBackground.classList.toggle('active');
  }
}

// DOM을 모두 로드 후, modal 로직 함수 실행 
document.addEventListener('DOMContentLoaded', modal);


// 모달 HTML 요소
// <div id="modal-1" class="modal">
// <div class="modal__content">
//   <div class="modal__header">
//     <h2>마일리지 기준</h2>
//     <img
//       class="close-modal"
//       src="/public/icons/close.svg"
//       alt="close-modal"
//       width="24"
//       height="24"
//     />
//   </div>
//   <div class="mileage__contents">
//     contents
//   </div>
// </div>
// </div>

// <div id="modal__background"></div>