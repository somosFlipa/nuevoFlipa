let textoUno = document.querySelector('#QH');
let textoDos = document.querySelector ('#SR');
let textoTres = document.querySelector ('#NS');

let TitleTextsMain = document.querySelector("#textoCarrusel");
let TitleTextsPorfolio = document.querySelector("#textoCarruselDos");
let TitleTextsWork = document.querySelector("#textoCarruselTres");

let gotaUno =document.querySelector('.gotaPuntoUno');
let gotaDos =document.querySelector('.gotaPuntoDos');
let gotaTres =document.querySelector('.gotaPuntoTres');


let gotaUnoS =document.querySelector('.gotaPuntoUnoS');
let gotaDosS =document.querySelector('.gotaPuntoDosS');
let gotaTresS =document.querySelector('.gotaPuntoTresS');
let gotaCuatroS =document.querySelector('.gotaPuntoCuatroS');

let gotaUnoT =document.querySelector('.gotaPuntoUnoT');
let gotaDosT =document.querySelector('.gotaPuntoDosT');
let gotaTresT =document.querySelector('.gotaPuntoTresT');
let gotaCuatroT =document.querySelector('.gotaPuntoCuatroT');


function Cards(div, description) {
    switch (div) {
        case 1: 
        console.log('uno')
        TitleTextsMain.innerHTML = `<p class="txt">${description}</p>`;
            gotaUno.style.display = 'flex'
            gotaDos.style.display = 'none'
            gotaTres.style.display = 'none'
            textoUno.style.display = 'grid';
            textoDos.style.display = 'none';
            textoTres.style.display = 'none';
            break;
        case 2:
            console.log('dos')
            TitleTextsMain.innerHTML = `<p class="txt">${description}</p>`;
            gotaUno.style.display = 'none'
            gotaDos.style.display = 'flex'
            gotaTres.style.display = 'none'
            textoUno.style.display = 'none';
            textoDos.style.display = 'grid';
            textoTres.style.display = 'none';
            break;
        case 3:
            console.log('tres')
            TitleTextsMain.innerHTML = `<p class="txt">${description}</p>`;
            gotaUno.style.display = 'none'
            gotaDos.style.display = 'none'
            gotaTres.style.display = 'flex'
            textoUno.style.display = 'none';
            textoDos.style.display = 'none';
            textoTres.style.display = 'grid';
            break;
        case 4:
            gotaUnoS.style.display = 'flex'
            gotaDosS.style.display = 'none'
            gotaTresS.style.display = 'none'
            gotaCuatroS.style.display = 'none'
            TitleTextsPorfolio.innerHTML = `<p class="txt">${description}</p>`;
            break;
        case 5: 
            gotaUnoS.style.display = 'none'
            gotaDosS.style.display = 'flex'
            gotaTresS.style.display = 'none'
            gotaCuatroS.style.display = 'none'
            TitleTextsPorfolio.innerHTML = `<p class="txt">${description}</p>`;
            break;
        case 6:
            gotaUnoS.style.display = 'none'
            gotaDosS.style.display = 'none'
            gotaTresS.style.display = 'flex'
            gotaCuatroS.style.display = 'none'
            TitleTextsPorfolio.innerHTML = `<p class="txt">${description}</p>`;
            break;
        case 7:
                gotaUnoS.style.display = 'none'
                gotaDosS.style.display = 'none'
                gotaTresS.style.display = 'none'
                gotaCuatroS.style.display = 'flex'
                TitleTextsPorfolio.innerHTML = `<p class="txt">${description}</p>`;
            break;
        case 8:
            gotaUnoT.style.display = 'flex'
            gotaDosT.style.display = 'none'
            gotaTresT.style.display = 'none'
            gotaCuatroT.style.display = 'none'
            TitleTextsWork.innerHTML = `<p class="txt">${description}</p>`;
            break;
        case 9: 
            gotaUnoT.style.display = 'none'
            gotaDosT.style.display = 'flex'
            gotaTresT.style.display = 'none'
            gotaCuatroS.style.display = 'none'
            TitleTextsWork.innerHTML = `<p class="txt">${description}</p>`;
            break;
        case 10:
            gotaUnoT.style.display = 'none'
            gotaDosT.style.display = 'none'
            gotaTresT.style.display = 'flex'
            gotaCuatroT.style.display = 'none'
            TitleTextsWork.innerHTML = `<p class="txt">${description}</p>`;
            break;
        case 11:
                gotaUnoT.style.display = 'none'
                gotaDosT.style.display = 'none'
                gotaTresT.style.display = 'none'
                gotaCuatroT.style.display = 'flex'
                TitleTextsWork.innerHTML = `<p class="txt">${description}</p>`;
            break;
        default:
        
            textoUno.style.display = 'grid';
            textoDos.style.display = 'none';
            textoTres.style.display = 'none';
            break;
    }
}

