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
  const region = document.querySelector(".region");
  const searchInput = document.querySelector(".search__city");
  const cityName = searchInput.value;


  try{
  let myApiKey = '2471772679344b31b0d121026232309';
  let myApiUrl =` http://api.weatherapi.com/v1/current.json?key=${myApiKey}&q=${cityName}`;
  //fetch the API using try 
  let getWeather = await fetch (myApiUrl);
  //if fetching API was successful , do the following;
  if(getWeather.ok){
  let data = await getWeather.json();
  City.textContent = data.location.name
  console.log(data.location);
  
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