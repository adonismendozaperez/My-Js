$(document).ready(init);
const content = $('.content');

function init(){

fetch(`https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=APIKEY`)
.then(response=>response.json())
.then(listBook)
.then(offEfect);

function offEfect(){
        $('#animation-loading').css({'display':'none'});
}

function listBook(data){
    if(data){
        $('.row').append(`
        ${data.results
            .map(book => 
               ` 
                    <div class="col">
                        <div class="card" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title">${book.title}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Author: ${book.author}</h6>
                                <p class="card-text">${book.description}</p>
                                <a href="#" class="card-link">Publisher by: ${book.publisher}</a>
                                <a href="#" class="card-link">Aprice: $${book.price}</a>
                            </div>
                        </div>
                    </div>
                    `).join('')}   
        `);
    }else{
        $('.content').append(`
            <p>Not found</p>
        `);
    }

    console.log(data);
}

}
