$(document).ready(init);

    let grades = true;
    let temperature = 0;
function init(){
    getLocalition();        
   
   $("#btf").click(function(){
       grades = false;
       getTemperature(temperature , grades)
   });

   $("#btC").click(function(){
        grades = true;
        getTemperature(temperature , grades)
    });
}

function getLocalition() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showCoord);
    } else {
      alert('The browser does not have the geolocation capability');
    }
}

function showCoord(position) {
    fetch(`https://fcc-weather-api.glitch.me/api/current?lat=${position.coords.latitude}&lon=${position.coords.longitude}`)
    .then(response=>response.json())
    .then((data)=>{
        console.log(data);
        temperature = data.main.temp;
        getTemperature(data.main.temp, grades); 
        $(".card-header").append(`${data.name}`);
        data.weather.map((ds)=>{
            $("#card-text").append(`${ds.description}`);
            $(".card-header").append(`
                ${(ds.main === "Clouds" )? "<i class='fas fa-cloud'></i>": " <i class='fas fa-cloud'></i>"}
            `);
        })
    });
}


function getTemperature(temp , grades){
    if(grades){
        $("#ct").empty()
        $("#ct").append(`
        <h3 id="lbStatus"><small class="text-muted">${Math.round(temp - 273)} °C</small>
        </h3>
        `);
    }
    else{
        $("#ct").empty()
        $("#ct").append(`
        <h3 id="lbStatus"><small class="text-muted">${Math.round(9 / 5 * (temp - 273) + 32)} °F</small>
        </h3> `); 
    }
}