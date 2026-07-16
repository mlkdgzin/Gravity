let vida = 100;
let ouro = 0;
let nivel = 1;

let vidaMonstro = 50;

const monstros = [
    {nome:"🐺 Lobo",vida:50},
    {nome:"🧟 Zumbi",vida:70},
    {nome:"👹 Ogro",vida:100},
    {nome:"🐉 Dragão",vida:180}
];

let indice = 0;

function atualizar(){

document.getElementById("vida").innerHTML=vida;
document.getElementById("ouro").innerHTML=ouro;
document.getElementById("nivel").innerHTML=nivel;

document.getElementById("vidaMonstro").innerHTML=vidaMonstro;
document.getElementById("monstro").innerHTML=monstros[indice].nome;

}

function atacar(){

let dano = Math.floor(Math.random()*20)+10;

vidaMonstro -= dano;

let danoMonstro = Math.floor(Math.random()*15)+5;

if(vidaMonstro>0){
vida -= danoMonstro;
}

document.getElementById("log").innerHTML=
"Você causou <b>"+dano+
"</b> de dano.<br>O monstro atacou causando <b>"+danoMonstro+"</b>.";

if(vida<=0){
alert("Game Over!");
location.reload();
}

if(vidaMonstro<=0){

ouro+=20;
nivel++;

indice++;

if(indice>=monstros.length){
alert("🏆 Você derrotou todos os monstros!");
location.reload();
}

vidaMonstro=monstros[indice].vida;

document.getElementById("log").innerHTML+="<br><br>Você venceu!";
}

atualizar();

}

function curar(){

let cura = Math.floor(Math.random()*20)+10;

vida += cura;

if(vida>100)
vida=100;

document.getElementById("log").innerHTML=
"Você recuperou "+cura+" de vida.";

atualizar();

}

function fugir(){

document.getElementById("log").innerHTML=
"Você fugiu da batalha.";

}