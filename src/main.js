//altura e largura da tela do jogo
var largura = 960,altura = 480; 
var config = {
  //configuracoes basicas
  type: Phaser.AUTO,
  width: largura,
  height: altura,
  disableContextMenu: true, // Desativa a interação do navegador com o botão direito do mouse
  //CONSERTAR ENQUADRAMENTO
  scale: {mode: Phaser.Scale.FIT}, //Dimensiona o conteúdo para que ele preencha a tela inteira, mantendo sua proporção
  backgroundColor: "#acd7e8", //define a cor de fundo
  //Adicionando as classes/cenas do jogo, conforme a ordem do gameflow
  scene: [TitleScene,Cutscenes,GameScene,QuizScene,Feedback],
};
var game = new Phaser.Game(config);

//funcao para criar uma hitbox retangular
function criarHitbox(graphics,x,y,width,height,funcao){ 
  //cria o retangulo
  graphics.setInteractive(this.retangulo = new Phaser.Geom.Rectangle(x, y, width, height),Phaser.Geom.Rectangle.Contains);
  //realizar funcao ao clicar na hitbox
  graphics.on('pointerdown',funcao); 
  //ativa o debug
  //graphics.strokeRectShape(this.retangulo);
}

//funcoes salvaguardas
//as duas funcoes abaixo, desabilitam e habilitam os elementos quando uma janela e aberta, isso serve para que nao seja aberta outra tela enquanto outra ja esta aberta
function desabilitarElementos(elements) {
  //para cada elemento do vetor/array elements
  elements.forEach(element => {
    //desabilitar a interacao
    element.disableInteractive(); 
  });
}

function habilitarElementos(elements) {
    elements.forEach(element => {
      //habilitar a interacao
      element.setInteractive(); 
    });
  }

  /*como utilizar funcao criarHitbox:
  criarHitbox(graphics,posicao do retangulo em x, posicao do retangulo em y, largura do retangulo, altura do retangulo,()=>{adicionar o que deve acontecer ao clicar});
  */
