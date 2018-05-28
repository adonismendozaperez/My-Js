$(document).ready(init);

let grades = true;
function init(){
    getLocalition();   

    
}

function getLocalition() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showCoord);
    } else {
      alert('El navegador no dispone la capacidad de geolocalización');
    }
}

function showCoord(position) {
    fetch(`https://fcc-weather-api.glitch.me/api/current?lat=${position.coords.latitude}&lon=${position.coords.longitude}`)
    .then(response=>response.json())
    .then((data)=>{
        
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
        $("#ct").empty();
        $("#ct").append(`
            <h3 id="lbStatus"><small class="text-muted">${Math.round(temp - 273)} °C</small>
                <button type="button" id="btTemp" class="btn btn-sm btn-outline-dark">°F</button>
            </h3>
        `);
    }
    else{
        $("#ct").empty();
        $("#ct").append(`
            <h3 id="lbStatus"><small class="text-muted">${Math.round(9 / 5 * (temp - 273) + 32)} °F</small>
                <button type="button" id="btTemp" class="btn btn-sm btn-outline-dark">°C</button>
            </h3> `); 
    } 
 }
 
