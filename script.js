const cat_btn = document.getElementById("cat_button");
const dog_btn = document.getElementById("dog_button");
const quote_btn = document.getElementById("quotes_button");

cat_btn.addEventListener("click", fetchCat)

function fetchCat() {
fetch('https://api.thecatapi.com/v1/images/search?limit=1&api_key=live_yFhkYVVtuyai69V5uEVGibE7w3lDNGkkEgz8IIZE9ZJfXtUcAYYchgyKnVuMio2r')        
    .then(response => response.json())
    .then(data => {
document.getElementById("pic_area").innerHTML 
= `<img src="${data[0].url}" alt="Cat" width="400">`;
    })
}
dog_btn.addEventListener("click", fetchDog)

function fetchDog() {
fetch('https://dog.ceo/api/breeds/image/random')        
    .then(response => response.json())
    .then(data => {
document.getElementById("pic_area").innerHTML 
= `<img src="${data.message}" alt="Dog" width="500">`;
    })
}
quote_btn.addEventListener("click", fetchWisdom)

function fetchWisdom(){
    fetch('https://api.api-ninjas.com/v1/quotes',{
        method: 'GET',
        headers: {
            'X-Api-Key': 'OHupLnp46aMr66Uf3l+fSQ==V2CizxFeGJaqRAj9'
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("pic_area").innerHTML 
        = `<h3>"${data[0].quote}"</h3>
        <p><br><br><br><br><br><br><br><br>- ${data[0].author}</p>`; 
    })
}