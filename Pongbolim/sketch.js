function setup() {
  createCanvas(600, 400);
  apitoInicial.play();
  torcida.loop();
}

function draw() {
  background(0, 100, 0);
  desenhaCampo();
  mostraBola();
  movimentaBola();
  verificaColisaoBorda();
  mostraBaliza(xBalizaTime1, yBalizaTime1);
  mostraBaliza(xBalizaTime2, yBalizaTime2);
  verificaColisaoBaliza1();
  verificaColisaoBaliza2();
  incluiPlacar();
  mostraTime1();
  mostraTime2();
  movimentaTime1();
  movimentaTime2();
  verificaColisaoJogador();
}