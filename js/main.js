function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
          
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

function show(number) {
    document.getElementById("portfolio-block1").style.display = 'none';
    document.getElementById("portfolio-block2").style.display = 'none';
    document.getElementById("portfolio-block3").style.display = 'none';

    document.getElementById("portfolio-block" + number).style.display = 'block';
}