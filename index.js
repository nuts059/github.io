function humberger(){
   const menu = document.getElementById('headerNav');
   const nav = document.getElementById('headerNavLink');

    menu.addEventListener('click', () =>{
        menu.classList.toggle('active');
        nav.classList.toggle('active');
    });
    document.addEventListener('click', (e) => {
        if(!e.target.closest('#headerNav')) {
            menu.classList.remove('active');
            nav.classList.remove('active');
        } else {
        }
    }); 
   
}
humberger();

function slideDown(){
    const h2 = document.getElementById('h2SlideDown');
    const h2Youtube = document.getElementById('h2SlideDownYoutube');
    const ulContents = document.getElementById('slideDownContents');
    const youtubeContents = document.getElementById('player');
    const h2carCon = document.getElementById('h2carousel');
    const carCon = document.getElementById('carousel');
    const h2fileup = document.getElementById('h2fileup');
    const fileup = document.getElementById('fileup');
    const h2filedwn = document.getElementById('h2filedwn');
    const filedwn = document.getElementById('filedwn');



    h2.addEventListener('click', () =>{
        h2.classList.toggle('hide_item');
        ulContents.classList.toggle('show_contents');
    });
    h2Youtube.addEventListener('click', () =>{
        h2Youtube.classList.toggle('hide_item');
        youtubeContents.classList.toggle('show_contents');
    });
    h2carCon.addEventListener('click',()=>{
        h2carCon.classList.toggle('hide_item');
        carCon.classList.toggle('show_contents');
    });
    h2fileup.addEventListener('click',()=>{
        h2fileup.classList.toggle('hide_item');
        fileup.classList.toggle('show_contents');
    });
    h2filedwn.addEventListener('click',()=>{
        h2filedwn.classList.toggle('hide_item');
        filedwn.classList.toggle('show_contents');
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
    const clear = document.getElementById('clear');
    yes.addEventListener('change', () =>{
        twitter.style.display = 'block';
        instagram.style.display = 'none';
        clear.style.display = 'block';
        
    });
    no.addEventListener('change', () =>{
        twitter.style.display = 'none';
        instagram.style.display = 'block';
        clear.style.display = 'block';
    });
    clear.addEventListener('click', ()=>{

        instagram.style.display = 'none';
        twitter.style.display = 'none';
        clear.style.display = 'none';
        yes.checked = false;
        no.checked = false;
    });
}
toggle();

function carousel(){
    const back = document.getElementById('btn-back');
    const next = document.getElementById('btn-next');
    const cat1 = document.getElementById('cat1');
    const cat2 = document.getElementById('cat2');
    const cat3 = document.getElementById('cat3');
    cat1.style.display = 'block';
    cat2.style.display = cat3.style.display = 'none';
    const circle1 = document.getElementById('circle1');
    const circle2 = document.getElementById('circle2');
    const circle3 = document.getElementById('circle3');

    back.addEventListener('click',()=>{
        if(cat1.style.display != 'none'){
            cat1.style.display = "none";
            cat3.style.display = "block"; 
            circle1.classList.remove('target');
            circle3.classList.add('target');
        }else if(cat2.style.display != 'none'){
            cat2.style.display = "none";
            cat1.style.display = "block";
            circle2.classList.remove('target');
            circle1.classList.add('target');
        }else if(cat3.style.display != 'none'){
            cat3.style.display = "none";
            cat2.style.display = "block"; 
            circle3.classList.remove('target');
            circle2.classList.add('target');
        }
    });
    
    next.addEventListener('click',()=>{
        nextPhoto();
    });
    

    circle1.addEventListener('click',()=>{
        cat2.style.display = "none";
        cat3.style.display = "none";
        cat1.style.display = "block";
        circle2.classList.remove('target');
        circle3.classList.remove('target');
        circle1.classList.add('target');
    });
    circle2.addEventListener('click',()=>{
        cat1.style.display = "none";
        cat3.style.display = "none";
        cat2.style.display = "block";
        circle1.classList.remove('target');
        circle3.classList.remove('target');
        circle2.classList.add('target');
    });
    circle3.addEventListener('click',()=>{
        cat1.style.display = "none";
        cat2.style.display = "none";
        cat3.style.display = "block";
        circle1.classList.remove('target');
        circle2.classList.remove('target');
        circle3.classList.add('target');
    });


    function nextPhoto(){
        if(cat1.style.display != 'none'){
            cat1.style.display = "none";
            cat2.style.display = "block"; 
            circle1.classList.remove('target');
            circle2.classList.add('target');
        }else if(cat2.style.display != 'none'){
            cat2.style.display = "none";
            cat3.style.display = "block";
            circle2.classList.remove('target');
            circle3.classList.add('target');
        }else if(cat3.style.display != 'none'){
            cat3.style.display = "none";
            cat1.style.display = "block"; 
            circle3.classList.remove('target');
            circle1.classList.add('target');
        }
    };
}
carousel();

function firstload(){
    //テキストのカウントアップ+バーの設定
    const bar = new ProgressBar.Line(splash_text, {
        easing: 'easeInOut',
        duration: 1000,
        strokeWidth: 0.2,
        color: '#555',
        trailWidth: 0.2,
        trailColor: '#bbb',
        text: {
        style: {
            position: 'absolute',
            left: '50%',
            top: '50%',
            padding: '0',
            margin: '-30px 0 0 0',
            transform:'translate(-50%,-50%)',
            'font-size':'1rem',
            color: '#fff',
        },
        autoStyleContainer: false 
        },
        step: function(state, bar) {
        bar.setText(Math.round(bar.value() * 100) + ' %'); 
        }
    });
    
    bar.animate(1.0, function () {
        const load = document.getElementById('splash');
        // setTimeout(load , 500);
        fadeOut(load , 800);
    });
}
firstload();

// フェードアウト
const fadeOut = function(element, time, callback) {
	var fadeTime     = (time) ? time : 400,
	    keyFrame     = 30,
	    stepTime     = fadeTime / keyFrame,
	    minOpacity   = 0,
	    stepOpacity  = 1 / keyFrame,
	    opacityValue = 1;

	if (!element) return;

	element.setAttribute('data-fade-stock-display', element.style.display.replace('none', ''));

	var setOpacity = function(setNumber) {
		if ('opacity' in element.style) {
			element.style.opacity = setNumber;
		} else {
			element.style.filter = 'alpha(opacity=' + (setNumber * 100) + ')';

			if (navigator.userAgent.toLowerCase().match(/msie/) &&
				!window.opera && !element.currentStyle.hasLayout) {
				element.style.zoom = 1;
			}
		}
	};

	if (!callback || typeof callback !== 'function') callback = function() {};

	setOpacity(1);

	var sId = setInterval(function() {
		opacityValue = Number((opacityValue - stepOpacity).toFixed(12));

		if (opacityValue < minOpacity) {
			opacityValue = minOpacity;
			element.style.display = 'none';
			clearInterval(sId);
		}

		setOpacity(opacityValue);

		if (opacityValue === minOpacity) callback();
	}, stepTime);

	return element;
};
// フェードイン
const fadeIn = function(element, time, callback) {
	var fadeTime     = time ? time : 400,
	    keyFrame     = 30,
	    stepTime     = fadeTime / keyFrame,
	    maxOpacity   = 1,
	    stepOpacity  = maxOpacity / keyFrame,
	    opacityValue = 0;

	if (!element) return;

	if (element.getAttribute('data-fade-stock-display') !== undefined &&
		element.getAttribute('data-fade-stock-display') !== null) {
		element.style.display = element.getAttribute('data-fade-stock-display');
	}

	var setOpacity = function(setNumber) {
		if ('opacity' in element.style) {
			element.style.opacity = setNumber;
		} else {
			element.style.filter = 'alpha(opacity=' + (setNumber * 100) + ')';

			if (navigator.userAgent.toLowerCase().match(/msie/) &&
				!window.opera && !element.currentStyle.hasLayout) {
				element.style.zoom = 1;
			}
		}
	};

	if (!callback || typeof callback !== 'function') callback = function() {};

	setOpacity(0);

	var sId = setInterval(function() {
		opacityValue = Number((opacityValue + stepOpacity).toFixed(12));

		if (opacityValue > maxOpacity) {
			opacityValue = maxOpacity;
			clearInterval(sId);
		}

		setOpacity(opacityValue);

		if (opacityValue === maxOpacity) callback();
	}, stepTime);

	return element;
};

function fileUpload(){
    const fileup =  document.getElementById('fileUpClick'); 
    const inputCon = document.querySelector('input[name="avatar"]');
    const filetxt = document.getElementById('filetxt');
    const filemore = document.getElementById('filemore');
    
    fileup.addEventListener('click', () =>{
        inputCon.click();
    });
    inputCon.addEventListener('change', () =>{
        const filename = inputCon.files[0].name;
        filetxt.classList.add('show_contents');
        filemore.textContent = filename;
    });
}
fileUpload();
