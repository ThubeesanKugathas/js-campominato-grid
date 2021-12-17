// definisco la funzione del creare le box
function createBox(boxContainer) {
    const boxHtml = document.createElement('div');
    boxHtml.className = 'ms_box';

    boxContainer.append(boxHtml);
    boxHtml.addEventListener('click', function() {
        this.classList.toggle('ms_color');
    })
}

// funzione per definire dimensioni griglia
function boxNumber(max){
    for (let i = 0; i < max; i++) {
        const newBox = createBox(containerHtml);
    }
}

// definisco l'output del div container
let containerHtml = document.querySelector('.ms_box-container');

// definisco gli output dei button
const button1 = document.getElementById('ms_button1');
const button2 = document.getElementById('ms_button2');
const button3 = document.getElementById('ms_button3');

// button per definire griglia 10x10
button1.addEventListener('click', function () {
    boxNumber(100);
    containerHtml.classList.add('ms_container-1');
})

// button per definire griglia 9x9
button2.addEventListener('click', function () {
    boxNumber(81);
    containerHtml.classList.add('ms_container-2');
})

// button per definire griglia 7x7
button3.addEventListener('click', function () {
    boxNumber(49);
    containerHtml.classList.add('ms_container-3');
})

