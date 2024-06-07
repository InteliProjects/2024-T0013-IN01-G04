class Cutscenes extends Phaser.Scene {
  constructor() {
    super({ key: "Cutscenes" });
  }

  //constante que armazenara o audio da tela principal
  audioPrincipal;

  create() {
    //declarando o audio que vai tocar na tela principal
    this.audioPrincipal = this.sound.add("principal", { loop: true });

    // Mudando a cutscene de acordo com o personagem
    switch (personagemAtual) {
      case "gui":
        this.add.image(480, 240, "bg-1").setScale(0.25);
        //animacao
        this.movimentacaoPersonagem = this.add.sprite(960, 505, "charMove").setScale(0.25).setOrigin(0, 1);
        this.anims.create({
          key: "move", //Nome para chamar a animacao
          frames: this.anims.generateFrameNumbers("charMove", {
            start: 1,
            end: 2,
          }), //define quais sprites vao rodar na animacao
          frameRate: 3, //velocidade da animacao
          repeat: -1, //definindo para repeticao infinita
        });
        this.movimentacaoPersonagem.anims.play("move", true); //rodar a animacao
        setTimeout(() => {
          //musica da tela principal comeca
          this.audioPrincipal.play();
          //comeca proxima cena
          this.scene.start("GameScene", {
            audioPrincipal: this.audioPrincipal,
          });
        }, 6000); //tempo que vai durar a cena
        break;
      case "gabriela":
        this.praia = this.add.sprite(0, 480, "praia").setScale(0.5).setOrigin(0, 1);
        this.anims.create({
          key: "praiaAnimacao", //Nome para chamar a animacao
          frames: this.anims.generateFrameNumbers("praia", {
            start: 0,
            end: 6,
          }), //define quais sprites vao rodar na animacao
          frameRate: 1.25, //velocidade da animacao
          repeat: 0, //definindo para repeticao infinita
        });
        this.praia.anims.play("praiaAnimacao", true);
        setTimeout(() => {
          //musica da tela principal comeca
          this.audioPrincipal.play();
          //comeca proxima cena
          this.scene.start("GameScene", {
            audioPrincipal: this.audioPrincipal,
          });
        }, 6000); //tempo que vai durar a cena
        break;
      case "lucao":
        this.rua = this.add.sprite(largura/2,altura/2,"rua").setScale(0.5);
        this.anims.create({
          key: "ruaAnimacao", //Nome para chamar a animacao
          frames: this.anims.generateFrameNumbers("rua", {
            start: 0,
            end: 12,
          }), //define quais sprites vao rodar na animacao
          frameRate: 2.125, //velocidade da animacao
          repeat: 0, //definindo para repeticao infinita
        });
        this.rua.anims.play("ruaAnimacao",true);
        setTimeout(() => {
          //musica da tela principal comeca
          this.audioPrincipal.play();
          //comeca proxima cena
          this.scene.start("GameScene", {
            audioPrincipal: this.audioPrincipal,
          });
        }, 6000); //tempo que vai durar a cena
        break;
      default:
        break;
    }
  }
  update() {
    // movimentacao do personagem
    switch (personagemAtual) {
      case "gui":
        if (this.movimentacaoPersonagem.x > 420) {
          //determinando ate onde o personagem vai andar
          this.movimentacaoPersonagem.x -= 4; //velocidade de deslocamento do personagem
        }
        if (this.movimentacaoPersonagem.x == 420) {
          // se o personagem atingir a coordenada 420
          this.movimentacaoPersonagem.destroy(); //destruir o sprite do boneco se movendo
          this.personagem1 = this.add.sprite(550, 505, "char").setScale(0.25).setOrigin(0.5, 1); //criar sprite do boneco parado
        }
        break;
      case "gabriela":
        // movimentação da cena da gabriela

        break;
      case "lucao":
        // movimentação da cena do lucão

        break;
    }
  }
}