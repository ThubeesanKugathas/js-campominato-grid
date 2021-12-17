// definisco la funzione del creare le box
function createBox1(boxContainer) {
    const boxHtml = document.createElement('div');
    boxHtml.className = 'ms_box-1';

    boxContainer.append(boxHtml);
    boxHtml.addEventListener('click', function() {
        this.classList.toggle('ms_color');
    })
}

function createBox2(boxContainer) {
    const boxHtml = document.createElement('div');
    boxHtml.className = 'ms_box-2';

    boxContainer.append(boxHtml);
    boxHtml.addEventListener('click', function() {
        this.classList.toggle('ms_color');
    })
}

function createBox3(boxContainer) {
    const boxHtml = document.createElement('div');
    boxHtml.className = 'ms_box-3';

    boxContainer.append(boxHtml);
    boxHtml.addEventListener('click', function() {
        this.classList.toggle('ms_color');
    })
}

// definisco l'output del div container
let containerHtml = document.querySelector('.ms_box-container');

// definisco gli output dei button
const button1 = document.getElementById('ms_button1');
const button2 = document.getElementById('ms_button2');
const button3 = document.getElementById('ms_button3');

button1.addEventListener('click', function () {
    for (let i = 0; i < 100; i++) {
        const newBox = createBox1(containerHtml);
    }
})

button2.addEventListener('click', function () {
    for (let i = 0; i < 81; i++) {
        const newBox = createBox2(containerHtml);
    }
})

button3.addEventListener('click', function () {
    for (let i = 0; i < 49; i++) {
        const newBox = createBox3(containerHtml);
    }
})

