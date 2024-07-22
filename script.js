function GetInfo() {
    let newName = document.getElementById("cityInput");
    let cityName = document.getElementById("cityName");
    /*const API_KEY= '36788483b47d720325bce837edf2a1a8';*/

fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=36788483b47d720325bce837edf2a1a8')
/*var WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=${API_KEY}`;*/
/*fetch('https://api.openweathermap.org/data/2.5/forecast?q=${newName}&appid=${API_KEY}')*/
.then(response => response.json())
.then(data => {
    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - 273.15).toFixed(1)+ "°";
    }
    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(2) + "°";
    }
     for(i = 0; i<5; i++){
        document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+data.list[i].weather[0].icon+".png";
    }
    localStorage.setItem('weatherData', JSON.stringify(data));
    console.log(data)
})

.catch(err => alert("Something Went Wrong: Try Checking Your Internet Coneciton"))
}

function DefaultScreen(){
    document.getElementById("cityInput").defaultValue = "";
    GetInfo();
}

var d = new Date();
var weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",];

function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
}