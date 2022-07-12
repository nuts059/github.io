function humberger(){
   const menu = document.getElementById('headerNav');
   const nav = document.getElementById('headerNavLink');

   menu.addEventListener('click', () =>{
    nav.classList.toggle('active');
   });
}
humberger();

function slideDown(){
    const h2 = document.getElementById('h2SlideDown');
    const h2Youtube = document.getElementById('h2SlideDownYoutube');
    const ulContents = document.getElementById('slideDownContents');
    const youtubeContents = document.getElementById('player');

    h2.addEventListener('click', () =>{
        h2.classList.toggle('hide_item');
        ulContents.classList.toggle('show_contents');
    });
    h2Youtube.addEventListener('click', () =>{
        h2Youtube.classList.toggle('hide_item');
        youtubeContents.classList.toggle('show_contents');
    });
}
slideDown();

function modal(){
    const modalButton = document.getElementById('modalOpen');
    const modalOpen = document.getElementById('modalContents');
    const modalClose = document.getElementById('modalClose');
    
    modalButton.addEventListener('click', () =>{
        modalOpen.classList.add('show');
    });
    modalClose.addEventListener('click', () =>{
        modalOpen.classList.remove('show');
    });
}
modal();

function showClock() {
    let nowTime = new Date();
    let nowHour = nowTime.getHours();
    let nowMin  = nowTime.getMinutes();
    let nowSec  = nowTime.getSeconds(); 
    let msg = "現在時刻：" + nowHour + ":" + nowMin + ":" + nowSec;
    document.getElementById("nowData").innerHTML = msg;
}
setInterval('showClock()',1000);

  function weather(){
    // 現在の日時を取得
    const now = new Date();
    // 位置情報を取得開始
    if (navigator.geolocation) {
        // 位置情報が取得成功した時
        navigator.geolocation.getCurrentPosition(function (position) {
            // 緯度経度を取得
            const basePosition = position.coords;
            const lat = basePosition.latitude;
            const lng = basePosition.longitude;
            // WEB API を使用し、現在地の現在の天気を取得
            const API_KEY = "c092226559b6638f04b5e93e2602f667";
            const url = "https://api.openweathermap.org/data/2.5/onecall?lat=35.681236&lon=139.767125&units=metric&lang=ja&appid={YOUR API KEY}"
            const request = new XMLHttpRequest();
            request.open("GET", url, true);
            request.responseType = "json";
        
            // 現在の天気に関する関数
            request.onload = function () {
                const nowData = this.response;
                const weatherName = nowData.weather[0].main;
                const weatherTemp = nowData.main.temp;
                const cityName = nowData.name;
                const changeTarget = document.getElementById('weather');
                changeTarget.innerHTML = (cityName + "\n" + weatherName + "\n" + weatherTemp + '<span class="unit">℃</span>');
            };
            request.send();
        },
        // 位置情報の取得失敗した時
        function () {
            changeTarget.innerHTML('位置情報の取得に失敗しました。');
        });
    } else {
        changeTarget.innerHTML("位置情報を取得できませんでした……");
    }
  }
  weather();

  function UserAgent(){
    const uaData = navigator.userAgentData;
    (async () => {
    const highEntropyValues = await uaData.getHighEntropyValues([
        "platform",
        "platformVersion",
        "architecture",
        "model",
        "uaFullVersion",
    ]);
    const platform = highEntropyValues.platform;
    const platformVersion = highEntropyValues.platformVersion;
    const uatarget = document.getElementById('userAgent');
    if(platform , platformVersion === ""){
        uatarget.innerHTML = ('端末情報取得に失敗しました。');
    }else{
        uatarget.innerHTML = ('あなたの使用しているOSは' + "\n" + platform + "\n" + platformVersion);
    }
    })()
  }
UserAgent();
