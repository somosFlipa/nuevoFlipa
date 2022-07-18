
let textoShow = document.querySelector("#textoShow");

function gliderMobileFunction (div, description) {
    switch (div){
        case 1:
            textoShow.innerHTML = `<p class=txt> ${description}</p>`
            document.getElementById('buttonUno').style.backgroundColor = '#F6007C';
            document.getElementById('buttonDos').style.backgroundColor = '#b9b9b9';
            document.getElementById('buttonTres').style.backgroundColor = '#b9b9b9';
            document.getElementById('buttonCuatro').style.backgroundColor = '#b9b9b9';
            break;
        case 2:
            textoShow.innerHTML = `<p class=txt> ${description}</p>`
            document.getElementById('buttonUno').style.backgroundColor = '#b9b9b9';
            document.getElementById('buttonDos').style.backgroundColor = '#F6007C';
            document.getElementById('buttonTres').style.backgroundColor = '#b9b9b9';
            document.getElementById('buttonCuatro').style.backgroundColor = '#b9b9b9';
            break;
        case 3:
            textoShow.innerHTML = `<p class=txt> ${description}</p>`
            document.getElementById('buttonUno').style.backgroundColor = '#b9b9b9';
            document.getElementById('buttonDos').style.backgroundColor = '#b9b9b9';
            document.getElementById('buttonTres').style.backgroundColor = '#F6007C';
            document.getElementById('buttonCuatro').style.backgroundColor = '#b9b9b9';
            break;
        case 4:
            textoShow.innerHTML = `<p class=txt> ${description}</p>`
            document.getElementById('buttonUno').style.backgroundColor = '#b9b9b9';
            document.getElementById('buttonDos').style.backgroundColor = '#b9b9b9';
            document.getElementById('buttonTres').style.backgroundColor = '#b9b9b9';
            document.getElementById('buttonCuatro').style.backgroundColor = '#F6007C';
            break;
        default:
            console.log('uno');
            document.getElementById('buttonUno').style.backgroundColor = '#F6007C';
            break;

    }
}