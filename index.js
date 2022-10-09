const meterToFeet =  3.281
const feetToMeter = 0.304

const literToGallon =  0.264
const gallonToLiter = 3.785

const kiloToPound =  2.204
const poundToKilo = 0.453

let convertBtn=document.getElementById("convert")
let inputEl=document.getElementById("nr")
let length=document.getElementById("length-el")
let volume=document.getElementById("volume-el")
let mass=document.getElementById("mass-el")
let number = 0

convertBtn.addEventListener("click", function(){
     convert()
})


function convert(){
    
    number = inputEl.value
    
    length.textContent= `${number} meters = ${number * meterToFeet.toFixed(3)} feet | ${number} feet = ${number * feetToMeter.toFixed(3)} meters`
    
    volume.textContent= `${number} liters = ${number * literToGallon.toFixed(3)} gallons | ${number} gallons = ${number * gallonToLiter.toFixed(3)} liters`
    
    mass.textContent= `${number} kilograms = ${number * kiloToPound.toFixed(3)} pound | ${number}  pound = ${number * poundToKilo.toFixed(3)} kilograms`
    
}  
