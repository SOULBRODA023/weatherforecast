//what do I need to build this weather application?
//fetch pictures for background that displays the season based on weather condition of the weather 
//fetch pictures for the status of the weather. might just be random picture downloaded or some kind of font awesome 


//Steps to follow!!

//first try to obtain important elements from the HTML for DOM manipulation.
let nameOfCity = document.querySelector(".city");
let time = document.querySelector(".time__date");
let weatherCondition = document.querySelector(".weather__condition");
let region = document.querySelector(".region");
let search = document.querySelector(".search__city");
let input = search.value

//use async function to fetch weather API .
async function fetchWeatherApi(){
  
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