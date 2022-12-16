//https://api.openweathermap.org/data/2.5/forecast?q=India&appid=826c4a5299f1929f7d07c483556cc38d&units=imperial

const url='https://api.openweathermap.org/data/2.5/forecast?q=India&appid=826c4a5299f1929f7d07c483556cc38d&cnt=10&units=imperial${country}';

var country= document.getElementById("country").Value;

var search=document.getElementById("search").addEventListener('click',getdata());



async function getdata(){
    const Response=await fetch(url);
    const data=await Response.json();
    console.log(data);
}
