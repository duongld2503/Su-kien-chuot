
let ballImg = null;

function init() {
    ballImg = document.getElementById('ballimg');
    ballImg.style.position = 'relative';
    ballImg.style.right = '0px';
}

function moveball() {
    ballImg.style.right = parseInt(ballImg.style.right)+10+'px';
}