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
    const changeTarget = document.getElementById('weather');
    if (navigator.geolocation) {
        // navigator.geolocation.getCurrentPosition(function () {
            const url = 'https://api.openweathermap.org/data/2.5/weather?id=1850147&units=metric&appid=c092226559b6638f04b5e93e2602f667';
            const request = new XMLHttpRequest();
            request.open("GET", url, false);
            request.onload = function () {
                const nowData = JSON.parse(request.response);
                const weatherName = nowData.weather[0].main;
                const weatherTemp = nowData.main.temp;
                const cityName = nowData.name;
                changeTarget.innerHTML = (cityName + "\n" + weatherName + "\n" + weatherTemp + '<span class="unit">℃</span>');
            };
            request.send();
        // },
        // 位置情報の取得失敗した時
        // function () {
        //     changeTarget.innerHTML('位置情報の取得に失敗しました。');
        // });
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

function toggle(){
    const yes = document.getElementById('yes');
    const no =  document.getElementById('no');
    const twitter = document.getElementById('twitter');
    const instagram = document.getElementById('instagram');
    yes.addEventListener('change', () =>{
        twitter.style.display = 'block';
        instagram.style.display = 'none';
        
    });
    no.addEventListener('change', () =>{
        twitter.style.display = 'none';
        instagram.style.display = 'block';
    });
}

toggle();