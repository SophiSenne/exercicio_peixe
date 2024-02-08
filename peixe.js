var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update, update
    }
};

var game = new Phaser.Game(config);

var peixinho;

function preload(){
    this.load.image('mar', 'assets/bg_azul-escuro.png');

    //carregar logo
    this.load.image('logo', 'assets/logo-inteli_branco.png');

    //carregar peixe
    this.load.image('peixe', 'assets/Peixes/tartaruga.png');

    //Caregar elemento extra
    this.load.image('concha', 'assets/concha.png');
}

function create(){
    this.add.image(400,300,'mar');

    //adicionar logo na tela
    this.add.image(600,500,'logo').setScale(0.5);

    //adicionar o peixe à variável
    peixinho = this.add.image(400,300,'peixe').setOrigin(0.5, 0.5).setFlip(true,false);

    //transformando a variável
    peixinho.setFlip(true, false);

    //adicionar elemento extra
    this.add.image(200,500,'concha');
}

function update(){

    //add controles no peixe
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}