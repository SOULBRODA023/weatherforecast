
//use async function to fetch weather API .
async function fetchWeatherApi(){
  const City = document.querySelector(".city");
  const time = document.querySelector(".time__date");
  const weatherImage = document.querySelector(".weather__image")
  const searchInput = document.querySelector(".search__city");
  const cityName = searchInput.value;
  const toggleSwitch = document.querySelector(".toggle");
  const text = document.querySelector(".text");
  const cloud = document.querySelector(".cloud");
  const main = document.querySelector("#main");
  

  try{
  let myApiKey = '2471772679344b31b0d121026232309';
  let myApiUrl =` http://api.weatherapi.com/v1/current.json?key=${myApiKey}&q=${cityName}`;
  
  //fetch the API using try 
  let getWeather = await fetch (myApiUrl, {
    method: 'GET', 
    mode: 'cors',});
  
  //if fetching API was successful , do the following;
  if(getWeather.ok){
  let data = await getWeather.json();
  City.textContent = `${data.location.name}, ${data.location.region}`;
  time.textContent = data.location.localtime;
  weatherImage.src = data.current.condition.icon;
  text.textContent = data.current.condition.text;
  cloud.textContent = data.current.cloud;
  toggleSwitch.addEventListener("click", toggleTemperature)
  main.style.display= "block";

   function toggleTemperature() {
      const temperatureElement = document.querySelector(".weather__condition"); 
      if (toggleSwitch.checked) {
         temperatureElement.textContent =  `${data.current.temp_c}°C`; // Display temperature in Celsius
      } else {
          temperatureElement.textContent = `${data.current.temp_f}°F`; // Display temperature in Fahrenheit
          
      }
  }
}
}
  catch{
   console.error("error fetching API")
    
  }
}
 document.querySelector(".search__city").addEventListener("keydown", (e) => {
   if (e.key === "Enter") {
   fetchWeatherApi()
 }
 });