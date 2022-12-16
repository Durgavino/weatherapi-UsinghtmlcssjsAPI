//https://api.openweathermap.org/data/2.5/forecast?q=India&appid=826c4a5299f1929f7d07c483556cc38d&units=imperial


//https://api.openweathermap.org/data/3.0/onecall?q=India&exclude=minutely&appid=826c4a5299f1929f7d07c483556cc38d&cnt=10&units=imperial



//const url='https://api.openweathermap.org/data/2.5/forecast?q=India&appid=826c4a5299f1929f7d07c483556cc38d&cnt=10&units=imperial${country}';

//http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
var country= document.getElementById("country").Value;
//const url='http://api.openweathermap.org/data/2.5/forecast?q=canada&appid=826c4a5299f1929f7d07c483556cc38d&cnt=10&units=imperial&lang=en';

const url='https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=826c4a5299f1929f7d07c483556cc38d';

var search=document.getElementById("search");




async function getdata(){
    const Response=await fetch(url);
    const data=await Response.json();
    console.log(data);


    var weatherdata=data.list;
   
    //console.log(weatherdata[0].dt_txt);
    date1=(weatherdata[0].dt_txt);
    pressure1=(weatherdata[0].main.pressure);
    humidity1=(weatherdata[0].main.humidity);
    temp1=(weatherdata[0].main.temp);
    document.getElementById("date1").innerHTML=date1;
    document.getElementById("pressure1").innerHTML=pressure1;
    document.getElementById("humidity1").innerHTML=humidity1;
    document.getElementById("temp1").innerHTML=temp1;



    date2=(weatherdata[8].dt_txt);
    pressure2=(weatherdata[8].main.pressure);
    humidity2=(weatherdata[8].main.humidity);
    temp2=(weatherdata[8].main.temp);
    document.getElementById("date2").innerHTML=date2;
    document.getElementById("pressure2").innerHTML=pressure2;
    document.getElementById("humidity2").innerHTML=humidity2;
    document.getElementById("temp2").innerHTML=temp2;

    date3=(weatherdata[16].dt_txt);
    pressure3=(weatherdata[16].main.pressure);
    humidity3=(weatherdata[16].main.humidity);
    temp3=(weatherdata[16].main.temp);
    document.getElementById("date3").innerHTML=date3;
    document.getElementById("pressure3").innerHTML=pressure3;
    document.getElementById("humidity3").innerHTML=humidity3;
    document.getElementById("temp3").innerHTML=temp3;



    date4=(weatherdata[24].dt_txt);
    pressure4=(weatherdata[24].main.pressure);
    humidity4=(weatherdata[24].main.humidity);
    temp4=(weatherdata[24].main.temp);
    document.getElementById("date4").innerHTML=date4;
    document.getElementById("pressure4").innerHTML=pressure4;
    document.getElementById("humidity4").innerHTML=humidity4;
    document.getElementById("temp4").innerHTML=temp4;
    
    
    
    date5=(weatherdata[37].dt_txt);
    pressure5=(weatherdata[37].main.pressure);
    humidity5=(weatherdata[37].main.humidity);
    temp5=(weatherdata[37].main.temp);
    document.getElementById("date5").innerHTML=date5;
    document.getElementById("pressure5").innerHTML=pressure5;
    document.getElementById("humidity5").innerHTML=humidity5;
    document.getElementById("temp5").innerHTML=temp5;
   
    return weatherdata;
}

getdata();

