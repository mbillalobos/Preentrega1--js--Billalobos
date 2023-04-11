alert("Bienvenido a la calculadora de la ley de Ohm")

//Variables

let formula = prompt("Ingrese la formula que desea calcular (Voltaje, Corriente o Resistencia)").toLowerCase();
let voltaje = "";
let corriente = "";
let resistencia = "";

//Ciclos

while(formula != "voltaje" && formula != "corriente" && formula != "resistencia"){
    alert("La fórmula ingresada es incorrecta, por favor, vuelva a ingresarla.");
    formula = prompt("Ingrese la formula que desea calcular (Voltaje, Corriente o Resistencia)").toLowerCase();
}

//Funciones

function calcularVoltaje(){
    return corriente * resistencia;
}
function calcularResistencia(){
    return voltaje / corriente;
}
function calcularCorriente(){
    return voltaje / resistencia;
}

//Condicionales

if(formula == "resistencia"){
    voltaje = parseInt(prompt("Ingrese el valor del voltaje (En Voltios)"));
    corriente = parseInt(prompt("Ingrese el valor de la corriente eléctrica (En Amperes)"));
    alert("La resistencia eléctrica necesaria para este circuito es de: "+calcularResistencia().toFixed(2)+" Ω");
} else if(formula == "voltaje"){
    resistencia = parseInt(prompt("Ingrese el valor de la resistencia (En Ohm)"));
    corriente = parseInt(prompt("Ingrese el valor de la corriente eléctrica (En Amperes)"));
    alert("El voltaje necesario para este circuito es de: "+calcularVoltaje().toFixed(2)+" Voltios");
} else if(formula == "corriente"){
    resistencia = parseInt(prompt("Ingrese el valor de la resistencia (En Ohm)"));
    voltaje = parseInt(prompt("Ingrese el valor del voltaje (En Voltios)"));
    alert("La corriente eléctrica necesaria para este circuito es de: "+calcularCorriente().toFixed(2)+" Amperes");
}

