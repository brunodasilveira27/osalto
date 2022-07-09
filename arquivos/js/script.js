const objnuvem1 = document.querySelector(".cenario-nuvem1");
const objnuvem2 = document.querySelector(".cenario-nuvem2");
const objnuvem3 = document.querySelector(".cenario-nuvem3");

var nivel;
var jogando = false;
var pontos = [];
var pontos10 = [];

const objchao1 = document.querySelector(".cenario-chao1");
const objchao2 = document.querySelector(".cenario-chao2");
const objchao3 = document.querySelector(".cenario-chao3");

const objtelajogar = document.querySelector(".tela-jogar");

const objjogador = document.querySelector(".jogador");
const objobstaculo = document.querySelector(".obstaculo");

const spanpontos = document.querySelector(".span-pontos");

const telas = {

    jogar: objtelajogar,
    xtelajogar: 180,
    animar_telajogar() {
    
        let xtelajogar = telas.jogar.offsetLeft;
        
        telas.jogar.style.left = xtelajogar - 20 + "px";
        telas.xtelajogar = xtelajogar;
    
    },
    atualizar() {
    
        if(jogando && telas.xtelajogar > - 400) {
        
            let xtelajogar = telas.jogar.offsetLeft;
            telas.xtelajogar = xtelajogar;
            
            telas.animar_telajogar();
        
        };
    
    }

};

function carregar() {

    nivel = 5;
    
    loop();

};

const cenario = {

    nuvem1: objnuvem1,
    nuvem2: objnuvem2,
    nuvem3: objnuvem3,
    chao1: objchao1,
    chao2: objchao2,
    chao3: objchao3,
    atualizar() {
    
        let xnuvem1 = cenario.nuvem1.offsetLeft;
        let xnuvem2 = cenario.nuvem2.offsetLeft;
        let xnuvem3 = cenario.nuvem3.offsetLeft;
        
        cenario.nuvem1.style.left = xnuvem1 - nivel + "px";
        cenario.nuvem2.style.left = xnuvem2 - nivel + "px";
        cenario.nuvem3.style.left = xnuvem3 - nivel + "px";
        
        if(xnuvem1 < - 100) {
        
        cenario.nuvem1.style.left = "110%";
        
        }
        
        else if(xnuvem2 < - 100) {
        
        cenario.nuvem2.style.left = "130%";
        
        }
        
        else if(xnuvem3 < - 200) {
        
        cenario.nuvem3.style.left = "100%";
        
        };
        
        const xchao1 = cenario.chao1.offsetLeft;
        const xchao2 = cenario.chao2.offsetLeft;
        const xchao3 = cenario.chao3.offsetLeft;
        
        cenario.chao1.style.left = xchao1 - nivel + "px";
        cenario.chao2.style.left = xchao2 - nivel + "px";
        cenario.chao3.style.left = xchao3 - nivel + "px";
        
        if(xchao1 < - 500) {
        
        cenario.chao1.style.left = 900 + "px";
        
        }
        
        else if(xchao2 < - 500) {
        
        cenario.chao2.style.left = 900 + "px";
        
        }
        
        else if(xchao3 < - 500) {
        
        cenario.chao3.style.left = 900 + "px";
        
        };
    
    },

};

const jogador = {

    bds: objjogador,

};

const obstaculo = {

    caixa: objobstaculo,
    atualizar() {
    
        let xobstaculo = obstaculo.caixa.offsetLeft;
        
        obstaculo.caixa.style.left = xobstaculo - nivel + "px";
        
        if(xobstaculo < - 50) {
        
        obstaculo.caixa.style.left = "100%";
        pontos.push(1);
        spanpontos.innerHTML = pontos.length;
        pontos10 = pontos;
        
        } else if(pontos10.length > 10 && nivel < 25) {
        
            nivel += 1;
            pontos10 = [];
        
        };
    
    },
    colisao() {
    
        let xobstaculo = obstaculo.caixa.offsetLeft;
        let bdsbottom = window.getComputedStyle(jogador.bds).bottom.replace("px", "");
        
        if(xobstaculo <= 80 && bdsbottom <= 50) {
        
           console.log(bdsbottom);
        
        };
    
    }

};

function loop() {

    cenario.atualizar();
    telas.atualizar();
    obstaculo.colisao();
    
    if(jogando) {
    
    obstaculo.atualizar();
    
    };
    
    requestAnimationFrame(loop);

};

window.addEventListener("load", carregar);
window.addEventListener("click", () => {

    if(jogando == false) {
    
       jogando = true;
    
    } else if(jogando) {
    
        jogador.bds.classList.add("salto");
            setTimeout(() => {
            
                jogador.bds.classList.remove("salto");
            
            }, 500);
    
    };

});