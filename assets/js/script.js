let fotos = [ 
    'http://127.0.0.1:5500/CoffeGalery/src/img/primeira.jpg',
    'http://127.0.0.1:5500/CoffeGalery/src/img/segunda.jpg',
    'http://127.0.0.1:5500/CoffeGalery/src/img/terceira.jpg',
    'http://127.0.0.1:5500/CoffeGalery/src/img/quarta.jpg',
    'http://127.0.0.1:5500/CoffeGalery/src/img/quinta.jpg',
]

function proxima() {

    var principal = document.getElementById('imgGrande');
    var direita = document.getElementById('img_direita');
    var esquerda = document.getElementById('img_esquerda');
    
    var src = principal.src;
    var posicao = fotos.indexOf(src);

    var primeira = fotos[0];
    var ultima_foto = fotos.length - 1;

    var proxima = fotos[posicao + 1];
    var anterior = fotos[posicao];
    
    console.log('Posião: ' + posicao);


    if(posicao >= ultima_foto){
        principal.src = primeira;
        direita.src = fotos[1];
        esquerda.src = ultima_foto;
    } 

    else {
        principal.src = proxima;
        direita.src = proxima + 1;
        esquerda.src = anterior;
    }
    

} 

function anterior() {

    var principal = document.getElementById('imgGrande');
    var direita = document.getElementById('img_direita');
    var esquerda = document.getElementById('img_esquerda');
    
    var src = principal.src;
    var posicao = fotos.indexOf(src);
    let primeira = fotos[0];


    if(posicao == 0){
        esquerda.src = fotos[fotos.length - 2];
        principal.src = fotos[fotos.length - 1];
        direita.src = primeira;
    }
    else {
        console.log(posicao)
        direita.src = fotos[posicao]
        principal.src = fotos[posicao - 1];
        esquerda.src = fotos[posicao - 2]
    }
}


function primeira () {
    var principal = document.getElementById('imgGrande');
    var direita = document.getElementById('img_direita');
    var esquerda = document.getElementById('img_esquerda');

    principal.src = fotos[0];
    direita.src = fotos[1];
    esquerda.src = fotos[4];
}

function segunda () {
    var principal = document.getElementById('imgGrande');
    var direita = document.getElementById('img_direita');
    var esquerda = document.getElementById('img_esquerda');

    esquerda.src = fotos[0];
    principal.src = fotos[1];
    direita.src = fotos[2];
}

function terceira () {
    var principal = document.getElementById('imgGrande');
    var direita = document.getElementById('img_direita');
    var esquerda = document.getElementById('img_esquerda');

    esquerda.src = fotos[1];
    principal.src = fotos[2];
    direita.src = fotos[3];
}

function quarta () {
    var principal = document.getElementById('imgGrande');
    var direita = document.getElementById('img_direita');
    var esquerda = document.getElementById('img_esquerda');

    esquerda.src = fotos[2];
    principal.src = fotos[3];
    direita.src = fotos[4];
}

function quinta () {
    var principal = document.getElementById('imgGrande');
    var direita = document.getElementById('img_direita');
    var esquerda = document.getElementById('img_esquerda');

    esquerda.src = fotos[3];
    principal.src = fotos[4];
    direita.src = fotos[0];
}