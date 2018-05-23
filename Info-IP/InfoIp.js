$(document).ready(init);

function init(){

    $("#btSearch").click(function(e){
        e.preventDefault();
        $("#collapseInfo").css("display","block");
        let access_key = 'YOUR_ACCESS_KEY';
       
        if ($("#formGroupExampleInput").val() !== ""){
        fetch(`http://api.ipstack.com/${$("#formGroupExampleInput").val()}?access_key=${access_key}`, { method: "POST"})
        .then(response => response.json())
        .then(
            function(data){
        
        console.log(data);
            $("#collapseInfo").append(`
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${data.location.country_flag}" alt="Card image cap">
                <div class="card-header"><span style="font-weight: bold;">Ip:</span> ${data.ip} | ${data.type}</div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><span style="font-weight: bold;">country:</span> ${data.country_name}</li>
                    <li class="list-group-item"><span style="font-weight: bold;">capital:</span> ${data.location.capital}</li>
                    <li class="list-group-item"><span style="font-weight: bold;">City:</span> ${data.city}</li>
                    <li class="list-group-item"><span style="font-weight: bold;">Region:</span> ${data.zip} | ${data.region_name}</li>
                </ul>
            </div>
            `);
      });
    }
    else{
        alert("you must enter an ip!")
    }

    });
}
