const time = document.getElementById('time');
const form = document.querySelector('#form');
const user = document.querySelector('#user');
const userInput = document.querySelector('#userInput');
const userName = "name";

function getDate() { // 자바스크립트 시간 객체 얻어오는 함수
    const date = new Date()
    const minutes = date.getMinutes();
    // const seconds = date.getSeconds();
    let hours = date.getHours();
    let meridiem = "AM";
    
    if (hours > 13) {
        hours = date.getHours() - 12;
        meridiem = "PM";
    }
    else {
        meridiem = "AM";
    }
    time.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes} ${meridiem}`;
}

function saveName(text) { // 로컬 스토리지에 name의 key 값과 text 매개변수의 value 값 입력
    localStorage.setItem(userName, text);
}

function paintGreeting(text) { // #user DOM 객체에 접근하여 필드 값 변경해주는 함수
    user.classList.remove("inputOk");
    userInput.classList.add("inputOk");
    user.innerText = `안녕하세요, ${text}님 반가워요!`;
}

function handleSubmit(e) { // 아래 askForName() submit() 이벤트에서 실행될 handleSubmit 함수
    e.preventDefault();
    const currentValue = userInput.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() { // #form DOM 객체에 접근하여 submit 이벤트를 추가해주고, handleSubmit 함수를 실행
    form.addEventListener("submit", handleSubmit);
    user.classList.add("inputOk");
    userInput.classList.remove("inputOk");
}

function loadName() {
    const currentUser = localStorage.getItem(userName);
    if (currentUser === null) {
        askForName();
    }
    else {   
        paintGreeting(currentUser);
    }
}

function init() { // 위에서 설계하였던 함수들을 여기서 실행
    getDate();
    setInterval(getDate, 1000); // 1초 있다가 실행을 해주기 때문에, 위에 첫 적용할 함수를 적어주어서 딜레이를 없앤다.
    loadName();
}

init();


