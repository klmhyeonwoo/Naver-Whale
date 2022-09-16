const key = '9c1f751188f8e6b495ec3ec109d1c600';
let latitude, longitude = "";
const weather = document.querySelector('.weather');

console.log(weather);

if ('geolocation' in navigator) {

    navigator.geolocation.getCurrentPosition(function(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.latitude;

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            weather.innerText = data.weather[0].description;
        })
    })

} else {
    console.log("위치 정보를 사용할 수 없습니다!");
}

