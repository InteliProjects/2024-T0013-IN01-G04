//valores que serao utilizados para posicionamento
const larguraPergunta = 349;
const alturaPergunta = 91;
const larguraSeta = 93;
const alturaSeta = 40;

class QuizScene extends Phaser.Scene {
  constructor() {
    super({ key: "QuizScene" }); // Inicializando a cena com uma chave única 'Pergunta1'
  }

  //declarando os objetos que serao utilizados
  pergunta;
  textoOpcao1;
  textoOpcao2;
  textoOpcao3;
  textoOpcao4;
  certa;
  feedback;
  acertos;
  proximosDados;
  opcao1;
  opcao2;
  opcao3;
  opcao4;

  init(dados) {
    // herdando as informações do dicionário criado em game.js e atribuindo elas as variáveis
    this.pergunta = dados.pergunta;
    this.textoOpcao1 = dados.textoOpcao1;
    this.textoOpcao2 = dados.textoOpcao2;
    this.textoOpcao3 = dados.textoOpcao3;
    this.textoOpcao4 = dados.textoOpcao4;
    this.certa = dados.certa;
    this.feedback = dados.feedback;
    this.acertos = dados.acertos;
    this.proximosDados = dados.proximosDados;
  }

  create() {
    //adiciona o fundo
    this.add.image(largura / 2, altura / 2, "fundo").setScale(0.25);

    // Adiciona o texto presente na variável pergunta do dicionário, centralizado e com formatação específica
    this.add.text(largura / 2, 50 + 147 / 2, this.pergunta, {
        fontFamily: '"Press Start 2P"',
        align: "center",
        resolution: 5,
        fontSize: "16px",
        fill: "#ebecf1",
        wordWrap: { width: 600 },
      }).setOrigin(0.5, 0.5);

    // Adiciona os textos presente na variável opções do dicionário, posicionados e formatados
    this.add.text(122 + larguraPergunta / 2,249 + alturaPergunta / 2,this.textoOpcao1,{ 
        fontFamily: '"Press Start 2P"',
        align: "center",
        resolution: 5,  
        fontSize: "12px", 
        fill: "#ebecf1",
        wordWrap: { width: 300 }, 
    }).setOrigin(0.5, 0.5);
    this.add.text(488 + larguraPergunta / 2,249 + alturaPergunta / 2,this.textoOpcao2,{ 
        fontFamily: '"Press Start 2P"',
        align: "center",
        resolution: 5,  
        fontSize: "12px", 
        fill: "#ebecf1",
        wordWrap: { width: 300 }, 
    }).setOrigin(0.5),0.5;
    this.add.text(122 + larguraPergunta / 2,360 + alturaPergunta / 2,this.textoOpcao3,{ 
        fontFamily: '"Press Start 2P"',
        align: "center",
        resolution: 5,  
        fontSize: "12px", 
        fill: "#ebecf1",
        wordWrap: { width: 300 }, 
    }).setOrigin(0.5, 0.5);
    this.add.text(488 + larguraPergunta / 2,360 + alturaPergunta / 2,this.textoOpcao4,{ 
        fontFamily: '"Press Start 2P"',
        align: "center",
        resolution: 5,  
        fontSize: "12px", 
        fill: "#ebecf1",
        wordWrap: { width: 300 }, 
    }).setOrigin(0.5, 0.5);

    // Chamando a função criarOpcao e usar ela para cada uma das opções e posicionando elas
    this.opcao1 = this.add.graphics({
      lineStyle: { width: 2, color: 0xaa0000 },
      fillStyle: { color: 0x0000ff },
    });
    this.criarOpcao(this.opcao1, 122, 249, this.textoOpcao1);
    
    this.opcao2 = this.add.graphics({
      lineStyle: { width: 2, color: 0xaa0000 },
      fillStyle: { color: 0x0000ff },
    });
    this.criarOpcao(this.opcao2, 488, 249, this.textoOpcao2);

    this.opcao3 = this.add.graphics({
      lineStyle: { width: 2, color: 0xaa0000 },
      fillStyle: { color: 0x0000ff },
    });
    this.criarOpcao(this.opcao3, 122, 360, this.textoOpcao3);
    
    this.opcao4 = this.add.graphics({
      lineStyle: { width: 2, color: 0xaa0000 },
      fillStyle: { color: 0x0000ff },
    });
    this.criarOpcao(this.opcao4, 488, 360, this.textoOpcao4);

    //adicionando o icone do mouse
    this.mouse = this.add.image(largura / 2, altura / 2, "mouse").setScale(0.25).setOrigin(0.425, 0.43);
    //sumindo com o cursor padrão
    this.input.setDefaultCursor("none");
    // definindo o mouse como primeira camada, para que nada sobreponha ele
    this.mouse.setDepth(9999);
  }

  //Criando a função criarOpcao
  criarOpcao(opcao, posX, posY, textoOpcao) {
    criarHitbox(opcao, posX, posY, larguraPergunta, alturaPergunta, () => {
      // Destrói as opções de resposta para evitar múltiplas seleções
      this.destruirOpcoes();
      this.add.image(480, 240, "bgColor");
      this.add.image(893, 440, "seta").setScale(0.16);
      // Verifica se a opção escolhida pelo jogador é a correta.
      if (textoOpcao === this.certa) {
        //efeito sonoro de acerto
        this.sound.add("acertou",{loop:false}).play();
        // Se a opção for correta, exibe "ACERTOU" na tela. Com a formatação específica
        this.add.text(largura / 2, 100, "Acertou", {
            fontFamily: '"Press Start 2P"',
            resolution: 5,
            fontSize: "28px",
            align: "center",
            fill: "#52f067",
          }).setOrigin(0.5, 0.5);
          adicionarPersonagem(this,personagemAtual,0);
      } else {
        //efeito sonoro de erro
        this.sound.add("errou",{loop:false}).play();
        // Se a opção não for correta, exibe "Quase lá!" na tela. Com a formatação específica
        this.add.text(largura / 2, 100, "Quase lá! ", {
            fontFamily: '"Press Start 2P"',
            resolution: 5,
            fontSize: "28px",
            align: "center",
            fill: "#ffd87e",
          }).setOrigin(0.5, 0.5);
          adicionarPersonagem(this,personagemAtual,1);
      }

      // Adiciona o texto de feedback que está no dicionário
      this.add.text(largura / 2, altura / 2, this.feedback, {
          fontFamily: '"Press Start 2P"',
          resolution: 5,
          fontSize: "16px",
          fill: "#ebecf1",
          align: "center",
          wordWrap: { width: 500 },
        }).setOrigin(0.5, 0.5);

      // Criando uma hitbox para a seta de navegação
      const botaoSeta = this.add.graphics({
        lineStyle: { width: 2, color: 0xaa0000 },
        fillStyle: { color: 0x0000ff },
      });
      criarHitbox(botaoSeta,893 - larguraSeta / 2,440 - alturaSeta / 2,larguraSeta,alturaSeta,() => {
          if (textoOpcao === this.certa) {
            this.acertos.push(0);
          } else {
            this.acertos.push(1);
          }

          // Verifica se a próxima cena a ser carregada deve ser de Feedback
          if (this.proximosDados === "Feedback") {
            // Se a próxima cena é de Feedback, inicia essa cena.
            this.scene.start(this.proximosDados, this.acertos);
          } else {
            this.proximosDados.acertos = this.acertos;
            // Se a próxima cena não é de Feedback, assume que é uma cena de Pergunta.
            this.scene.start("QuizScene", this.proximosDados);
          }
        }
      );
    });
  }

  // destruir as hitbox das opções após as perguntas serem respondidas
  destruirOpcoes() {
    this.opcao1.destroy();
    this.opcao2.destroy();
    this.opcao3.destroy();
    this.opcao4.destroy();
  }

  update() {
    //logica para o icone do mouse seguir o cursor padrao, e a mesma logica seguida pelo passarinho
    this.mouse.x = this.input.x;
    this.mouse.y = this.input.y;
  }
}

//funcao que exibe o personagem feliz ou triste
function adicionarPersonagem(cena,personagem,a){
  switch(personagem){
    case "lucao":
      cena.add.sprite(0,altura,"lucaoExpressoes",a).setScale(0.25).setOrigin(0,1);
      break;
    case "gabriela":
      cena.add.sprite(0,altura,"gabiExpressoes",a).setScale(0.25).setOrigin(0,1);
      break;
    case "gui":
      cena.add.sprite(0,altura,"guiExpressoes",a).setScale(0.25).setOrigin(0,1);
      break;
    default:
      break;
  }
}