
//key=826c4a5299f1929f7d07c483556cc38d


function getdata() {
    search.addEventListener("click", function () {
        var country = document.getElementById("country").value;
        console.log(country);
        const url = `http://api.openweathermap.org/data/2.5/forecast?q=${country}&appid=826c4a5299f1929f7d07c483556cc38d&cnt=50&units=imperial&lang=en`;
       
        // console.log(url);
        fetch(url)
            // fetch(apiUrl)
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                //   renderItems(city, data);
                console.log(data);
                var weatherdata = data.list;
                console.log(weatherdata);
                date1 = (weatherdata[0].dt_txt);
                wind1 = (weatherdata[0].wind.speed);
                humidity1 = (weatherdata[0].main.humidity);
                temp1 = (weatherdata[0].main.temp);
                document.getElementById("date1").innerHTML = date1;
                document.getElementById("wind1").innerHTML = "Wind:" + wind1+" MPS";
                document.getElementById("humidity1").innerHTML = "Humidity:" + humidity1 +"%";
                document.getElementById("temp1").innerHTML = "Temp:" + temp1+" °F";



                date2 = (weatherdata[8].dt_txt);
                wind2 = (weatherdata[8].wind.speed);
                humidity2 = (weatherdata[8].main.humidity);
                temp2 = (weatherdata[8].main.temp);
                document.getElementById("date2").innerHTML = date2;
                document.getElementById("wind2").innerHTML =  "Wind:" + wind2+" MPS";
                document.getElementById("humidity2").innerHTML = "Humidity:" + humidity2 +"%";
                document.getElementById("temp2").innerHTML = "Temp:" + temp2+" °F";

                date3 = (weatherdata[16].dt_txt);
                wind3 = (weatherdata[16].wind.speed);
                humidity3 = (weatherdata[16].main.humidity);
                temp3 = (weatherdata[16].main.temp);
                document.getElementById("date3").innerHTML = date3;
                document.getElementById("wind3").innerHTML = "Wind:" + wind2+" MPS";
                document.getElementById("humidity3").innerHTML = "Humidity:" + humidity3 +"%";
                document.getElementById("temp3").innerHTML = "Temp:" + temp3+" °F";



                date4 = (weatherdata[24].dt_txt);
                wind4 = (weatherdata[24].wind.speed);
                humidity4 = (weatherdata[24].main.humidity);
                temp4 = (weatherdata[24].main.temp);
                document.getElementById("date4").innerHTML = date4;

                document.getElementById("wind4").innerHTML = "Wind:" + wind2+" MPS";
                document.getElementById("humidity4").innerHTML = "Humidity:" + humidity4 +"%";
                document.getElementById("temp4").innerHTML = "Temp:" + temp4+" °F";



                date5 = (weatherdata[27].dt_txt);
                wind5 = (weatherdata[27].wind.speed);
                humidity5 = (weatherdata[27].main.humidity);
                temp5 = (weatherdata[27].main.temp);
                document.getElementById("date5").innerHTML = date5;
                document.getElementById("wind5").innerHTML = "Wind:" + wind2+" MPS";
                document.getElementById("humidity5").innerHTML = "Humidity:" + humidity5 +"%";
                document.getElementById("temp5").innerHTML = "Temp:" + temp5+" °F";



            })
            .catch(function (err) {
                console.log(err);



            }


            );


    }
    );

}

getdata();

search.addEventListener('click',save);

function save(){
    var storedsearch=localStorage.getItem('country');
    var country = document.getElementById("country").value;

    if(storedsearch){
        storedsearch.push(country);

    }
    else{
        storedsearch=[country];
    }
    localStorage.setItem(country,JSON.stringify(storedsearch));
}

function get(){
    var storedsearch=localStorage.getItem('country');
    if(storedsearch){
        document.getElementById('country').value=storedsearch;
    }
    localStorage.getItem('country',JSON.parse(storedsearch));
}
get();