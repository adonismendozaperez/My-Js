$(document).ready(init);

function init(){
    GetQuote();
    $("#btRandom").click(()=>{
        $(".container").fadeIn(2000);
        $("#card-text").empty()
        $(".blockquote-footer").empty()
        
        setTimeout(()=>{
            GetQuote();
        },200)
            
    });

   

}

function GetQuote(){
    $.getJSON('https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?', function(data) {
        $("#card-text").append(data.quoteText);   
        $(".blockquote-footer").append((data.quoteAuthor == "") ? "Unknown" : data.quoteAuthor );     
        $('#btTwiter').attr("href",'https://twitter.com/intent/tweet?text=' + encodeURIComponent(data.quoteText)  + '-'  + data.quoteAuthor);
    });    
}
