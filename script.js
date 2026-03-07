/*
1m = 3.281 feet
1 liter = 0.264gallon
1kg = 2.204 pound
*/


const inputEl = document.getElementById('input-el')
const lenEl = document.getElementById('len-cont')
const volEl = document.getElementById('vol-cont')
const massEl = document.getElementById('mass-cont')
const myBtn = document.getElementById('convert-btn')

myBtn.addEventListener("click", function () {
    volEl.textContent = ''
    massEl.textContent = ''
    lenEl.textContent = ''
    if (inputEl.value) {
        let data = Number(inputEl.value)
        let lenData = [data * 3.281, data / 3.281]
        let volData = [data * 0.264, data / 0.264]
        let massdata = [data * 2.204, data / 2.204]
        lenEl.innerText = `${data} meters = ${lenData[0].toFixed(3)} feet | ${data} feet = ${lenData[1].toFixed(3)} meters`
        volEl.textContent = `${data} litres = ${volData[0].toFixed(3)} gallons | ${data} gallons = ${volData[1].toFixed(3)} litres`
        massEl.textContent = `${data} kilograms = ${massdata[0].toFixed(3)} pounds | ${data} pounds = ${massdata[1].toFixed(3)} kilograms`
        console.log(inputEl.value)
        inputEl.value = ''
    }
        
})