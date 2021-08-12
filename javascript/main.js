function calcular () {
    let action1 = (prompt('Que tipo de operación queres realizar'))
    let num1 =  parseInt(prompt('Decime un numero'))
    let num2 = parseInt(prompt('Decime el siguiente numero'))

    if(action1 === 'sumar' || action1 === '+'){
        console.log(num1 + num2)
        return document.getElementById('resultado').innerHTML = num1 + num2
    }
    
    if (action1 === 'restar' || action1 === '-'){
        console.log(num1 + num2)
        return document.getElementById('resultado').innerHTML = num1 - num2
    }

    if (action1 === 'multiplicar' || action1 === '*'){
        console.log(num1 + num2)
        return document.getElementById('resultado').innerHTML = num1 - num2
    }

    if (numAction === 'dividir' || numAction === '/'){
        console.log(num1 + num2)
        return document.getElementById('resultado').innerHTML = num1 - num2
    }  else{
        alert('ingresa una opcion valida')
    }
}