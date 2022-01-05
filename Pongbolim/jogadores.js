//variáveis dos jogadores time 1
let xZagueiroTime1 = 100;
let xAtacanteTime1 = 380;
let yTime1 = 100;
let alturaJogador = 70;
let larguraJogador = 8;

//variáveis dos jogadores time 2
let xZagueiroTime2 = 492;
let xAtacanteTime2 = 220;
let yTime2 = 200;

let colidiu = false;

function mostraTime1() {
  fill(178,34,34);
  stroke(255);
  rect(xZagueiroTime1, yTime1, larguraJogador, alturaJogador);
  rect(xAtacanteTime1, yTime1, larguraJogador, alturaJogador);
}

function mostraTime2() {
  fill(65,105,225);
  stroke(255);
  rect(xZagueiroTime2, yTime2, larguraJogador, alturaJogador);
  rect(xAtacanteTime2, yTime2, larguraJogador, alturaJogador);
}

function movimentaTime1() {
  if (keyIsDown(UP_ARROW) && yTime1 > 0) {
    yTime1 -= 10;
  }
  if (keyIsDown(DOWN_ARROW) && yTime1 < height - alturaJogador) {
    yTime1 += 10;
  }
}

function movimentaTime2() {
  if (keyIsDown(87) && yTime2 > 0) {
    yTime2 -= 10;
  }
  if (keyIsDown(83) && yTime2 < height - alturaJogador) {
    yTime2 += 10;
  }
}

function verificaColisaoJogador() {
  colidiu = collideRectCircle(xZagueiroTime1, yTime1, larguraJogador, alturaJogador, xBola, yBola, diametro);
  if (colidiu) {
    velocidadeXBola *= -1;
    toque.play();
  }
  
  colidiu = collideRectCircle(xAtacanteTime1, yTime1, larguraJogador, alturaJogador, xBola, yBola, diametro);
  if (colidiu) {
    velocidadeXBola *= -1;
    toque.play();
  }

  colidiu = collideRectCircle(xZagueiroTime2, yTime2, larguraJogador, alturaJogador, xBola, yBola, diametro);
  if (colidiu) {
    velocidadeXBola *= -1;
    toque.play();
  }
  
  colidiu = collideRectCircle(xAtacanteTime2, yTime2, larguraJogador, alturaJogador, xBola, yBola, diametro);
  if (colidiu) {
    velocidadeXBola *= -1;
    toque.play();
  }
}