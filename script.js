
let form = document.getElementById('calculadora');

//form.style.backgroundColor = 'blue';

const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const DIARIO = document.getElementById('diario');

CALCULAR.addEventListener('click', () => {
    //console.log('Se hizo click!')
    const PESO = document.getElementById('peso').value
    //console.log('dato ingresado: ', PESO)
    //validamos que se cargue un dato 
    if(PESO > 0){
        ERROR.style.display = 'none';
        var flujo = calcFlujo(PESO);

        if(PESO<=30){
            
            let diario = flujo/24;
            let mantenimiento = diario*1.5;
            FLU.innerHTML = "Volumen Diario = " + Math.ceil(flujo) + ' cc/hr ';
            DIARIO.innerHTML = 'Mantenimiento =  ' + Math.ceil(diario) + '  cc';
            MAN.innerHTML = 'Mantenimiento m+m/2 = ' + Math.ceil(mantenimiento) + '  cc/hr';
            
        } else{
            
            let flujoOp1 = flujo * 1500;
            let flujoOp2 = flujo * 2000;
            let diarioOp1 = flujoOp1/24;
            let diarioOp2 = flujoOp2/24;
            let mantenimientoOp1 = diarioOp1*1.5;
            let mantenimientoOp2 = diario*1.5;
            FLU.innerHTML = "Volumen Diario = Opción 1: " + flujoOp1 + ' cc/hr ó Opción 2: '+ flujoOp1 + ' cc/hr';
            DIARIO.innerHTML = 'Mantenimirnto = Opción 1: ' + Math.ceil(diarioOp1) + ' cc ó Opción 2: ' + Math.ceil(diarioOp2)+' cc';
            MAN.innerHTML = 'Mantenimiornto m+m/2 = Opcion 1: ' + Math.ceil(mantenimientoOp1) + ' cc/hr ó Opción 2: ' + Math.ceil(mantenimientoOp2) +' cc/hr';
            
        }
        FLU.style.display = 'block';
        MAN.style.display = 'block';
        DIARIO.style.display = 'block';

    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
        DIARIO.style.display = 'none';
    }
})

function calcFlujo(peso){
    if (peso>30){
        let superficieCorporal = ((peso*4)/(peso+90));
        return superficieCorporal;
    } else{
        return holyday(peso);
    }
}

function holyday(peso){
    let flujo;
    if(peso>20 && peso<=30){
        flujo= (peso-20)*20+1500;
    } else if(peso>10 && peso <=20){
        flujo = (peso-10)*50+1000;
    } else{
        flujo = peso*100;
    }
    return flujo;
}

/*function calcFlujo(peso){
    let resto = peso;
    let flujo = 0;
    if (resto>20){
        let aux = resto-20;
        flujo += aux*1;
        resto -=aux;

    } 
    if (resto>10){
        let aux = resto -10;
        flujo += aux*2;
        resto -= aux;

    }
    flujo += resto*4;
    return flujo;
}*/