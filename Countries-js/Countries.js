$(document).ready(init);


function init(){
    let search = $('#search');
    let showAll = $('.btn_ShowAll');
    let asia = $('.btnAsia');
    let africa = $('.btnAfrica');
    let america = $('.btnAmerica');
    let europe = $('.btnEurope');
    let oceania = $('.btnOceania');

    $('#search').keyup((e)=> {
        if(e.keyCode == 13) 
        Search();
    });
    
    $('.btnSearch').click(Search);
    
    function Search () {
        if(!search.val()) return false;
        
        fetch(`https://restcountries.eu/rest/v2/name/${search.val()}`)
        .then((response)=>response.json())
        .then(init)
        .then(offEfect)
        .catch(Error);
    }
    
    showAll.click(
    function start(){
        fetch(`https://restcountries.eu/rest/v2/all`)
        .then((response)=>response.json())
        .then(init)
        .then(offEfect);     
    });
    
    asia.click(()=>{
        fetch(`https://restcountries.eu/rest/v2/region/asia`)
        .then((response)=>response.json())
        .then(init)
        .then(offEfect);
    });
    
    africa.click(()=>{
        fetch(`https://restcountries.eu/rest/v2/region/africa`)
        .then((response)=>response.json())
        .then(init)
        .then(offEfect);
    });
    
    america.click(()=>{
        fetch(`https://restcountries.eu/rest/v2/region/americas`)
        .then((response)=>response.json())
        .then(init)
        .then(offEfect);
    });
    
    europe.click(()=>{
        fetch(`https://restcountries.eu/rest/v2/region/europe`)
        .then((response)=>response.json())
        .then(init)
        .then(offEfect);
    });
    oceania.click(()=>{
        fetch(`https://restcountries.eu/rest/v2/region/oceania`)
        .then((response)=>response.json())
        .then(init)
        .then(offEfect);
    });
    
    function init(data){
        $('.list').empty().append(`
                    ${data.map(lands => 
                   `<div class="card">
                        <img src="${lands.flag}" style="width:100%">
                          <h1 class="${lands.region}">${lands.name}</h1>
                          <p class="title">Region: ${lands.region}</p>
                          <p>Capital: ${lands.capital}</p>
                          <p>Area: ${lands.area}</p>
                    </div>`).join('')}`);
    }
    
    function Error(){
        $('.list').append(`
                    <div class="card">
                        <p class="title">Country Not Found.</p>
                    <div>`);
    }
    
    function offEfect(){
      $('#animation-loading').css({'display':'none'});
    }
}
