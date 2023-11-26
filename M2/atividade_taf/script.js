// Não altere o nome das letiavéis ou o texto do prompt! 
// Modifique apenas o tipo da letiavel!            
let gender = prompt('Genero');
let height = prompt('Altura');
let barReps = prompt('Repetições com barra');
let barSeconds = prompt('Tempo das repetições com barra');
let abs = prompt('Abdominais');
let runDistance = prompt('Distância da corrida');
let runTime = prompt('Tempo da corrida');
let swimDistance = prompt('Distância da natação');
let swimTime = prompt('Tempo da natação');
let diveTime = prompt(' Tempo de mergulho');

let result = false;

//Desenvolva seu código aqui:
if (gender == "male") {
    if (height >= 1.70 && (barReps >= 6 || barSeconds >= 15) && abs >= 41 && ((runDistance >= 3000 && runTime <= 720) || (runDistance >=5000 && runTime <=1200)) && ((swimDistance >= 100 && swimTime <= 60) || diveTime <= 30)){
        result = true;
    }      
}    else if ( gender == "female") {
        if (height >= 1.60 && (barReps >= 5 || barSeconds >= 12) && abs >= 41 && ((runDistance >= 4000 && runTime <= 900) || (runDistance >=6000 && runTime <=1320)) && ((swimDistance >= 100 && swimTime <= 60) || diveTime <= 30)){
            result = true;
    }
}

