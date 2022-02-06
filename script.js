const search = document.getElementById('search');
let inputValue = document.getElementById('input');
let elements= document.getElementsByClassName('Div');
inputValue.addEventListener('keyup', (e)=>{
    if(e.keyCode ===13){
        e.preventDefault();
        search.click();
    }
});
search.addEventListener('click', async()=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=bf36ebd25be8147f707dfc6f07f27765`;
    let response = await fetch(url);
    let parsedData = await response.json();
    document.getElementById('city').children[0].innerHTML = parsedData.name;
    elements[0].children[1].innerHTML = Math.round(Math.abs(parsedData.main.temp-273));
    elements[1].children[1].innerHTML = Math.round(parsedData.main.pressure);
    elements[2].children[1].innerHTML = Math.round(Math.abs(parsedData.main.temp_max-273));
    elements[3].children[1].innerHTML = Math.round(Math.abs(parsedData.main.temp_max-273));
    elements[4].children[1].innerHTML = parsedData.weather[0].description;
    elements[5].children[1].innerHTML = Math.round(parsedData.main.humidity);
    document.get
    console.log(parsedData.main);

});

// now it is time to fetch data of weather form the api.

