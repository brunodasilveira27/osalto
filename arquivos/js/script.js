const objnuvem1 = document.querySelector(".cenario-nuvem1");
const objnuvem2 = document.querySelector(".cenario-nuvem2");
const objnuvem3 = document.querySelector(".cenario-nuvem3");

const objjogador = document.querySelector(".jogador");

const objchao1 = document.querySelector(".cenario-chao1");
const objchao2 = document.querySelector(".cenario-chao2");
const objchao3 = document.querySelector(".cenario-chao3");

const objcactu = document.querySelector(".cenario-cactu");

function carregar() {

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
        
        cenario.nuvem1.style.left = xnuvem1 - 5 + "px";
        cenario.nuvem2.style.left = xnuvem2 - 5 + "px";
        cenario.nuvem3.style.left = xnuvem3 - 5 + "px";
        
        if(xnuvem1 < - 100) {
        
        cenario.nuvem1.style.left = "110%";
        cenario.nuvem2.style.left = "100%";
        
        } else if(xnuvem3 < - 200) {
        
        cenario.nuvem3.style.left = "140%";
        
        };
        
        let xchao1 = cenario.chao1.offsetLeft;
        let xchao2 = cenario.chao2.offsetLeft;
        let xchao3 = cenario.chao3.offsetLeft;
        
        cenario.chao1.style.left = xchao1 - 5 + "px";
        cenario.chao2.style.left = xchao2 - 5 + "px";
        cenario.chao3.style.left = xchao3 - 5 + "px";
        
        if(xchao1 < - 500) {
        
        cenario.chao1.style.left = 900 + "px";
        
        }
        
        else if(xchao2 < - 500) {
        
        cenario.chao2.style.left = 900 + "px";
        
        }
        
        else if(xchao3 < - 500) {
        
        cenario.chao3.style.left = 900 + "px";
        
        };
        
    }

};

const jogador = {

    personagem: objjogador,
    atualizar() {

    
    }
    
};

const obstaculo = {

    cactu: objcactu,
    atualizar() {
    
        let xcactu = obstaculo.cactu.offsetLeft;
        obstaculo.cactu.style.left = xcactu - 5 + "px";
        
        if(xcactu < - 60) {
        
        obstaculo.cactu.style.left = "100%";
        
        } else if(xcactu <= 80 && jogador.personagem.offsetTop <= 60) {
        
            alert("colisão!!");
        
        };
           
    }

};

function loop() {

    cenario.atualizar();
    jogador.atualizar();
    obstaculo.atualizar();
    requestAnimationFrame(loop);

};

window.addEventListener("load", carregar);
window.addEventListener("click", () => {

    jogador.personagem.classList.add("salto");
        setTimeout(() => {
        
            jogador.personagem.classList.remove("salto");
        
        }, 500);

});