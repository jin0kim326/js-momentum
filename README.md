# 자바스크립트로 만드는 momentum

chrome의 확장프로그램중 momentum에 감명받아 만든 javascript를 이용한 todoList
개발을 완료한 후 git을 접했기에... 커밋리스트가 없는것이 아쉽다. 개발기간은 약 2주 내외

### [접속해보기](https://jin0kim326.github.io/js-momentum/)👈

## 🕹 주요 포인트

1. web LocalStorage
   👉🏻 웹의 로컬스토리지에 접근하여 새로고침하여도 보고싶은 데이터는 계속 볼수 있도록 하였음
   이 프로젝트에서 로컬스토리지에 저장한 것은 "사용자이름" "todoList항목들" 두가지

```
// todo.js
 localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
```

2.  API
    👉🏻 날씨API를 통해서 사용자의 위치와 날씨를 받아왔음

```
function getWeather(lat, lon) {
 fetch(
   `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
 )
   .then(function (response) {
     return response.json();
   })
   .then(function (json) {
     console.log(json);
     const temperature = json.main.temp;
     const place = json.name;
     weather.innerText = `${temperature}°C @ ${place}`;
   });
}
```

이외에도 배경화면 랜덤지정, 기본적인 리스트 생성,제거 등 CROD를 경험해 볼 수 있었다.
