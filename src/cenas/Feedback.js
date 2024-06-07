//valores que serao utilizados para posicionamento
larguraBotao = 138.5;
alturaBotao = 62;
posYBotao = 348;

class Feedback extends Phaser.Scene {
  constructor() {
    super({ key: "Feedback" });
  }

  //objeto dos icones de certo ou errado
  acertos;

  //herdando o valor dos acertos
  init(respostas) {
    this.acertos = respostas;
  }

  create() {
    //musica de fundo
    this.audioInicio = this.sound.add("inicio", { loop: true });
    this.audioInicio.play();
    //efeito sonoro caso o jogador acerte/erre todas
    tocarMusica(this,this.acertos);

    //imagem de fundo
    this.add.image(480, 240, "fundo_pontuacao").setScale(0.5);

    // posição x das marcas
    let posX = 300;

    // verifica se as respostas foram certas ou erradas e coloca os icones correpondentes e cada posição
    for (let alternativa in this.acertos) {
      this.add.sprite(posX, 240, "marca", this.acertos[alternativa]).setOrigin(0, 0).setScale(0.5);
      posX += 74;
    }

    // Adiciona o texto pontuação posicionados e formatados
    this.add.text(largura / 2, 70, "Pontuação", {
        fontFamily: '"Press Start 2P"',
        align: "center",
        resolution: 5,
        fontSize: "40px",
        fill: "#ffffff",
      }).setOrigin(0.5);

    //adicionando o icone do mouse
    this.mouse = this.add.image(largura / 2, altura / 2, "mouse").setScale(0.25).setOrigin(0.425, 0.43);
    this.input.setDefaultCursor("none"); //sumindo com o cursor padrao

    // cria a hitbox do botão reiniciar
    const botaoReiniciar = this.add.graphics({
      lineStyle: { width: 2, color: 0xaa0000 },
      fillStyle: { color: 0x0000ff },
    });
    criarHitbox(botaoReiniciar,242,posYBotao,larguraBotao,alturaBotao,() => {
        //remove da array os valores das respostas anteriores permetindo que novas possam ser escritas
        for (var i = 0; i < 5; i++) {
          this.acertos.pop();
        }
        this.audioInicio.stop();
        // vai para tela de inicio
        this.scene.start("Cutscenes");
      }
    );

    // cria a hitbox do botão que vai para o próximo nível
    const botaoProximo = this.add.graphics({
      lineStyle: { width: 2, color: 0xaa0000 },
      fillStyle: { color: 0x0000ff },
    });
    criarHitbox(botaoProximo, 579, posYBotao, larguraBotao, alturaBotao, () => {
      //remove da array os valores das respostas anteriores permetindo que novas possam ser escritas
      for (var i = 0; i < 5; i++) {
        this.acertos.pop();
      }
      if(personagens.length != 1){
        //remove o personagem atual da array de personagens possíveis
        let index = personagens.indexOf(personagemAtual);
        if (index !== -1) {
          personagens.splice(index, 1);
        }
        personagemAtual = personagens[Math.floor(Math.random() * personagens.length)];
        this.audioInicio.stop();
        this.scene.start("Cutscenes");
      }else{
        personagens = ["gui", "gabriela", "lucao"];
        personagemAtual = personagens[Math.floor(Math.random() * personagens.length)];
        this.audioInicio.stop();
        this.scene.start("TitleScene");
      }
    });

    // definindo o mouse como primeira camada, para que nada sobreponha ele
    this.mouse.setDepth(9999);
  }

  update() {
    //logica para o icone do mouse seguir o cursor padrao, e a mesma logica seguida pelo passarinho
    this.mouse.x = this.input.x;
    this.mouse.y = this.input.y;
  }
}

//funcao para tocar a musica caso o jogador atinja um dos extremos
function tocarMusica(cena,respostas){
  let totalAcertos=0, totalErros=0;
  for(let i = 0; i<respostas.length;i++){
    if(respostas[i] == 0){
      totalAcertos++;
    }
    if(respostas[i]==1){
      totalErros++;
    }
    if(totalAcertos == 5){
      cena.sound.add("acertouTodas",{loop: false}).play();
    }else if(totalErros == 5){
      cena.sound.add("errouTodas",{loop: false}).play();
    }
  }
}