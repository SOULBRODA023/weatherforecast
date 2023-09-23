//what do I need to build this weather application?
//fetch pictures for background that displays the season based on weather condition of the weather 
//fetch pictures for the status of the weather. might just be random picture downloaded or some kind of font awesome 


//Steps to follow!!

//first try to obtain important elements from the HTML for DOM manipulation.
const nameOfCity = document.querySelector(".city");
const time = document.querySelector(".time__date");
const weatherCondition = document.querySelector(".weather__condition");
const region = document.querySelector(".region");
const search = document.querySelector(".search__city");
const input = search.value

//use async function to fetch weather API .
async function fetchWeatherApi(){
  let myApiKey = '';
  let myApiUrl ='';
  let getWeather = await fetch (myApiUrl);
  let data = await getWeather.json();
  console.log("data.location");
}
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