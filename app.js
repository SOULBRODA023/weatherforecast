//what do I need to build this weather application?
//fetch pictures for background that displays the season based on weather condition of the weather 
//fetch pictures for the status of the weather. might just be random picture downloaded or some kind of font awesome 


//Steps to follow!!

//first try to obtain important elements from the HTML for DOM manipulation.



//use async function to fetch weather API .
async function fetchWeatherApi(){
  const City = document.querySelector(".city");
  const time = document.querySelector(".time__date");
  const weatherCondition = document.querySelector(".weather__condition");
  const weatherImage = document.querySelector(".weather__image")
  const searchInput = document.querySelector(".search__city");
  const cityName = searchInput.value;
  const toggleSwitch = document.querySelector(".toggle");
  const text = document.querySelector(".text");
  const cloud = document.querySelector(".cloud")

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
  console.log(data.current.condition)
  if(toggleSwitch.checked){
    `${weatherCondition.textContent = data.current.temp_c}C`;
  }
  else{
    `${weatherCondition.textContent = data.current.temp_f}F`;
  }
  }
}
  catch{
    console.error("unable to fetch data")
  }
}
document.addEventListener("dblclick", fetchWeatherApi)
//use async function to fetch giphy API 
//after fetching fix relevant information to your DOM element.
//write a function that  changes the picture for present weather condition;
//write a function for the toggle farenheit and celsius 
 










// document.querySelector(".search__city").addEventListener("keydown", async (e) => {
//   if (e.key === "Enter") {
//       e.preventDefault();
//       const input = search.value; // Capture the current input value
//       await fetchWeatherApi(input); // Pass the input value to the function
//       search.value = ""; // Clear the input field
//   }
// });