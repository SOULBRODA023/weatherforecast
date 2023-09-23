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
    
    const uniqueTimestamp = Date.now();
    const apiKey = '7abf0318cd22476dac3221445232209'; 
    

    try{
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input}&timestamp=${uniqueTimestamp}`;  
    const weatherApi = await fetch(apiUrl);
    if(weatherApi.ok){
    const getData = await weatherApi.json()
    console.log(getData.location);
    nameOfCity.textContent = `${getData.location.name}, ${getData.location.country}`;
    console.log(yourDate)
    }
    //show this error if try fails.
    }
    catch{
        console.error("not able to fetch API");
    }
}
//use async function to fetch giphy API 
//after fetching fix relevant information to your DOM element.
//write a function that  changes the picture for present weather condition;
//write a function for the toggle farenheit and celsius 
 

 document.querySelector(".search__city").addEventListener("keydown", (e)=>{
   if (e.key === "Enter") {
       // Prevent the default form submission behavior
       e.preventDefault();
      
        //Fetch weather data when Enter key is pressed
       fetchWeatherApi(search);
       e.target.value = "";
      
     }
 });