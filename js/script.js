// definisco la funzione del creare le box
function createBox(boxContainer) {
    const boxHtml = document.createElement('div');
    boxHtml.className = 'ms_box-1';
    boxContainer.append(boxHtml);

    boxHtml.addEventListener('click', function() {
        this.classList.toggle('ms_color');
    })
}

// definisco l'output del div container
let containerHtml = document.querySelector('.ms_box-container');

// rendere una funzione così da non ripetere il ciclo TODO!
for (let i = 0; i < 100; i++) {
    // outputHtml.innerHTML += '<div class="box"></div>';
    const newBox = createBox(containerHtml);
}

// definisco gli output dei button
const button1 = document.getElementById(ms_button1);
const button2 = document.getElementById(ms_button2);
const button3 = document.getElementById(ms_button3);

