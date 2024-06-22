// 테이블에 직원 데이터를 추가하는 함수
function loadEmployees() {
  const tbody = document.getElementById('employeeTableBody');
  employees.forEach(employee => {
    const row = document.createElement('tr');
    
    row.innerHTML = `
      <td><img src="${employee.img}" alt="profileimg"></td>
      <td>${employee.name}</td>
      <td>${employee.email}</td>
      <td>${employee.position}</td>
      <td>${employee.birthday}</td>
      <td>${employee.joinday}</td>
      <td>${employee.phone}</td>
      <td><button data-color='neutral' data-shape='line' onclick="location.href='detail.html'">수정</button></td>
    `;
    
    tbody.appendChild(row);
  });
}

// 페이지 로드 시 직원 데이터를 테이블에 추가
document.addEventListener('DOMContentLoaded', loadEmployees);


// 직원 데이터 배열
const employees = [
  {
    img: '/public/images/_Avatar_.png',
    name: '홍길동',
    email: 'honggildong@naver.com',
    position: '부장',
    birthday: '1970.01.01',
    joinday: '2000.02.02',
    phone: '010-1234-1234'
  },
  {
    img: '/public/images/_Avatar_.png',
    name: '김철수',
    email: 'chulsoo@company.com',
    position: '과장',
    birthday: '1985.05.15',
    joinday: '2010.03.01',
    phone: '010-5678-5678'
  },
  {
    img: '/public/images/_Avatar_.png',
    name: '이영희',
    email: 'younghee@company.com',
    position: '대리',
    birthday: '1990.07.07',
    joinday: '2015.07.15',
    phone: '010-8765-8765'
  },
  {
    img: '/public/images/_Avatar_.png',
    name: '박민수',
    email: 'minsoo@company.com',
    position: '사원',
    birthday: '1992.03.12',
    joinday: '2018.04.20',
    phone: '010-3456-3456'
  },
  {
    img: '/public/images/_Avatar_.png',
    name: '최수영',
    email: 'sooyoung@company.com',
    position: '팀장',
    birthday: '1988.09.09',
    joinday: '2012.11.11',
    phone: '010-7890-7890'
  },
  {
    img: '/public/images/_Avatar_.png',
    name: '정희진',
    email: 'heejin@company.com',
    position: '사원',
    birthday: '1994.06.06',
    joinday: '2020.01.01',
    phone: '010-4321-4321'
  },
  {
    img: '/public/images/_Avatar_.png',
    name: '강민호',
    email: 'minho@company.com',
    position: '대리',
    birthday: '1986.07.07',
    joinday: '2013.02.14',
    phone: '010-6543-6543'
  },
  {
    img: '/public/images/_Avatar_.png',
    name: '배수진',
    email: 'soojin@company.com',
    position: '부장',
    birthday: '1980.10.10',
    joinday: '2005.08.15',
    phone: '010-3210-3210'
  },
  {
    img: '/public/images/_Avatar_.png',
    name: '윤지후',
    email: 'jihuu@company.com',
    position: '차장',
    birthday: '1982.11.11',
    joinday: '2007.05.05',
    phone: '010-8765-8765'
  },
  {
    img: '/public/images/_Avatar_.png',
    name: '서지민',
    email: 'jimin@company.com',
    position: '과장',
    birthday: '1989.02.02',
    joinday: '2011.06.06',
    phone: '010-2345-2345'
  },
  {
    img: '/public/images/_Avatar_.png',
    name: '문수빈',
    email: 'subin@company.com',
    position: '사원',
    birthday: '1995.05.05',
    joinday: '2021.03.03',
    phone: '010-5678-5678'
  },
  {
    img: '/public/images/_Avatar_.png',
    name: '장한나',
    email: 'hanna@company.com',
    position: '대리',
    birthday: '1987.12.12',
    joinday: '2014.09.09',
    phone: '010-6789-6789'
  }
];

