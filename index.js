console.log("success");
const months = [
    "January", "February",
    "March", "April", "May",
    "June", "July", "August",
    "September", "October",
    "November", "December"
];
const days = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];
setInterval(() => {
    var today = new Date();
    var today_day = today.getDay();
    console.log(today_day);
    console.log(today_day);
    var today_hour = today.getHours();
    var today_minute = today.getMinutes();

    if (today_hour < 12) {
        if (today_minute < 10) {
            var today_time = today_hour + " : 0" + today.getMinutes() + "   am";
            document.getElementById("current_time").innerHTML = today_time;
        }
        else {
            var today_time = today_hour + " : " + today.getMinutes() + "   am";
            document.getElementById("current_time").innerHTML = today_time;
        }

    }
    if (today_hour > 12) {
        if (today_minute < 10) {
            var today_time = today_hour - 12 + " : 0" + today.getMinutes() + "   pm";
            document.getElementById("current_time").innerHTML = today_time;
        }
        else {
            var today_time = today_hour - 12 + " : " + today.getMinutes() + "   pm";
            document.getElementById("current_time").innerHTML = today_time;
        }
    }

    var today_date = today.getDate() + " " + months[today.getMonth()];
    document.getElementById("current_date").innerHTML = today_date;
    document.getElementById("current_day").innerHTML = days[today_day] + ",   ";
}, 1000);

let weather = {
    fetchweather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=9d2a5930e52d19db79d3ed4e3641a101&units=metric").then((response) => response.json()).then((data) => this.displayweather(data));
    },
    displayweather: function (data) {
        console.log(data);
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, temp_min, temp_max } = data.main;
        const { speed } = data.wind;
        const { visibility } = data;
        const { sunrise } = data.sys;
        const { sunset } = data.sys;
        const {cod} = data;
        console.log("icon is "+icon);
        console.log(sunrise);
      
        var sunrise_utc = sunrise;
        const sunrise_date = new Date(sunrise_utc * 1000);
        const sunrise_hour = sunrise_date.getHours();
        const sunrise_min = sunrise_date.getMinutes();
        const sunrise_time = sunrise_hour + " : " + sunrise_min + " am";
        
      
        var sunset_utc = sunset;
        const sunset_date = new Date(sunset_utc * 1000);
        const sunset_hour = sunset_date.getHours();
        const sunset_min = sunset_date.getMinutes();
        console.log(sunset_min)
        const sunset_time = sunset_hour - 12 + " : " + sunset_min + " pm";

        const temp_final = parseInt(temp, 10);
        const visi_final = visibility / 1000;
        console.log(name);
        console.log(visi_final);
        document.getElementById("name").innerHTML = name;
        document.getElementById("desp").innerText = "Description : " + description;
        document.getElementById("temp").innerHTML = temp_final + "° c";
        document.getElementById("speed").innerText = "Wind Speed : " + speed + " km/hr";
        document.getElementById("visibility").innerText = "Visibility : " + visi_final + " km";
        document.getElementById("sunrise_time").innerHTML = "Sunrise time : " + sunrise_time;
        document.getElementById("sunset_time").innerHTML = "Sunset time  : " + sunset_time;
        document.getElementById("icon").innerText = "http://openweathermap.org/img/wn/"+icon+"@2x.png";

    },
    searchresult: function () {
        const city = document.getElementById("city").value;
        if (city == "") {
            alert('Please enter the city name!');
        }
        else {
            this.fetchweather(city);
            document.getElementById("city").value = null
        }
    }
};


function search() {
    weather.searchresult();

}