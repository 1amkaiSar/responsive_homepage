function shownav() {
    let background = document.getElementById('background-menu');
    let menu = document.getElementById('menu');

    background.style.display = 'inline-block';
    menu.style.right = '0vw';
    document.body.style.overflow = 'hidden';
}

function closenav() {
    let background = document.getElementById('background-menu');
    let menu = document.getElementById('menu');

    background.style.display = 'none';
    menu.style.right = '-100%';
    document.body.style.overflow = 'scroll';
}