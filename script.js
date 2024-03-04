function imgRandom() {
    var num = Math.floor(Math.random() * 7) + 1;
    var img = "styles/images/inicio" + num + ".jpg";
    document.getElementById("img").src = img;
    console.log(img);
}

setInterval(function() {
    imgRandom();
}, 5000);

//Img grande
function ampliarImg(imgElement) {
    var imgAmpliada = document.getElementById("imgAmpliada");
    var textClose = document.getElementById("textClose");
    imgAmpliada.src = imgElement.src;
    imgAmpliada.className = 'imgAmpliada-bordes';
    textClose.innerHTML = 'Cerrar';
    window.scrollTo(0, 0);
}

function textClose() {
    var imgAmpliada = document.getElementById("imgAmpliada");
    var textClose = document.getElementById("textClose");
    imgAmpliada.src = '';
    imgAmpliada.classList.remove('imgAmpliada-bordes');
    textClose.innerHTML = '';
}