console.log("Client server javascript file is loaded !");


const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const weatherResult = document.querySelector('#weatherResult')

//weatherResult.textContent = "Sex"

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value;
    fetch("/weather?location="+location).then((response) => {
        response.json().then((data) => {
            weatherResult.textContent = data.temperature +" °C"

        })
    })
})