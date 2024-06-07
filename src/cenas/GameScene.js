// Variável que armazenará o texto do timer na tela
let timer;
// variável que vai armazenar as informações gerais sobre o timer
let contagemTempo;
//estado do quiz, se esta habilitado ou nao
let estadoDoQuiz = false;
//Cria a variável que vai definir qual camada da pele foi queimada em casa personagem
let tipoDeQueimadura;
//Cria a variavel que vai definir a temperatura que aparece no termometro
let valorTemperatura;
let tabletAcessado = false;
let microfoneAcessado = false;
let guiaAcessado = false;
let termometroAcessado = false;

class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" });
  }

  init(dados) {
    //herdando musica da tela principal
    this.audioPrincipal = dados.audioPrincipal;
  }

  create() {
    tabletAcessado = false;
    microfoneAcessado = false;
    guiaAcessado = false;
    termometroAcessado = false;
    //mudar o personagem na tela e as informacoes nas ferramentas de acordo com o personagem na cutscene
    switch (personagemAtual) {
      case "gui":
        this.add.image(largura / 2, altura / 2, "guizinho").setScale(0.125);
        tipoDeQueimadura = 2;
        valorTemperatura = 2;
        break;
      case "gabriela":
        this.add.image(largura / 2, altura / 2, "gabriela").setScale(0.5);
        tipoDeQueimadura = 1;
        valorTemperatura = 3;
        break;
      case "lucao":
        this.add.image(largura / 2, altura / 2, "lucao").setScale(0.5);
        tipoDeQueimadura = 3;
        valorTemperatura = 4;
        break;
    }

    //imagem tela de fundo
    this.add.image(largura / 2, altura / 2, "bg").setScale(0.125);

    //Estruturacao do timer
    // Variável que define a duração do timer
    this.inicioTimer = 50;
    // Cria o texto que irá informar o tempo atual do timer
    timer = this.add.text(30,15,"Tempo para desbloquear o Quiz: " + formatarTempo(this.inicioTimer), {
      fontFamily: '"Press Start 2P"', 
      resolution: 5,
      fontSize: "11px", 
      fill: "#FDFDFD",
      align: 'center',
      wordWrap: { width: 400}
    });
    // Cria o objeto de define a cada quantos segundos o valor do timer será alterado
    // A função "fimTimer" esta no local que define o que vai ser feito a cada 1000 ms (1 segundo)
    contagemTempo = this.time.addEvent({
      delay: 1000,
      callback: fimTimer,
      callbackScope: this,
      loop: true,
    });
    // Começa o timer no formato "pausado" para que ele seja iniciado apenas ao final do tutorial
    contagemTempo.paused = true;

    //Elementos
    //tablet
    criarAnimacaoRealce(this, "tabletAnimacao", "tabletRealce", 0, 3);
    //adicionand o elemento de animacao do tablet
    this.tabletRealce = this.add.sprite(660, 150, "tabletRealce").setOrigin(0, 0).setScale(0.25);
    this.tabletRealce.anims.play("tabletAnimacao", true); //roda a animacao de realce do tablet
    const tablet = this.add.graphics({
      lineStyle: { width: 2, color: 0xaa0000 },
      fillStyle: { color: 0x0000ff },
    }); //objeto da hitbox do tablet
    criarAnimacaoFerramenta(this, "camada1Animacao", "camadas", 2, 3);
    criarAnimacaoFerramenta(this, "camada2Animacao", "camadas", 4, 5);
    criarAnimacaoFerramenta(this, "camada3Animacao", "camadas", 6, 7);
    criarHitbox(tablet, 660, 150, 140, 208, () => {
      desabilitarElementos(elementos);
      let camadas = this.add.sprite(largura / 2, altura / 2, "camadas").setScale(0.5);
      camadas.setDepth(4);

      let tituloTablet = this.add.text(largura / 2, 50, "Camadas Afetadas", {
        fill: "#FDFDFD",
        fontSize: "20px",
        resolution: 5,
        fontFamily: '"Press Start 2P"',
      }).setOrigin(0.5, 0.5);

      tituloTablet.setDepth(5);

      //when this is clicked the animation realce is set to frame 0 and stopped
      this.tabletRealce.setFrame(0);
      //pause a animacao de realce de todos os elementos
      this.micRealce. anims.stop();
      this.guiaRealce.anims.stop();
      this.termometroRealce.anims.stop();
      this.tabletRealce.anims.stop();
      tabletAcessado = true;

      // Definindo qual a animacao que aparecera no tablet
      switch (tipoDeQueimadura) {
        case 1:
          camadas.anims.play("camada1Animacao", true);
          break;

        case 2:
          camadas.anims.play("camada2Animacao", true);
          break;

        case 3:
          camadas.anims.play("camada3Animacao", true);
      }
      //Adiciona o botão de fechar o tablet
      fecharJanela(this, 700, 100, camadas, elementos, tituloTablet);
    });

    //guia
    criarAnimacaoRealce(this, "guiaAnimacao", "guiaRealce", 0, 3);
    this.guiaRealce = this.add.sprite(854, 128, "guiaRealce").setOrigin(0, 0).setScale(0.25);
    this.guiaRealce.anims.play("guiaAnimacao", true);
    const guia = this.add.graphics({
      lineStyle: { width: 2, color: 0xaa0000 },
      fillStyle: { color: 0x0000ff },
    });

    // Cria a imagem do guia e seus sprites
    criarHitbox(guia, 854, 128, 102.1, 232, () => {
      //adiciona um fundo preto na tela do jogo
      const fundoPreto = this.add.graphics();
      fundoPreto.fillStyle(0x000000, 0.8);
      fundoPreto.fillRect(0, 0, this.cameras.main.width, this.cameras.main.height);
      fundoPreto.setDepth(0);
      desabilitarElementos(elementos);
      criarAnimacaoFerramenta(this, "guia1", "guia", 0, 0);
      criarAnimacaoFerramenta(this, "guia2", "guia", 1, 1);
      criarAnimacaoFerramenta(this, "guia3", "guia", 2, 2);
      criarAnimacaoFerramenta(this, "guia4", "guia", 3, 3);
      let guia = this.add.sprite(largura / 2, altura / 2, "guia").setScale(0.25);
      guia.setDepth(0);


      this.guiaRealce.setFrame(0);
      this.micRealce. anims.stop();
      this.guiaRealce.anims.stop();
      this.termometroRealce.anims.stop();
      this.tabletRealce.anims.stop();
      guiaAcessado = true;


      // Parte escrita do guia
      // Seção sobre camadas

      let textoCamadas1 = this.add.text(largura/2, 110, "Camadas da pele", {
        fill: "#1D2A39",
        fontFamily:'"Press Start 2P"',
        fontSize: "12px",
        align: 'center',
        resolution: 5,
      }).setOrigin(0.5, 0.5);

      let textoCamadas2 = this.add.text(365,140,
      "Epiderme (1ª e 2ª Camada): É a camada mais externa da pele e tem a função de proteger o corpo contra o ambiente.\n\n" +
      "Derme (3ª Camada): Fica abaixo da epiderme, contém nervos e vasos sanguíneos.\n\n" +
      "Hipoderme (4ª Camada): É a camada mais profunda da pele.",
        {
          fill: "#1D2A39",
          fontFamily:'"Press Start 2P"',
          fontSize: "10px",
          resolution: 5,
          align: 'left',
          wordWrap: { width: 240}
        });
        
      let textoGraus1 = this.add.text(400, 220, "", {
        fill: "#1D2A39",
        fontFamily:'"Press Start 2P"',
        fontSize: "12px",
        align: 'center',
        resolution: 5,
      }).setOrigin(0.5, 0.5);

      let textoGraus2 = this.add.text(355,245, "", {
        fill: "#1D2A39",
        fontFamily:'"Press Start 2P"',
        fontSize: "10px",
        resolution: 5,
        align: 'left',
        wordWrap: { width: 240}
        });

      let textoCuidados1 = this.add.text(420, 95, "", {
        fill: "#1D2A39",
        fontFamily:'"Press Start 2P"',
        fontSize: "12px",
        align: 'center',
        resolution: 5,
      }).setOrigin(0.5, 0.5);

      let textoCuidados2 = this.add.text(355, 120, "", {
        fill: "#1D2A39",
        fontFamily:'"Press Start 2P"',
        fontSize: "10px",
        resolution: 5,
        align: 'left',
        wordWrap: { width: 240}
      });

      let textoSocorros1 = this.add.text(400, 230, "", {
        fill: "#1D2A39",
        fontFamily:'"Press Start 2P"',
        fontSize: "12px",
        align: 'center',
        resolution: 5,
      }).setOrigin(0.5, 0.5);

      let textoSocorros2 = this.add.text(355, 255, "", {
        fill: "#1D2A39",
        fontFamily:'"Press Start 2P"',
        fontSize: "10px",
        resolution: 5,
        align: 'left',
        wordWrap: { width: 240}
      });

      // Cria seção de camadas da pele na página 1
      const pagina1 = this.add.graphics({
        lineStyle: { width: 2, color: 0xaa0000 },
        fillStyle: { color: 0x0000ff },
      });

      textoCamadas1.setDepth(5);
      textoCamadas2.setDepth(5);
      textoGraus1.setDepth(5);
      textoGraus2.setDepth(5);
      textoCuidados1.setDepth(5);
      textoCuidados2.setDepth(5);
      textoSocorros1.setDepth(5);
      textoSocorros2.setDepth(5);

      criarHitbox(pagina1, 355, 380, 60, 50, () => {
        //destruindo texto
        textoCamadas1.destroy();
        textoCamadas2.destroy();
        textoGraus1.destroy();
        textoGraus2.destroy();
        textoCuidados1.destroy();
        textoCuidados2.destroy();
        textoSocorros1.destroy();
        textoSocorros2.destroy();

        //trocando animacao
        guia.anims.play("guia1", true);
        guia.anims.stop("guia2");
        guia.anims.stop("guia3");
        guia.anims.stop("guia4");

        //Adiciona título da seção
        textoCamadas1 = this.add.text(largura/2, 110, "Camadas da pele", {
          fill: "#1D2A39",
          fontFamily:'"Press Start 2P"',
          fontSize: "12px",
          align: 'center',
          resolution: 5,
        }).setOrigin(0.5, 0.5);
  
        textoCamadas2 = this.add.text(365,140,
        "Epiderme (1ª e 2ª Camada): É a camada mais externa da pele e tem a função de proteger o corpo contra o ambiente.\n\n" +
        "Derme (3ª Camada): Fica abaixo da epiderme, contém nervos e vasos sanguíneos.\n\n" +
        "Hipoderme (4ª Camada): É a camada mais profunda da pele.",
          {
            fill: "#1D2A39",
            fontFamily:'"Press Start 2P"',
            fontSize: "10px",
            resolution: 5,
            align: 'left',
            wordWrap: { width: 240}
          });

        textoCamadas1.setDepth(5);
        textoCamadas2.setDepth(5);;
      });

      // Cria a seção de mutos da página 2
      const pagina2 = this.add.graphics({
        lineStyle: { width: 2, color: 0xaa0000 },
        fillStyle: { color: 0x0000ff },
      });

      criarHitbox(pagina2, 420, 380, 55, 50, () => {
        //Destruindo o texto
        textoCamadas1.destroy();
        textoCamadas2.destroy();
        textoGraus1.destroy();
        textoGraus2.destroy();
        textoCuidados1.destroy();
        textoCuidados2.destroy();
        textoSocorros1.destroy();
        textoSocorros2.destroy();

        //trocando animacao
        guia.anims.stop("guia1");
        guia.anims.play("guia2", true);
        guia.anims.stop("guia3");
        guia.anims.stop("guia4");

        // Adiciona o título da seção
        textoCuidados1 = this.add.text(largura/2, 110, "Mitos Comuns", {
          fill: "#1D2A39",
          fontFamily:'"Press Start 2P"',
          fontSize: "12px",
          align: 'center',
          resolution: 5,
        }).setOrigin(0.5, 0.5);
        // Adiciona informações da seção
        textoCuidados2 = this.add.text(365,140,
          "Manteiga: Piora a queimadura, já que a gordura impede a liberação do calor e aumenta o risco de infecção.\n\n" +
          "Pasta de Dente: Pode causar irritações na pele.\n\n" +
          'Gelo: Aplicação direta na pele pode agravar o caso, causando um tipo de queimadura chamado de "geladura".',
            {
              fill: "#1D2A39",
              fontFamily:'"Press Start 2P"',
              fontSize: "10px",
              resolution: 5,
              align: 'left',
              wordWrap: { width: 240}
            });

        textoCuidados1.setDepth(5);
        textoCuidados2.setDepth(5);
      });

      // // Cria a seção de tipos de queimadura na página 3
      const pagina3 = this.add.graphics({
        lineStyle: { width: 2, color: 0xaa0000 },
        fillStyle: { color: 0x0000ff },
      });

      criarHitbox(pagina3, 485, 380, 55, 50, () => {
        textoCamadas1.destroy();
        textoCamadas2.destroy();
        textoGraus1.destroy();
        textoGraus2.destroy();
        textoCuidados1.destroy();
        textoCuidados2.destroy();
        textoSocorros1.destroy();
        textoSocorros2.destroy();

        //trocando animacao
        guia.anims.stop("guia1");
        guia.anims.stop("guia2");
        guia.anims.play("guia3", true);
        guia.anims.stop("guia4");

        // Adiciona título da seção
        textoGraus1 = this.add.text(largura/2, 110, "Tipos de Queimadura", {
          fill: "#1D2A39",
          fontFamily:'"Press Start 2P"',
          fontSize: "12px",
          align: 'center',
          resolution: 5,
        }).setOrigin(0.5, 0.5);
  
        textoGraus2 = this.add.text(365,140,
        "Térmicas: Causadas por calor advindo de fogo, líquidos quentes (especialmente em crianças), radiação e luz ultravioleta.\n\n" +
        "Químicas: Causados por substâncias químicas em contato com a pele ou até mesmo com a roupa.\n\n" +
        "Elétrica: Causada por corrente elétrica.",
          {
            fill: "#1D2A39",
            fontFamily:'"Press Start 2P"',
            fontSize: "10px",
            resolution: 5,
            align: 'left',
            wordWrap: { width: 240}
          });

        textoGraus1.setDepth(5);
        textoGraus2.setDepth(5);
      });

      // Cria a seção de graus de queimadura na página 4
        const pagina4 = this.add.graphics({
          lineStyle: { width: 2, color: 0xaa0000 },
          fillStyle: { color: 0x0000ff },
        });

        criarHitbox(pagina4, 550, 380, 55, 50, () => {
        textoCamadas1.destroy();
        textoCamadas2.destroy();
        textoGraus1.destroy();
        textoGraus2.destroy();
        textoCuidados1.destroy();
        textoCuidados2.destroy();
        textoSocorros1.destroy();
        textoSocorros2.destroy();

        //trocando animacao
        guia.anims.stop("guia1");
        guia.anims.stop("guia2");
        guia.anims.stop("guia3");
        guia.anims.play("guia4", true);

        // Adiciona título da seção
        textoSocorros1 = this.add.text(largura/2, 110, "Graus de Queimadura", {
          fill: "#1D2A39",
          fontFamily:'"Press Start 2P"',
          fontSize: "12px",
          align: 'center',
          resolution: 5,
        }).setOrigin(0.5, 0.5);
  
        textoSocorros2 = this.add.text(365,140,
        "Queimaduras de 1º Grau: Atingem a epiderme e a pele fica com aspecto seco, avermelhada e causa uma dor suportável.\n\n" +
        "Queimaduras de 2º Grau: Atingem a derme, existe formação de bolhas, pele avermelhada e dor intensa.\n\n" +
        "Queimaduras de 3º Grau: Atingem todas as camadas da pele, apresentando pouca ou nenhuma dor e pele branca ou carbonizada.",
          {
            fill: "#1D2A39",
            fontFamily:'"Press Start 2P"',
            fontSize: "10px",
            resolution: 5,
            align: 'left',
            wordWrap: { width: 240}
          });

        textoSocorros1.setDepth(5);
        textoSocorros2.setDepth(5);

        });
      
      //fecha o guia
      let fechar = this.add.image(646, 75, "fechar").setScale(0.125);
      fechar.setDepth(15);
      fechar.setInteractive();
      fechar.on("pointerdown", () => {
        if (tabletAcessado == false){
          this.tabletRealce.anims.play("tabletAnimacao", true);
        }
        if (guiaAcessado == false){
          this.guiaRealce.anims.play("guiaAnimacao", true);
        }
        if (termometroAcessado == false){
          this.termometroRealce.anims.play("termometroAnimacao", true);
        }
        if (microfoneAcessado == false){
          this.micRealce.anims.play("micAnimacao", true);
        }
        fundoPreto.destroy();
        guia.destroy();
        pagina1.destroy();
        pagina2.destroy();
        pagina3.destroy();
        pagina4.destroy();
        textoCamadas1.destroy();
        textoCamadas2.destroy();
        textoGraus1.destroy();
        textoGraus2.destroy();
        textoCuidados1.destroy();
        textoCuidados2.destroy();
        textoSocorros1.destroy();
        textoSocorros2.destroy();
        fechar.destroy();
        habilitarElementos(elementos);
      });
    });

    //termometro
    criarAnimacaoRealce(this, "termometroAnimacao", "termometroRealce", 0, 3);
    this.termometroRealce = this.add.sprite(576, 196, "termometroRealce").setOrigin(0, 0).setScale(0.25);
    this.termometroRealce.anims.play("termometroAnimacao", true);
    const termometro = this.add.graphics({
      lineStyle: { width: 2, color: 0xaa0000 },
      fillStyle: { color: 0x0000ff },
    }); //objeto da hitbox do termometro
    criarHitbox(termometro, 580, 196, 21.3, 140.6, () => {
      desabilitarElementos(elementos);

      let temperaturas = this.add.sprite(largura / 2, altura / 2, "temperaturas").setScale(0.5);
      temperaturas.setDepth(4);
      this.termometroRealce.setFrame(0);
      this.micRealce. anims.stop();
      this.guiaRealce.anims.stop();
      this.termometroRealce.anims.stop();
      this.tabletRealce.anims.stop();
      termometroAcessado = true;
      // Muda o que esta exibido no termometeo
      switch (valorTemperatura) {
        case 1:
          criarAnimacaoFerramenta(this,"temperatura1Animacao","temperaturas", 0, 1);
          temperaturas.anims.play("temperatura1Animacao", true);
          break;

        case 2:
          criarAnimacaoFerramenta(this,"temperatura2Animacao","temperaturas",2,3);
          temperaturas.anims.play("temperatura2Animacao", true);
          break;

        case 3:
          criarAnimacaoFerramenta(this,"temperatura3Animacao","temperaturas",4,5);
          temperaturas.anims.play("temperatura3Animacao", true);
          break;
        case 4:
          criarAnimacaoFerramenta(this,"temperatura4Animacao","temperaturas",6,7);
          temperaturas.anims.play("temperatura4Animacao", true);
          break;
      }
      //Adiciona o botão de fechar o termometro
      fecharJanela(this, 700, 100, temperaturas, elementos);
    });

    //microfone
    criarAnimacaoRealce(this, "micAnimacao", "micRealce", 0, 3);
    this.micRealce = this.add.sprite(182, 332, "micRealce").setOrigin(0, 0).setScale(0.25);
    this.micRealce.anims.play("micAnimacao", true);
    //cria o objeto microfone
    const microfoneEstado = this.add.graphics({
      lineStyle: { width: 2, color: 0xaa0000 },
      fillStyle: { color: 0x0000ff },
    });
    //funcao criarHitbox() para utilizar o botao do microfone
    criarHitbox(microfoneEstado, 185, 335, 72, 115, () => {
      //desabilitando os elementos da tela principal
      desabilitarElementos(elementos);
      //adiciona a imagem lateral
      let imagem = this.add.image(largura / 2, altura / 2, "microfone").setScale(0.25);

      this.micRealce.setFrame(0);
      this.micRealce. anims.stop();
      this.guiaRealce.anims.stop();
      this.termometroRealce.anims.stop();
      this.tabletRealce.anims.stop();
      microfoneAcessado = true;
      //adiciona as perguntas 1, 2 e 3
      let pergunta1 = this.add.text(482 + 350 / 2, 78 + 94 / 2, "O que aconteceu?", {
          fontFamily: '"Press Start 2P"',
          fill: "#ebecf1",
          fontSize: "12px",
          resolution: 5, // Aumenta a resolução do texto
        }).setOrigin(0.5, 0.5);
      let pergunta2 = this.add.text(482 + 350 / 2, 192 + 94 / 2, "Como você se machucou?", {
          fontFamily: '"Press Start 2P"',  
          fill: "#ebecf1",
          fontSize: "12px",
          resolution: 5, // Aumenta a resolução do texto
        }).setOrigin(0.5, 0.5);
      let pergunta3 = this.add.text(482 + 350 / 2, 306 + 94 / 2, "Como está sua queimadura?", {
          fontFamily: '"Press Start 2P"',  
          fill: "#ebecf1",
          fontSize: "12px",
          resolution: 5, // Aumenta a resolução do texto
        }).setOrigin(0.5, 0.5);
      //varivavel para indicar que o menu do microfone esta aberto
      let menuMicrofone = true;

      //se o menu do microfone estiver aberto:
      if (menuMicrofone) {
        const opcao1 = this.add.graphics({
          lineStyle: { width: 2, color: 0xaa0000 },
          fillStyle: { color: 0x0000ff },
        });
        //hitbox para a opcao 1
        criarHitbox(opcao1, 481, 76, 350, 94, () => {
          let imagem = this.add.image(220, 85, "balaoFala").setScale(0.25);
          //imagem e texto para a resposta 1
          let fullText = "";
          let currentText = '';
          let index = 0;
          let speed = 50; //velocidade de digitação em milissegundos.
          //Switch responsável por colocar a resposta da pergunta 1 correspondente para cada personagem
          switch (personagemAtual) {
            case "gui":
              fullText = "Eu estava na cozinha brincando e acabei derrubando uma panela com água fervendo em mim!";
              break;
            case "gabriela":
              fullText = "Eu estava aproveitando um dia ensolarado tirando uma soneca na praia, mas quando acordei eu estava toda vermelha!";
              break;
            case "lucao":
              fullText = "Eu estava empinando pipa na rua da minha casa quando ela prendeu em um fio de alta tensão e me deu um choque!";
              break;
          }
          this.time.addEvent({
            callback: function () {
              if (index < fullText.length) {
                currentText += fullText[index];
                dialogText.setText(currentText);
                index++;
              }
            },
            callbackScope: this,
            loop: true,
            delay: speed
          });
          var dialogText = this.add.text(225, 85, '', {
            fontFamily: '"Press Start 2P"',
            fontSize: '12px',
            resolution: 5,
            fill: '#040607',
            align: 'left',
            wordWrap: { width: 325}
          }).setOrigin(0.5, 0.5);
          setTimeout(() => {
            dialogText.destroy();
            imagem.destroy();
          }, 10000);
          });

        //cria a opcao 2
        const opcao2 = this.add.graphics({
          lineStyle: { width: 2, color: 0xaa0000 },
          fillStyle: { color: 0x0000ff },
        });
        //hitbox para opcao 2
        criarHitbox(opcao2, 481, 191, 350, 94, () => {
          let imagem = this.add.image(220, 85, "balaoFala").setScale(0.25);
          //imagem e texto para a resposta 1
          let fullText = [];
          let currentText = '';
          let index = 0;
          let speed = 50; //velocidade de digitação em milissegundos.
          //Switch responsável por colocar a resposta da pergunta 1 correspondente para cada personagem
          switch (personagemAtual) {
            case "gui":
              fullText = "Quando eu estava brincando na cozinha com meu aviãozinho de papel eu esbarrei sem querer no cabo da panela!";
              break;
            case "gabriela":
              fullText = "Meu protetor solar acabou, então minha avó disse pra eu usar óleo de coco em vez de comprar mais!";
              break;
            case "lucao":
              fullText = "Eu tentei puxar o fio pra ver se ele soltava, mas quando eu peguei nele, eu não consegui me mexer!";
              break;
          }
          this.time.addEvent({
            callback: function () {
              if (index < fullText.length) {
                currentText += fullText[index];
                dialogText.setText(currentText);
                index++;
              }
            },
            callbackScope: this,
            loop: true,
            delay: speed
          });
          var dialogText = this.add.text(225, 85, '', {
            fontFamily: '"Press Start 2P"',
            fontSize: '12px',
            resolution: 5,
            fill: '#040607',
            align: 'left',
            wordWrap: { width: 325}
          }).setOrigin(0.5, 0.5);
          setTimeout(() => {
            dialogText.destroy();
            imagem.destroy();
          }, 10000);
          });          
          
        //cria a opcao 3
        const opcao3 = this.add.graphics({
          lineStyle: { width: 2, color: 0xaa0000 },
          fillStyle: { color: 0x0000ff },
        });
        //hitbox para opcao 3
        criarHitbox(opcao3, 481, 306, 350, 94, () => {
          let imagem = this.add.image(220, 85, "balaoFala").setScale(0.25);
          //imagem e texto para a resposta 1
          let fullText = [];
          let currentText = '';
          let index = 0;
          let speed = 50; //velocidade de digitação em milissegundos.
          //Switch responsável por colocar a resposta da pergunta 1 correspondente para cada personagem
          switch (personagemAtual) {
            case "gui":
              fullText = "Dói demais quando encosta e parece ter umas bolhas pequenas no centro da área vermelha.";
              break;
            case "gabriela":
              fullText = "Toda a área queimada está vermelha e ardendo, algumas partes estão descascando.";
              break;
            case "lucao":
              fullText = "Para falar a verdade, não estou sentindo nada! Mas a minha pele está toda preta e dura.";
              break;
          }
          this.time.addEvent({
            callback: function () {
              if (index < fullText.length) {
                currentText += fullText[index];
                dialogText.setText(currentText);
                index++;
              }
            },
            callbackScope: this,
            loop: true,
            delay: speed
          });
          var dialogText = this.add.text(225, 85, '', {
            fontFamily: '"Press Start 2P"',
            fontSize: '12px',
            resolution: 5,
            fill: '#040607',
            align: 'left',
            wordWrap: { width: 325}
          }).setOrigin(0.5, 0.5);
          setTimeout(() => {
            dialogText.destroy();
            imagem.destroy();
          }, 10000);
          }
        );
        fecharJanela(this,882,126,imagem,elementos, "",menuMicrofone,pergunta1,pergunta2,pergunta3,opcao1,opcao2,opcao3);
      }
    });





    //pause
    // Cria a hitbox do botão de pause
    const pause = this.add.graphics({
      lineStyle: { width: 2, color: 0xaa0000 },
      fillStyle: { color: 0x0000ff },
    });

    criarHitbox(pause, 857.9, 33.7, 47.1, 50.7, () => {
      //toca o efeito sonoro do pause
      this.sound.add("pause_fx",{loop:false}).play();
      //adiciona um fundo preto na tela do jogo
      const fundoPreto = this.add.graphics();
      fundoPreto.fillStyle(0x000000, 0.8);
      fundoPreto.fillRect(0, 0, this.cameras.main.width, this.cameras.main.height);
      fundoPreto.setDepth(3);
      // Desabilita os elementos da tela quando o botão é precionado
      pause.disableInteractive();
      desabilitarElementos(elementos);
      // Pausa o timer
      contagemTempo.paused = true;
      //para com as animacoes do jogos
      this.termometroRealce.anims.stop();
      this.micRealce.anims.stop();
      this.tabletRealce.anims.stop();
      this.guiaRealce.anims.stop();
      
      // Pausa a música
      this.audioPrincipal.pause();
      // Faz surgir a tela de pause
      let imagem = this.add.image(480, 240, "pause").setScale(0.2);
      imagem.setDepth(20);
      // Cria as hitbox do botão de continuar somente após o surgimento da tela de pause
      const continuar = this.add.graphics({
        lineStyle: { width: 2, color: 0xaa0000 },
        fillStyle: { color: 0x0000ff },
      });
      criarHitbox(continuar, 315, 215, 130, 49.2, () => {
        // Destroi a hitbox do botão de continuar e recomeçar após o botão continuar ser selecionado
        continuar.destroy();
        recomecar.destroy();
        pause.setInteractive();
        // Destroi a tela de pause
        imagem.destroy();
        // Faz os elementos serem habilitados novamente
        habilitarElementos(elementos);
        // Da continuidade a contagem do timer
        contagemTempo.paused = false;
        // Resume a música do jogo
        this.audioPrincipal.resume();
        //recomeca as animacoes
        if (tabletAcessado == false){
          this.tabletRealce.anims.play("tabletAnimacao", true);
        }
        if (guiaAcessado == false){
          this.guiaRealce.anims.play("guiaAnimacao", true);
        }
        if (termometroAcessado == false){
          this.termometroRealce.anims.play("termometroAnimacao", true);
        }
        if (microfoneAcessado == false){
          this.micRealce.anims.play("micAnimacao", true);
        }
        fundoPreto.destroy();
      });

      // Cria a hitbox do botão de recomeçar o jogo
      const recomecar = this.add.graphics({
        lineStyle: { width: 2, color: 0xaa0000 },
        fillStyle: { color: 0x0000ff },
      });
      criarHitbox(recomecar, 515, 213, 130, 53.2, () => {
        this.audioPrincipal.stop();
        // Quando o botão for precionado o programa inicia novamente a tela "TitleScene"
        this.scene.start("TitleScene");
      });
    });








    //quiz
    criarAnimacaoFerramenta(this, "estatico", "quizBotao", 4, 4); //cria a animacao estatica do botao de quiz
    criarAnimacaoRealce(this, "quizAnimacao", "quizBotao", 0, 3);
    this.quizBotao = this.add.sprite(757, 412, "quizBotao").setOrigin(0, 0).setScale(0.25);
    this.quizBotao.setDepth(0);
    this.quizBotao.anims.play("estatico", true);












    //tutorial
    // Adiciona a imagem do balão de tutorial
    this.balaoTutorial = this.add.image(480, 240, "tutorial").setScale(0.5);
    this.balaoTutorial.setDepth(10);
    // Adiciona o texto presente no tutorial
    let fullText = "Utilize das ferramentas presentes nesta tela para colher mais informações sobre o que aconteceu.";
    let currentText = '';
    let index = 0;
    let speed = 50; //velocidade de digitação em milissegundos.
    //Switch responsável por colocar a resposta da pergunta 1 correspondente para cada personagem
    this.time.addEvent({
      callback: function () {
        if (index < fullText.length) {
          currentText += fullText[index];
          textTutorial.setText(currentText).setDepth(11);
          index++;
        }
      },
      callbackScope: this,
      loop: true,
      delay: speed
    });
    var textTutorial = this.add.text(65, 370, '', {
      fontFamily: '"Press Start 2P"',
      fontSize: '14px',
      resolution: 5,
      fill: '#000000',
      align: 'left',
      wordWrap: { width: 710}
    }).setOrigin(0, 0);
    textTutorial.setDepth(11);

    // Cria a hitbox da seta que finaliza o tutorial
    const tutorial = this.add.graphics({
      lineStyle: { width: 2, color: 0xaa0000 },
      fillStyle: { color: 0x0000ff },
    });
    
    criarHitbox(tutorial, 773, 370, 140.9, 90.2, () => {
      fullText = "";
      // Após o click na seta:
      // Habilita a funcionalidade de todos os elementos da tela
      habilitarElementos(elementos);
      //Destroi a hitbox do tutorial
      tutorial.destroy();
      // Destroi o balão e a escrita da tela de tutorial
      this.balaoTutorial.destroy();
      textTutorial.destroy();
      // Inicia efetivamente a contagem do timer
      contagemTempo.paused = false;
    });

    //salvaguardas
    //lista de elementos usados na cena, utilizada nas funcoes desabilitarElementos e habilitarElementos
    const elementos = [
      tablet,
      guia,
      pause,
      termometro,
      microfoneEstado,
    ];

    // Adiciona o listener para o evento de visibilidade da página
    document.addEventListener(
      "visibilitychange",
      this.mudancaDeVisibilidade.bind(this),
      false
    );

    //cursor do mouse
    this.mouse = this.add.image(480, 240, "mouse").setScale(0.25).setOrigin(0.425, 0.43);
    this.input.setDefaultCursor("none");
    // definindo o mouse como primeira camada, para que nada sobreponha ele
    this.mouse.setDepth(9999);
    desabilitarElementos(elementos);
  }

  update() {
    this.mouse.x = this.input.x;
    this.mouse.y = this.input.y;
  }

  mudancaDeVisibilidade() {
    if (document.hidden) {
      this.scene.pause(); // Pausa a cena atual quando a aba perde o foco
    } else {
      this.scene.resume(); // Despausa a cena atual quando a aba ganha foco novamente
    }
  }
}

//funcao para criar a animacao de realce das ferramentas
function criarAnimacaoRealce(cena, nomeAnimacao, spritesheet, a, b) {
  cena.anims.create({
    //cria a animacao
    key: nomeAnimacao, //nome da animacao
    frames: cena.anims.generateFrameNumbers(spritesheet, {
      //adiciona os frames em que a animacao vai rodar
      start: a,
      end: b,
    }),
    frameRate: 4, //velocidade da animacao
    repeat: -1, //repeticao infinita
  });
}

function criarAnimacaoFerramenta(cena, nomeAnimacao, spritesheet, a, b) {
  cena.anims.create({
    //cria a animacao
    key: nomeAnimacao, //nome da animacao
    frames: cena.anims.generateFrameNumbers(spritesheet, {
      //adiciona os frames em que a animacao vai rodar
      start: a,
      end: b,
    }),
    frameRate: 2, //velocidade da animacao
    repeat: -1, //repeticao infinita
  });
}

// Função responsável por formatar o valor inserido em segundos para o formato minutos:segundos
// Exemplo: 150 segundos => 150/60 = 2.50 = 2:30
function formatarTempo(segundos) {
  // Converte, por meio de uma divisão, os segundos inserios no input para minutos
  // Apenas o número inteiro será atribuido a essa variável
  var minutos = Math.floor(segundos / 60);

  // Converter o resto da divisão anterior em segundos no timer
  var parteEmSegundos = segundos % 60;
  parteEmSegundos = parteEmSegundos.toString().padStart(2, "0");

  // Retorna no padrão mm:ss (minutos: segundos)
  return `${minutos}:${parteEmSegundos}`;
}

// Função que será executada a cada 1 segundo e tem como finalidade fazer a contagem regressiva do timer
function fimTimer() {
  // Se o timer ainda não estiver zerado ele remove "1" quando a função for chamada
  if (this.inicioTimer > 0) {
    this.inicioTimer -= 1;
    // Atualiza com o novo tempo o texto responsável por mostrar o timer na tela
    timer.setText(
      "Tempo para desbloquear o Quiz: " + formatarTempo(this.inicioTimer)
    );
  } else {
    // Se o timer for zerado ele executará os seguintes códigos:
    // Irá interromper a contagem do timer para que ele não fique com números negativos
    contagemTempo.paused = true;

    //Muda o estado do quiz, para comecar a animacao de realce
    estadoDoQuiz = true;
    if (estadoDoQuiz) {
      this.quizBotao.anims.play("quizAnimacao", true);
    }
    // Cria a hitbox em cima do botão de quiz
    const quiz = this.add.graphics({
      lineStyle: { width: 2, color: 0xaa0000 },
      fillStyle: { color: 0x0000ff },
    });
    criarHitbox(quiz, 761, 416.3, 147.9, 49.2, () => {
      //efeito sonoro da mudanca de cena
      this.sound.add("quiz_fx",{loop: false}).play();
      //musica para
      this.audioPrincipal.stop();
      // Troca para a cena das perguntas
      this.scene.start("QuizScene",enviarDicionario());
      this.scene.stop("GameScene");
    });
  }
}

// Cria a função de fechar janelas
// Alteração na função fecharJanela para receber argumentos adicionais
function fecharJanela(cena,x,y,imagem,elementos,titulo,mic,pergunta1,pergunta2,pergunta3,opcao1,opcao2,opcao3) {
  //create a black screen with 50% transparency in the whole screen with the specified depth
  const fundoPreto = cena.add.graphics();
  if (mic) {} else {
    fundoPreto.fillStyle(0x000000, 0.8);
    fundoPreto.fillRect(0, 0, cena.cameras.main.width, cena.cameras.main.height);
    fundoPreto.setDepth(3);
  }

  const fechar = cena.add.image(x, y, "fechar").setScale(0.125);
  fechar.setDepth(15);
  fechar.setInteractive();
  fechar.on("pointerdown", () => {
    // Verifica se o menu do microfone está aberto
    if (mic) {
      // Fecha o menu do microfone e suas perguntas
      fecharPerguntas(imagem,elementos,pergunta1,pergunta2,pergunta3,opcao1,opcao2,opcao3);
    } else {
      // Fecha apenas a imagem
      fechandoImagem(imagem, elementos, titulo);
    }
    if (tabletAcessado == false){
      cena.tabletRealce.anims.play("tabletAnimacao", true);
    }
    if (guiaAcessado == false){
      cena.guiaRealce.anims.play("guiaAnimacao", true);
    }
    if (termometroAcessado == false){
      cena.termometroRealce.anims.play("termometroAnimacao", true);
    }
    if (microfoneAcessado == false){
      cena.micRealce.anims.play("micAnimacao", true);
    }

    fechar.destroy();
    fundoPreto.destroy();
  });
}

// Faz com que o botão feche o menu selecionado e si mesma.
function fechandoImagem(imagem, elementos, titulo) {
  imagem.destroy(); // para apagar a imagem da tela e continuar a gameplay
  if (titulo) {
    titulo.destroy();
  }
  habilitarElementos(elementos); // reabilitando os elementos interativos
}

// Faz com que o botão de fechar janela também feche as perguntas do menu se ele estiver aberto.
// Função para fechar a janela do microfone e suas perguntas
function fecharPerguntas(imagem,elementos,pergunta1,pergunta2,pergunta3,opcao1,opcao2,opcao3) {
  pergunta1.destroy();
  pergunta2.destroy();
  pergunta3.destroy();
  opcao1.destroy();
  opcao2.destroy();
  opcao3.destroy();
  imagem.destroy(); // para apagar a imagem da tela e continuar a gameplay
  habilitarElementos(elementos); // reabilitando os elementos interativos
  menuMicrofone = false; // Define que o menu do microfone foi fechado
}

//funcao que define as perguntas
  function enviarDicionario(){
    switch(personagemAtual){
      //perguntas do Guizinho
      case "gui":
        var dadosGuiPergunta5 = {
          pergunta: "5. Quais produtos caseiros podem ser usados para melhorar a queimadura do Guizinho?",
          textoOpcao1: "Borras de café",
          textoOpcao2: "Gelo",
          textoOpcao3: "Pasta de dente",
          textoOpcao4: "Nenhum",
          certa: "Nenhum",
          feedback: "Nunca use produtos caseiros, como hidratante, borra de café ou pimenta, em queimaduras. Esses produtos causam infecção e podem piorar ainda mais a queimadura.",
          acertos: [],
          proximosDados: 'Feedback'
        }
  
        var dadosGuiPergunta4 = {
          pergunta: "4. Qual seria a forma ideal de socorrer o Guizinho após a queimadura?",
          textoOpcao1: "Lavar com água corrente e limpa",
          textoOpcao2: "Usar pasta de dente para refrescar",
          textoOpcao3: "Colocar gelo na queimadura para aliviar a dor de imediato",
          textoOpcao4: "Lavar com água e passar pomada para melhorar",
          certa: "Lavar com água corrente e limpa",
          feedback: "Para o caso do Guizinho, lavar com água corrente e limpa ajuda a reduzir a temperatura da pele e a aliviar a dor. Passar gelo, usar pasta de dente ou aplicar pomadas causará mais danos, uma vez que a pele do Guizinho está sensibilizada pelo trauma recente.",
          acertos: [],
          proximosDados: dadosGuiPergunta5
        }
  
        var dadosGuiPergunta3 = {
          pergunta: "3. Como o Guizinho deveria ter se prevenido para evitar essa queimadura?",
          textoOpcao1: "Desligar a energia elétrica",
          textoOpcao2: "Passar protetor solar para proteger a pele",
          textoOpcao3: "Usar luvas para manusear a panela",
          textoOpcao4: "Colocar o cabo das panelas para o lado de dentro do fogão",
          certa: "Colocar o cabo das panelas para o lado de dentro do fogão",
          feedback: "Manter o cabo das panelas virado para dentro do fogão é uma medida de segurança essencial na cozinha para evitar acidentes, principalmente quando crianças utilizam o ambiente.",
          acertos: [],
          proximosDados: dadosGuiPergunta4
        }
  
        var dadosGuiPergunta2 = {
          pergunta: "2. Baseado no que foi visto no tablet, as camadas da pele afetadas foram ________, gerando uma queimadura de ________.",
          textoOpcao1: "Hipoderme e Epiderme\n\n1º grau",
          textoOpcao2: "Epiderme e Derme\n\n2º grau",
          textoOpcao3: "Músculo e Hipoderme\n\n3º grau ",
          textoOpcao4: "Epiderme e Músculo\n\n2º grau",
          certa: "Epiderme e Derme\n\n2º grau",
          feedback: "As queimaduras de 2º grau são caracterizadas por danos mais profundos na pele, resultando em vermelhidão, inchaço e formação de bolhas. Isso é típico em casos de escaldamento com água fervente, como o que aconteceu com o Guizinho.",
          acertos: [],
          proximosDados: dadosGuiPergunta3
        }
  
        var dadosGuiPergunta1 = {
          pergunta: "1. Qual tipo de queimadura o Guizinho sofreu?",
          textoOpcao1: "Química",
          textoOpcao2: "Elétrica",
          textoOpcao3: "Térmica",
          textoOpcao4: "Superficial",
          certa: "Térmica",
          feedback: "O Guizinho sofreu uma queimadura térmica por escaldamento, que é causada pela exposição a fontes de calor, nesse caso a água fervente de uma panela.",
          acertos: [],
          proximosDados: dadosGuiPergunta2
        }
      break;
      //Perguntas da Gabriela
      case "gabriela":
        var dadosGabrielaPergunta5 = {
          pergunta: "5. Baseado no que foi visto no tablet, a camada da pele afetada foi ________, gerando uma queimadura de ________.",
          textoOpcao1: "Epiderme\n\n1º grau",
          textoOpcao2: "Músculo\n\n3º grau ",
          textoOpcao3: "Hipoderme\n\n1º grau",
          textoOpcao4: "Derme\n\n2º grau",
          certa: "Epiderme\n\n1º grau",
          feedback: "Em caso de uma queimadura solar grave como a sofrida pela Gabriela, a camada da pele atingida foi a epiderme, resultando em uma queimadura de 1º grau",
          proximosDados: 'Feedback'
        }
  
        var dadosGabrielaPergunta4 = {
          pergunta: "4. Por que é importante a Gabriela beber bastante água após uma queimadura solar?",
          textoOpcao1: "Para evitar a sensação de sede",
          textoOpcao2: "Para prevenir a irritação da pele",
          textoOpcao3: "Para prevenir a desidratação",
          textoOpcao4: "Para ajudar na digestão dos alimentos",
          certa: "Para prevenir a desidratação",
          feedback: "É importante que a Gabriela beba bastante água após sofrer uma queimadura solar para prevenir a desidratação, visto que o corpo precisa de muita água para esse período de recuperação.",
          acertos: [],
          proximosDados: dadosGabrielaPergunta5
        }
  
        var dadosGabrielaPergunta3 = {
          pergunta: "3. Qual é o primeiro cuidado que a Gabriela deve ter após perceber que está com a pele avermelhada e queimada pelo sol?", 
          textoOpcao1: "Aplicar manteiga na pele para se bronzear",
          textoOpcao2: "Tomar banho de água quente",
          textoOpcao3: "Aplicar um gel ou loção pós-sol",
          textoOpcao4: "Fazer compressas com gelo para aliviar a dor",
          certa: "Aplicar um gel ou loção pós-sol",
          feedback: "O primeiro cuidado que Gabriela deve ter após sofrer uma queimadura solar é aplicar um gel ou loção pós-sol. Esses produtos geralmente contêm ingredientes calmantes que ajudam a hidratar a pele, aliviar a dor e a vermelhidão.",
          acertos: [],
          proximosDados: dadosGabrielaPergunta4
        }
  
        var dadosGabrielaPergunta2 = {
          pergunta: "2. O que a Gabriela deve fazer se sentir muita dor e febre devido à queimadura solar?",
          textoOpcao1: "Aplicar óleo de coco na área afetada para acalmar a pele queimada",
          textoOpcao2: "Buscar orientação médica",
          textoOpcao3: "Tomar banho com água morna para aliviar a dor do corpo e aumentar a circulação sanguínea",
          textoOpcao4: "Aplicar suco de limão na pele para acelerar a cicatrização",
          certa: "Buscar orientação médica",
          feedback: "Com sintomas como febre, dor e vermelhidão, o ideal é que a Gabriela procure orientação médica. Utilizar produtos caseiros e causar mudanças drásticas na temperatura da pele muitas vezes pode ocasionar agravamentos no caso.",
          acertos: [],
          proximosDados: dadosGabrielaPergunta3
        }
  
        var dadosGabrielaPergunta1 = {
          pergunta: "1. Qual é a melhor forma de evitar que situações como a da Gabriela ocorram quando vamos a praia?",
          textoOpcao1: "Usar óleo de cozinha na pele",
          textoOpcao2: "Aplicar protetor solar com alto fator de proteção UV",
          textoOpcao3: "Ficar apenas na sombra",
          textoOpcao4: "Usar óculos de sol e chapéu",
          certa: "Aplicar protetor solar com alto fator de proteção UV",
          feedback: "A melhor maneira de Gabriela se proteger contra queimaduras solares é aplicar protetor solar com alto fator de proteção.",
          acertos: [],
          proximosDados: dadosGabrielaPergunta2
        }
        break;
        
        //perguntas do lucao
      case "lucao":
        var dadosLucaoPergunta5 = {
          pergunta: "5. Por que é perigoso soltar pipa perto de fiações elétricas, como aconteceu com o Lucão?",
          textoOpcao1: "A pipa pode se enroscar e causar curto-circuito",
          textoOpcao2: "As fiações podem cortar a linha da pipa",
          textoOpcao3: "A eletricidade ser transmitida pela linha da pipa e causar queimaduras graves",
          textoOpcao4: "A fiação pode atrapalhar a visibilidade da pipa",
          certa: "A eletricidade pode ser transmitida pela linha da pipa e causar queimaduras graves",
          feedback: "Soltar pipa perto de fiações elétricas é extremamente perigoso porque a eletricidade pode viajar pela linha da pipa. Isso pode causar queimaduras elétricas graves ou até mesmo eletrocussão, como foi o caso do Lucão",
          acertos: [],
          proximosDados: "Feedback"
        }
  
        var dadosLucaoPergunta4 = {
          pergunta: "4. Baseado no que foi visto no tablet, as camadas da pele afetadas foram ________, gerando uma queimadura de ________.",
          textoOpcao1: "Todas as camadas\n\n3º grau",
          textoOpcao2: "Epiderme e Derme\n\n1º grau ",
          textoOpcao3: "Hipoderme e Derme\n\n2º grau",
          textoOpcao4: " Derme\n\n3º grau",
          certa: "Todas as camadas\n\n3º grau",
          feedback: "Todas as camadas da pele de Lucão foram afetadas (Epiderme, Derme e Hipoderme) ocasionando uma queimadura de 3º grau. Casos como esses podem, por vezes, atingir até os ossos e músculos, sendo extremamente graves.",
          acertos: [],
          proximosDados: dadosLucaoPergunta5
        }
        var dadosLucaoPergunta3 = {
          pergunta: "3. Qual é a melhor forma de se prevenir de situações como a da queimadura do Lucão?",
          textoOpcao1: "Antes de levar um choque, puxar a pipa mais forte para ela sair dos fios elétricos",
          textoOpcao2: "Usar linhas de pipa com cerol para cortar a fiação elétrica",
          textoOpcao3: "Calçar um chinelo de borracha quando for soltar pipa",
          textoOpcao4: "Evitar locais com fiação elétrica exposta",
          certa: "Evitar locais com fiação elétrica exposta",
          feedback: "A melhor maneira de prevenir situações perigosas como a queimadura elétrica do Lucão é evitar a tentativa de recuperar a pipa quando ela se enrosca nos fios elétricos.",
          acertos: [],
          proximosDados: dadosLucaoPergunta4
        }
  
        var dadosLucaoPergunta2 = {
          pergunta: "2. O que deve ser feito após sofrer esse tipo de acidente?",
          textoOpcao1: "Passar água corrente e limpa na queimadura",
          textoOpcao2: "Ligar imediatamente para a emergência e ir para o médico",
          textoOpcao3: "Carregar o queimado para um local seguro e retirar a roupa dele",
          textoOpcao4: "Repousar em casa e tomar remédios para dor",
          certa: "Ligar imediatamente para a emergência e ir para o médico",
          feedback: "No caso de uma queimadura elétrica, como a que Lucão sofreu, é crucial procurar atendimento médico imediato sem estabelecer contato direto com a vítima, uma vez que esses quadros clínicos são complexos e podem se agravar rapidamente.",
          acertos: [],
          proximosDados: dadosLucaoPergunta3
        }
  
        var dadosLucaoPergunta1 = {
          pergunta: "1. Qual foi o tipo de queimadura sofrida pelo Lucão?",
          textoOpcao1: "Elétrica",
          textoOpcao2: "Química ",
          textoOpcao3: "Radial",
          textoOpcao4: "Térmica",
          certa: "Elétrica",
          feedback: "O Lucão sofreu uma queimadura elétrica que é causada pelo contato direto com a eletricidade, como acontece ao tocar fiações elétricas enquanto solta pipa.",
          acertos: [],
          proximosDados: dadosLucaoPergunta2
        }
        break;
      }
   
    switch(personagemAtual){
      case "gui": 
        return dadosGuiPergunta1;
      case "gabriela":
        return dadosGabrielaPergunta1;
      case "lucao":
        return dadosLucaoPergunta1;
    }
  }

  // esta parte esta em momentos de teste, por isso contém linhas de código comentadas!!!!!
  //dicionario com as perguntas dos personagens
