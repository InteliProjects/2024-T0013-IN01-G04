// Essas duas linhas criam a lista de personagens e de forma randomica escolhem o primeiro que irá aparecer
var personagens = ["gui", "gabriela", "lucao"];
//defina que o personagemAtual é igual a um dos personagens da lista
var personagemAtual = personagens[numeroAleatorio(3)];

class TitleScene extends Phaser.Scene {
  //tela de inicio do jogo
  constructor() {
    super({ key: "TitleScene" });
  }

  //constante que armazenara o audio da tela principal
  audioInicio;

  preload() {
    //preload das imagens do jogo, todas estao na tela de inicio, para poupar processamento nas cenas

    //preload das imagens da tela de titulo
    this.load.image("title", "src/assets/telaInicio.png");
    this.load.image("mouse", "src/assets/mouse.png");

    //preload das imagens da cutscene
    //background
    this.load.image("bg-1", "src/assets/cozinha.png");
    //personagem
    this.load.spritesheet("char", "src/assets/Char1.png", {
      frameWidth: 1024,
      frameHeight: 1024,
    });
    this.load.spritesheet("charMove", "src/assets/Char1.png", {
      frameWidth: 1024,
      frameHeight: 1024,
    });
    this.load.spritesheet("praia", "src/assets/praia.png", {
      frameWidth: 1920,
      frameHeight: 960,
    });
    this.load.spritesheet("rua","src/assets/rua.png",{
      frameWidth: 1920,
      frameHeight: 960
    });

    //Preload das imagens da GameScene
    this.load.image("bg", "src/assets/main_screen.png");

    this.load.image("guizinho", "src/assets/guizinho.png");
    this.load.image("gabriela", "src/assets/gabriela.png");
    this.load.image("lucao", "src/assets/lucao.png");

    this.load.image("termometro", "src/assets/sprite_2.png");

    this.load.spritesheet("camadas", "src/assets/tabletCamadas.png", {
      frameWidth: 912,
      frameHeight: 580,
    });

    this.load.spritesheet("temperaturas", "src/assets/termometroTemperaturas.png", {
      frameWidth: 1024,
      frameHeight: 1024,
    });

    this.load.spritesheet("tabletRealce", "src/assets/tablet_realce.png", {
      frameWidth: 576,
      frameHeight: 848,
    });

    this.load.spritesheet("guia", "src/assets/guia.png", {
      frameWidth: 1280,
      frameHeight: 1880,
    });

    this.load.spritesheet("guiaRealce", "src/assets/guia_realce.png", {
      frameWidth: 424,
      frameHeight: 944,
    });

    this.load.spritesheet("micRealce", "src/assets/mic_realce.png", {
      frameWidth: 320,
      frameHeight: 488,
    });

    this.load.spritesheet("termometroRealce", "src/assets/termometro_realce.png", {
      frameWidth: 120,
      frameHeight: 544,
    });

    this.load.image("balaoFala", "src/assets/balaofala.png");
    this.load.image("microfone", "src/assets/perguntas_mic.png");
    this.load.image("imagem", "src/assets/teste.png");
    this.load.image("pause", "src/assets/Pause.png");
    this.load.image("tutorial", "src/assets/tutorial.png");
    this.load.spritesheet("quizBotao", "src/assets/quiz_botao.png", {
      frameWidth: 632,
      frameHeight: 232,
    });
    this.load.image("fechar", "src/assets/fechar.png");

    //preload das telas de perguntas
    this.load.image("fundo", "src/assets/tela_quiz.png");
    this.load.image("bgColor", "src/assets/bgColor.png");
    this.load.image("seta", "src/assets/seta.png");
    //personagens da tela de perguntas
    this.load.spritesheet("guiExpressoes","src/assets/gui_expressoes.png",{
      frameWidth: 744,
      frameHeight: 976
    });
    this.load.spritesheet("gabiExpressoes","src/assets/gabriela_expressoes.png",{
      frameWidth: 672,
      frameHeight: 896
    });
    this.load.spritesheet("lucaoExpressoes","src/assets/lucao_expressoes.png",{
      frameWidth: 928,
      frameHeight: 1120
    });

    //preload da tela de feedback
    this.load.image("fundo_pontuacao", "src/assets/tela_pontuacao.png");
    this.load.spritesheet("marca", "src/assets/marca_pontuacao.png", {
      frameWidth: 128,
      frameHeight: 128,
    });

    //preload das musicas do jogo
    //trilha sonora
    this.load.audio("inicio", "src/assets/audio/trilha_sonora/No Worries.mp3");
    this.load.audio("principal","src/assets/audio/trilha_sonora/Sega Genesis Mini - Menu Music.mp3");
    //efeitos sonoros
    this.load.audio("pause_fx","src/assets/audio/fx/pause_fx.wav");
    this.load.audio("quiz_fx","src/assets/audio/fx/botão quiz.wav");
    this.load.audio("acertou","src/assets/audio/fx/acerto.wav");
    this.load.audio("errou","src/assets/audio/fx/erro.wav");
    this.load.audio("acertouTodas","src/assets/audio/fx/som de acertou todas.wav");
    this.load.audio("errouTodas","src/assets/audio/fx/som de errou todas.wav");
  }
  create() {
    //musica de fundo
    this.audioInicio = this.sound.add("inicio", { loop: true });
    this.audioInicio.play();

    //tela de titulo
    //adicionando background
    this.add.image(largura / 2, altura / 2, "title").setScale(0.5);

    //botao jogar
    //declarando o objeto
    const botaoJogar = this.add.graphics({
      lineStyle: { width: 2, color: 0xaa0000 },
      fillStyle: { color: 0x0000ff },
    });
    //cria a hitbox
    criarHitbox(botaoJogar, largura / 2 - 270 / 2, 321, 265, 64, () => {
      //musica da tela de inicio para
      this.audioInicio.stop();
      //começa as cutscenes
      this.scene.start("Cutscenes");
    });

    //cursor do mouse
    //adicionando o icone do mouse
    this.mouse = this.add.image(480, 240, "mouse").setScale(0.25).setOrigin(0.425, 0.43);
    //sumindo com o cursor padrao
    this.input.setDefaultCursor("none");
  }
  update() {
    //logica para o icone do mouse seguir o cursor padrao
    this.mouse.x = this.input.x;
    this.mouse.y = this.input.y;
  }
}

// Função responsável por escolher um número aleatório entre 0 e o número colocado no imput -1
function numeroAleatorio(contagemMax) {
  return Math.floor(Math.random() * contagemMax);
}