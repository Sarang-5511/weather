console.log("success");
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
        const temp_final = parseInt(temp, 10);
        const visi_final = visibility / 1000;
        console.log(name);
        console.log(visi_final);
        document.getElementById("name").innerHTML = name;
        document.getElementById("desp").innerText = "Description : " + description;
        document.getElementById("temp").innerHTML = temp_final + " ° c";
        document.getElementById("speed").innerText = "Wind Speed : " + speed + " km\hr";
        document.getElementById("visibility").innerText = "Visibility : " + visi_final + " km";

    },
    searchresult: function () {
        const city = document.getElementById("city").value;
        if (city == "") {
            alert('Please enter the city name!');
        }
        else {


            this.fetchweather(city);
        }
    }
};


function search() {
    weather.searchresult();
    document.getElementById("city").value = null;
}