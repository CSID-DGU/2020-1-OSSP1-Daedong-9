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
            weather.temperature = Math.floor(data.main.temp - kelvin);//현재 온도
            weather.temperature_feel=Math.floor(data.main.feels_like-kelvin);//최고온도
            weather.temperature_high=Math.floor(data.main.temp_max-kelvin);//최고온도
            weather.temperature_low=Math.floor(data.main.temp_min-kelvin);//최저온도                 
            weather.description = firstLetter(data.weather[0].description);//날씨설명-영어
            weather.humidity=data.main.humidity;
            weather.iconId = data.weather[0].icon;//날씨 아이콘
            weather.city = data.name;//도시 이름
            weather.country = data.sys.country;//나라 이름
            weather.wind=data.wind.speed;//풍속

        })
        .then(function () {
            displayWeather();
        });
}

// Displays weather for the user:
function displayWeather() {
    //Fahrenheit converter:
    fahrenheit = Math.floor((weather.temperature / 5) * 8 + 32);
    //JavaScript HTML changes based on the data from api:
    icon.innerHTML = '<img src="icons/' + weather.iconId + '.png"/>';
    temp.innerHTML =
        "<p>현재 온도 : " + weather.temperature + "°C"+
        ", 체감 온도 : "+
        weather.temperature_feel+ "°C"+
        "<p> 최고 온도 : "+
        weather.temperature_high+ "°C"+
        ", 최저 온도 : "+
        weather.temperature_low+ "°C";
    description.innerHTML =
    	"<p> 습도 : "+
    	weather.humidity+"%"+
        "<p> 날씨 : " +
        wDescEngToKor(weather.description) +//날씨
        "</p> 풍속 : "+
        weather.wind+//바람
        "m/s</p>"
        ;
    
    
}

//Function to capitalize first letter of the description
function firstLetter(description) {
    let arr = description.split("");
    let arrTwo = arr[0].toUpperCase();
    arr[0] = arrTwo;
    console.log(arr);
    let text = arr.join("");
    return text;
}
//translate English to Korean
function wDescEngToKor(w_id) {
	var w_id_arr = ["Thunderstorm with light rain","Thunderstorm with rain","Thunderstorm with heavy rain","Light thunderstorm",
		"Thunderstorm","Heavy thunderstorm","Ragged thunderstorm","Thunderstorm with light drizzle","Thunderstorm with drizzle",
		"Thunderstorm with heavy drizzle","Light intensity drizzle","Drizzle","Heavy intensity drizzle","Light intensity drizzle rain",
		"Drizzle rain","Heavy intensity drizzle rain","Shower rain and drizzle","Heavy shower rain and drizzle","Shower drizzle",
		"Light rain","Moderate rain","Heavy intensity rain","Very heavy rain","Extreme rain",
		"Freezing rain","Light intensity shower rain","Shower rain","Heavy intensity shower rain","Ragged shower rain",
		"Light snow","Snow","Heavy snow","Sleet","Shower sleet",
		"Light rain and snow","Rain and snow","Light shower snow","Shower snow","Heavy shower snow",
		"Mist","Smoke","Haze","Sand, dust whirls","Fog",
		"Sand","Dust","Volcanic ash","Squalls","Tornado",
		"Clear sky","Few clouds","Scattered clouds","Broken clouds","Overcast clouds",
		"Tornado","Tropical storm","Hurricane","Cold","Hot",
		"Windy","Hail","Calm","Light breeze","Gentle breeze",
		"Moderate breeze","Fresh breeze","Strong breeze","High win","Storm",
		"Severe gale","Storm","Violent storm","Hurricane"];
	var w_kor_arr = ["가벼운 비를 동반한 천둥구름","비를 동반한 천둥구름","폭우를 동반한 천둥구름","약한 천둥구름",
	"천둥구름","강한 천둥구름","불규칙적 천둥구름","약한 연무를 동반한 천둥구름","연무를 동반한 천둥구름",
	"강한 안개비를 동반한 천둥구름","가벼운 안개비","안개비","강한 안개비","가벼운 적은비",
	"적은비",	"강한 적은비","소나기와 안개비","강한 소나기와 안개비","소나기",
	"약한 비","중간 비","강한 비","매우 강한 비","극심한 비",
	"우박","약한 소나기 비","소나기 비","강한 소나기 비","불규칙적 소나기 비",
	"가벼운 눈","눈","강한 눈","진눈깨비","소나기 진눈깨비",
	"약한 비와 눈","비와 눈","약한 소나기 눈","소나기 눈","강한 소나기 눈",
	"박무","연기","연무","모래 먼지","안개",
	"모래","먼지","화산재","돌풍","토네이도",
	"구름 한 점 없는 맑은 하늘","약간의 구름이 낀 하늘","드문드문 구름이 낀 하늘","구름이 거의 없는 하늘","구름으로 뒤덮인 흐린 하늘",
	"토네이도","태풍","허리케인","한랭","고온",
	"바람부는","우박","바람이 거의 없는","약한 바람","부드러운 바람",
	"중간 세기 바람","신선한 바람","센 바람","돌풍에 가까운 센 바람","돌풍",
	"심각한 돌풍","폭풍","강한 폭풍","허리케인"];
	for(var i=0; i<w_id_arr.length; i++) {
	if(w_id_arr[i]==w_id) {
	return w_kor_arr[i];
	break;
	}
	}
	return w_id;
	}


