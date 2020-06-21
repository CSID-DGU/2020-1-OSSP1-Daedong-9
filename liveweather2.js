//This program grabs weather data from an api using geolocation and displays it for the user.

//Select elements:
const icon = document.querySelector(".weather-icon");
const temp = document.querySelector(".temperature");
const description = document.querySelector(".description");

//Weather data that pulled form api:
const weather = {};

//Api key & Kelvin(used since temp data from api returns kelvin):
const key = "a49cd5d13210a3857dd22a130c762b15";
const kelvin = 273.15;

//Do geolocation services exist? If so get users long and lat:
if (navigator.geolocation) {//위치를 받아온 경우
    console.log("Geolocation is available");
    navigator.geolocation.getCurrentPosition(function (position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

       
        //Call the function to get weather:
        getWeather(latitude, longitude);
    });
} else {//위치를 못받아오는 경우->입력으로 위치 정보 받기 or 가입시 입력한 주소를 기본으로 검색
    console.log("이 브라우저에서는 Geolocation이 지원되지 않습니다.");
}
//Get weather data from api provider - "Open Weather Maps":
function getWeather(latitude, longitude) {
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;   
    
    console.log(api);
    //Fetch api data and store it:
    fetch(api)
        .then(function (response) {
            let data = response.json();
            return data;
        })
        .then(function (data) {
        	temperatures = Math.floor(data.main.temp - kelvin);//현재 온도
        })
        .then(function () {
            displayclothes();
        });
}

// Displays clothes for the user:
function displayclothes() {
	//현재 날씨 출력
	icon.innerHTML="<h1><center>현재 날씨("
		+temperatures
		+"°C)에는 이러한 옷을 추천해요.<br></center></h1><br><br>";
	temperatures=-9;
    //옷 차림 출력
    if(temperatures>=28){
        temp.innerHTML = '<center>'+'<h3>민소매, 반팔, 반바지, 원피스</h3>'+'<br>'
        	+'<img width="200px;" height="200px;" src="images/민소매.jpg"/>'
        	+'<img width="200px;" height="200px;" src="images/반팔.jpg"/>'
        	+'<img width="200px;" height="200px;" src="images/반바지.jpg"/>'
        	+'<img width="200px;" height="250px;" src="images/원피스.jpg"/>'
        	+'</center>';
    }
    else if(temperatures<28&&temperatures>=23){
        temp.innerHTML = '<center>'+'<h3>반팔, 얇은 셔츠, 반바지, 면바지</h3>'+'<br>'
        	+'<img width="200px;" height="200px;" src="images/반팔.jpg"/>'
        	+'<img width="200px;" height="200px;" src="images/얇은 셔츠.jpg"/>'
        	+'<img width="200px;" height="200px;" src="images/반바지.jpg"/>'
        	+'<img width="200px;" height="200px;" src="images/면바지.jpg"/>'
        	+'</center>';
    }
    else if(temperatures<23&&temperatures>=20){
        temp.innerHTML = '<center>'+'<h3>얇은 가디건, 긴팔, 면바지, 청바지</h3>'+'<br>'
        	+'<img width="200px;" height="200px;" src="images/얇은 가디건.jpg"/>'
       		+'<img width="200px;" height="200px;" src="images/긴팔.jpg"/>'
       		+'<img width="200px;" height="200px;" src="images/면바지.jpg"/>'
        	+'<img width="150px;" height="200px;" src="images/청바지.jpg"/>'
        	+'</center>';
    }
    else if(temperatures<20&&temperatures>=17){
        temp.innerHTML = '<center>'+'<h3>얇은 니트, 맨투맨, 가디건, 청바지</h3>'+'<br>'
        	+'<img width="200px;" height="200px;" src="images/얇은 니트.jpg"/>'
        	+'<img width="200px;" height="200px;" src="images/맨투맨.jpg"/>'
        	+'<img width="200px;" height="200px;" src="images/가디건.jpg"/>'
        	+'<img width="150px;" height="200px;" src="images/청바지.jpg"/>'
        	+'</center>';
    }
    else if(temperatures<17&&temperatures>=12){
        temp.innerHTML = '<center>'+'<h3>자켓, 가디건, 야상, 스타킹, 청바지, 면바지</h3>'+'<br>'
        	+'<img width="200px;" height="200px;" src="images/자켓.jpg"/>'
        	+'<img width="200px;" height="200px;" src="images/가디건.jpg"/>'
        	+'<img width="200px;" height="200px;" src="images/야상.jpg"/>'
        	+'<img width="200px;" height="200px;" src="images/스타킹.jpg"/>'
        	+'<img width="150px;" height="200px;" src="images/청바지.jpg"/>'
        	+'<img width="200px;" height="200px;" src="images/면바지.jpg"/>'
        	+'</center>';
   }
    else if(temperatures<12&&temperatures>=9){
        temp.innerHTML = '<center>'+'<h3>자켓, 트렌치코트, 야상, 니트, 청바지, 스타킹</h3>'+'<br>'
        	+'<img width="200px;" height="200px;" src="images/자켓.jpg"/>'
        	+'<img width="200px;" height="250px;" src="images/트렌치코트.jpg"/>'
        	+'<img width="200px;" height="200px;" src="images/야상.jpg"/>'
        	+'<img width="200px;" height="200px;" src="images/니트.jpg"/>'
        	+'<img width="150px;" height="200px;" src="images/청바지.jpg"/>'
        	+'<img width="200px;" height="300px;" src="images/스타킹.jpg"/>'
        	+'</center>';
    }
    else if(temperatures<9&&temperatures>=5){
        temp.innerHTML = '<center>'+'<h3>코트, 가죽자켓, 히트텍, 니트, 레깅스</h3>'+'<br>'
        	+'<img width="200px;" height="200px;" src="images/코트.jpg"/>'
        	+'<img width="250px;" height="200px;" src="images/가죽자켓.jpg"/>'
        	+'<img width="200px;" height="200px;" src="images/히트텍.jpg"/>'
        	+'<img width="200px;" height="200px;" src="images/니트.jpg"/>'
        	+'<img width="200px;" height="200px;" src="images/레깅스.jpg"/>'
        	+'</center>';
    }
    else if(temperatures<5){
        temp.innerHTML = '<center>'+'<h3>패딩, 두꺼운 코트, 목도리, 기모 상의, 기모 하의</h3>'+'<br>'
        	+'<img width="200px;" height="200px;" src="images/패딩.jpg"/>'
        	+'<img width="200px;" height="250px;" src="images/두꺼운 코트.jpg"/>'
        	+'<img width="200px;" height="200px;" src="images/목도리.jpg"/>'
        	+'<img width="200px;" height="200px;" src="images/기모 상의.jpg"/>'
        	+'<img width="200px;" height="200px;" src="images/기모 하의.jpg"/>'
        	+'</center>';
    }
    
}
