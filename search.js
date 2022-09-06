const logo = document.querySelector('#naverLogo');
const search = document.querySelector('.search');
const searchForm = document.querySelector('.searchForm');
const imageInfo = document.querySelector('.imageInfo');
const weatherContainer = document.querySelector('.weatherContainer');
const timeContainer = document.querySelector('.clock');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault()
    window.location.href = `https://search.naver.com/search.naver?query=${search.value}&ie=utf8&sm=whl_nht`;
})

search.addEventListener('focus', (e) => {
    search.classList.add('clickedSearch');
    logo.src = './logo_green.png';
})

search.addEventListener('focusout', (e) => {
    search.classList.remove('clickedSearch');
    logo.src = './logo.png';
})

imageInfo.addEventListener('mouseover', (e) => {
    searchForm.style.opacity = "0";
    weatherContainer.style.opacity = "0";
    timeContainer.style.opacity = "0";
})

imageInfo.addEventListener('mouseout', (e) => {
    searchForm.style.opacity = "1";
    weatherContainer.style.opacity = "1";
    timeContainer.style.opacity = "1";
})

imageInfo.addEventListener('click', (e) => {
    window.open(
        "https://store.whale.naver.com/detail/6791c984ea44413c9b06ed2daa6174c2",
        "child",
        "width=1200, height=800, top=50, left=50");
    console.log("hi!");
})

function init () {
    console.log(search);
    console.log(imageInfo);
}

init()