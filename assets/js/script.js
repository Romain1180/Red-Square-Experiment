let button = document.querySelector('#toggleRedSquare');
let redsquareApp = document.querySelector('.redsquare-app');
// let redsquareControls = document.querySelector('.redsquare-controls button');

button.addEventListener('click', clickButton);
function clickButton() {
    redsquareApp.classList.toggle('is-active');  //classlist = ajoute une classe dans la class redsquareApp
    let scaleUp = document.getElementById('scaleUp').disabled = false;
    let scaleDown = document.getElementById('scaleDown').disabled = false;
    let shapeCircle = document.getElementById('shapeCircle').disabled = false;
    let shapeSquare = document.getElementById('shapeSquare').disabled = false;
    let listControl = document.querySelector('.listControl');

    listControl.style.display = ('block')

    buttonScaleUp = document.querySelector('#scaleUp')
    buttonScaleUp.classList.remove('btn-light');
    buttonScaleUp.classList.toggle('btn-primary');

    buttonScaleDown = document.querySelector('#scaleDown')
    buttonScaleDown.classList.remove('btn-light');
    buttonScaleDown.classList.toggle('btn-primary');

    shapeCircle = document.querySelector('#shapeCircle')
    shapeCircle.classList.remove('btn-light');
    shapeCircle.classList.toggle('btn-primary');

    shapeSquare = document.querySelector('#shapeSquare')
    shapeSquare.classList.remove('btn-light');
    shapeSquare.classList.toggle('btn-primary');
}

// up
scaleUp.addEventListener('click', clickScalUp);
function clickScalUp() {
    let square = document.querySelector('.square')
    let width = square.offsetWidth
    let height = square.offsetHeight  //ou client clienHeight mais prend pas en compte les borders

    square.style.width = (width + 20) + 'px'
    square.style.height = (height + 20) + 'px'
    square.style.transition = ('1s');

    if(width > 300 && height > 300){
        square.style.width = ('320px')
        square.style.height = ('320px')  // taille max
    }
}

// down
scaleDown.addEventListener('click', clickScaleDown);
function clickScaleDown() {
    let square = document.querySelector('.square')

    let width = square.clientWidth
    let height = square.clientHeight

    square.style.width = (width - 20) + 'px'
    square.style.height = (height - 20) + 'px'
    square.style.transition = ('1s');

    if(width < 100 && height < 100){
        square.style.width = ('50px')
        square.style.height = ('50px')  // taille min
    }
}

// circle
shapeCircle.addEventListener('click', clickShapeCircle)
function clickShapeCircle() {
    let square = document.querySelector('.square')
    square.style.transition = ('1s');
    square.style.borderRadius = ('100%');
    
}

// square
shapeSquare.addEventListener('click', clickShapeSquare)
function clickShapeSquare() {
    let square = document.querySelector('.square')
    square.style.transition = ('1s');
    square.style.borderRadius = ('0%');
}

// direction
let xPos = 0;
let yPos = 0;

let Input = document.addEventListener('keydown', (event) => {
    let square = document.querySelector('.square')
    const nameTouche = event.key;
    switch(nameTouche)
    {
        case "z" :
            yPos -= 20;
            square.style.top = `calc(50% + ${yPos}px)`;
            square.style.transition = ('1s');

        break;  

        case "s" :
            yPos += 20;
            square.style.top = `calc(50% + ${yPos}px)`;
            square.style.transition = ('1s');


        break;

        case "q" :
            xPos -= 20;
            square.style.left = `calc(50% + ${xPos}px)`;
            square.style.transition = ('1s');


        break;

        case "d" :
            xPos += 20;
            square.style.left = `calc(50% + ${xPos}px)`;
            square.style.transition = ('1s');

        break;

        default :
            return;
    }
  }, false);
  