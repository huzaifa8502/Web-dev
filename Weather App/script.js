const apiKey = "5934ac7ff22663f5d485c863b5078562";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searhButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    switch (data.weather[0].main) {
      case "Clouds":
        weatherIcon.src = "./images/clouds.png";
        break;
      case "Clear":
        weatherIcon.src = "./images/clear.png";
        break;
      case "Rain":
        weatherIcon.src = "./images/rain.png";
        break;
      case "Drizzle":
        weatherIcon.src = "./images/drizzle.png";
        break;
      case "Mist":
        weatherIcon.src = "./images/mist.png";
        break;
    }
    document.querySelector(".weather").style.display = "block";
  }
  console.log(data);
}
function search() {
  checkWeather(searchBox.value);
}
searhButton.addEventListener("click", search);
searchBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") search();
});
