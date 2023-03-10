
//key=826c4a5299f1929f7d07c483556cc38d


var search = document.getElementById('search');

function getdata() {
    search.addEventListener("click", function () {

        var country = document.getElementById("country").value;
        var searchresult = document.getElementById("searchresult");
        var countryarray = localStorage.getItem("key");

        if (!countryarray) {
            countryarray = [country];
        }
        else {
            countryarray = JSON.parse(countryarray);
            countryarray.push(country);
        }

        localStorage.setItem("key", JSON.stringify(countryarray));

        //the container is emptied before appending.
        searchresult.innerHTML = "";

        for (let i = 0; i < countryarray.length; i++) {
            //new item
            var x = document.createElement("button");

            // var uniquearray=Array.from(new Set(countryarray));
            // console.log(uniquearray);

            x.textContent = countryarray[i];


            //  console.log(x);
            //  console.log(countryarray[i]);

            searchresult.appendChild(x);



           
            x.style.backgroundColor = "white";
            x.setAttribute("class", "btn-history");
            x.style.borderRadius = "6px";
            x.style.padding = "20px 32px"
            x.style.fontSize = "18px";
            x.style.backgroundColor = "grey"
            x.style.color = "black";
            x.style.display = "block";
            x.style.marginBottom = "7px";
            x.style.width = "250px";
            x.style.marginTop = "10px";
            x.style.marginLeft="30px";
            


        }
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${country}&appid=826c4a5299f1929f7d07c483556cc38d&cnt=50&units=imperial&lang=en`;

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
                icone1 = `https://openweathermap.org/img/wn/${weatherdata[0].weather[0].icon}@2x.png`;
                document.getElementById("date1").innerHTML = country + ":  " + date1;
                document.getElementById("wind1").innerHTML = "Wind:" + wind1 + " MPS";
                document.getElementById("icon1").src = icone1;
                document.getElementById("humidity1").innerHTML = "Humidity:" + humidity1 + "%";
                document.getElementById("temp1").innerHTML = "Temp:" + temp1 + " ??F";


                date2 = (weatherdata[8].dt_txt);
                wind2 = (weatherdata[8].wind.speed);
                humidity2 = (weatherdata[8].main.humidity);
                temp2 = (weatherdata[8].main.temp);
                icone2 = `https://openweathermap.org/img/wn/${weatherdata[8].weather[0].icon}@2x.png`;
                document.getElementById("date2").innerHTML = date2;
                document.getElementById("wind2").innerHTML = "Wind:" + wind2 + " MPS";
                document.getElementById("icon2").src = icone2;
                document.getElementById("humidity2").innerHTML = "Humidity:" + humidity2 + "%";
                document.getElementById("temp2").innerHTML = "Temp:" + temp2 + " ??F";

                date3 = (weatherdata[16].dt_txt);
                wind3 = (weatherdata[16].wind.speed);
                humidity3 = (weatherdata[16].main.humidity);
                temp3 = (weatherdata[16].main.temp);
                icone3 = `https://openweathermap.org/img/wn/${weatherdata[16].weather[0].icon}@2x.png`;
                document.getElementById("date3").innerHTML = date3;
                document.getElementById("wind3").innerHTML = "Wind:" + wind2 + " MPS";
                document.getElementById("icon3").src = icone3;
                document.getElementById("humidity3").innerHTML = "Humidity:" + humidity3 + "%";
                document.getElementById("temp3").innerHTML = "Temp:" + temp3 + " ??F";

                date4 = (weatherdata[24].dt_txt);
                wind4 = (weatherdata[24].wind.speed);
                humidity4 = (weatherdata[24].main.humidity);
                temp4 = (weatherdata[24].main.temp);
                icone4 = `https://openweathermap.org/img/wn/${weatherdata[24].weather[0].icon}@2x.png`;
                document.getElementById("date4").innerHTML = date4;
                document.getElementById("wind4").innerHTML = "Wind:" + wind2 + " MPS";
                document.getElementById("icon4").src = icone4;
                document.getElementById("humidity4").innerHTML = "Humidity:" + humidity4 + "%";
                document.getElementById("temp4").innerHTML = "Temp:" + temp4 + " ??F";

                date5 = (weatherdata[33].dt_txt);
                wind5 = (weatherdata[33].wind.speed);
                humidity5 = (weatherdata[33].main.humidity);
                temp5 = (weatherdata[33].main.temp);
                icone5 = `https://openweathermap.org/img/wn/${weatherdata[33].weather[0].icon}@2x.png`;
                document.getElementById("date5").innerHTML = date5;
                document.getElementById("wind5").innerHTML = "Wind:" + wind2 + " MPS";
                document.getElementById("icon5").src = icone5;
                document.getElementById("humidity5").innerHTML = "Humidity:" + humidity5 + "%";
                document.getElementById("temp5").innerHTML = "Temp:" + temp5 + " ??F";

            })
            .catch(function (err) {
                console.log(err);

            }
            );

    }
    );

}

getdata();



searchresult.addEventListener('click', handleSearchHistoryClick);
function handleSearchHistoryClick(e) {
    
    if (!e.target.matches('.btn-history')) {
        return;
    } else {
       
        //var country = document.getElementById("country").value;

        var country = e.target.textContent;

        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${country}&appid=826c4a5299f1929f7d07c483556cc38d&cnt=50&units=imperial&lang=en`;

        fetch(url)
            // fetch(apiUrl)
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                //   renderItems(city, data);
                console.log(data);
                var weatherdata = data.list;
                //console.log(weatherdata);

                date1 = (weatherdata[0].dt_txt);
                wind1 = (weatherdata[0].wind.speed);
                humidity1 = (weatherdata[0].main.humidity);
                temp1 = (weatherdata[0].main.temp);
                icone1 = `https://openweathermap.org/img/wn/${weatherdata[0].weather[0].icon}@2x.png`;
                document.getElementById("date1").innerHTML = country + ":  " + date1;
                document.getElementById("wind1").innerHTML = "Wind:" + wind1 + " MPS";
                document.getElementById("icon1").src = icone1;
                document.getElementById("humidity1").innerHTML = "Humidity:" + humidity1 + "%";
                document.getElementById("temp1").innerHTML = "Temp:" + temp1 + " ??F";
                console.log(humidity1);


                date2 = (weatherdata[8].dt_txt);
                wind2 = (weatherdata[8].wind.speed);
                humidity2 = (weatherdata[8].main.humidity);
                temp2 = (weatherdata[8].main.temp);
                icone2 = `https://openweathermap.org/img/wn/${weatherdata[8].weather[0].icon}@2x.png`;
                document.getElementById("date2").innerHTML = date2;
                document.getElementById("wind2").innerHTML = "Wind:" + wind2 + " MPS";
                document.getElementById("icone2").src = icone2;
                document.getElementById("humidity2").innerHTML = "Humidity:" + humidity2 + "%";
                document.getElementById("temp2").innerHTML = "Temp:" + temp2 + " ??F";

                date3 = (weatherdata[16].dt_txt);
                wind3 = (weatherdata[16].wind.speed);
                humidity3 = (weatherdata[16].main.humidity);
                temp3 = (weatherdata[16].main.temp);
                icone3 = `https://openweathermap.org/img/wn/${weatherdata[16].weather[0].icon}@2x.png`;
                document.getElementById("date3").innerHTML = date3;
                document.getElementById("wind3").innerHTML = "Wind:" + wind2 + " MPS";
                document.getElementById("icon3").src = icon3;
                document.getElementById("humidity3").innerHTML = "Humidity:" + humidity3 + "%";
                document.getElementById("temp3").innerHTML = "Temp:" + temp3 + " ??F";

                date4 = (weatherdata[24].dt_txt);
                wind4 = (weatherdata[24].wind.speed);
                humidity4 = (weatherdata[24].main.humidity);
                temp4 = (weatherdata[24].main.temp);
                icone4 = `https://openweathermap.org/img/wn/${weatherdata[24].weather[0].icon}@2x.png`;
                document.getElementById("date4").innerHTML = date4;
                document.getElementById("wind4").innerHTML = "Wind:" + wind2 + " MPS";
                document.getElementById("icone4").src = icone4;
                document.getElementById("humidity4").innerHTML = "Humidity:" + humidity4 + "%";
                document.getElementById("temp4").innerHTML = "Temp:" + temp4 + " ??F";

                date5 = (weatherdata[33].dt_txt);
                wind5 = (weatherdata[33].wind.speed);
                humidity5 = (weatherdata[33].main.humidity);
                temp5 = (weatherdata[33].main.temp);
                icone5 = `https://openweathermap.org/img/wn/${weatherdata[33].weather[0].icon}@2x.png`;
                document.getElementById("date5").innerHTML = date5;
                document.getElementById("wind5").innerHTML = "Wind:" + wind2 + " MPS";
                document.getElementById("icone5").src = icone5;
                document.getElementById("humidity5").innerHTML = "Humidity:" + humidity5 + "%";
                document.getElementById("temp5").innerHTML = "Temp:" + temp5 + " ??F";


            })

            .catch(function (err) {
                console.log(err);

            }
            )


    }
}
