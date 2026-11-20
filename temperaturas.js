console.log("Vamos a convertir temperaturas")

//de celsius a farenheit
function celsiusAFarenheit(celsius){
    return (celsius*1.8)+32;
}

//de celsius a kelvin
function celsiusAKelvin(celsius) {
  return celsius + 273.15;
}

const celsius = prompt('¿Temperatura en Celsius?');
const celsiusNum = parseFloat(celsius);   
