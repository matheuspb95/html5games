var Menu = {};

Menu = function(game) {
    this.game = game;
    this.btnPlay = null;
    this.btnHowToPlay = null;
    this.btnHighScores = null;
    this.btnCredits = null;
};

Menu.prototype.preload = function() {
    //game.load.atlas('background','assets/screenshots/Menu6_480-600.png');
    game.load.atlas('buttons', spriteSheetsImageButtons, spriteSheetsJsonButtons);

};

Menu.prototype.create = function() {
    var background = game.add.sprite(0, 0, 'Menu');
    var anim = background.animations.add('menu_animation');
    background.animations.play('menu_animation', 2, true);
    background.name = 'background';


    var fadeout;

    var music;

//  music = game.add.audio('Menu_Sound', 1, false);sem música por enquanto
    //  music.play('', 0, 1, false);sem música por enquanto

    this.btnPlay = game.add.button(game.world.centerX, game.world.centerY - 120, 'buttons',
            function() {
                this.play();
            }, this);
    this.btnPlay.setFrames(btPlaySelected, btPlay);
    this.btnPlay.anchor.x = 0.5;

    this.btnHowToPlay = game.add.button(game.world.centerX, game.world.centerY - 50, 'buttons',
            function() {
                this.howToPlay();
            }, this);
    this.btnHowToPlay.setFrames(btHowToPlaySelected, btHowToPlay);
    this.btnHowToPlay.anchor.x = 0.5;

    this.btnHighScores = game.add.button(game.world.centerX, game.world.centerY + 20, 'buttons',
            function() {
                this.highScores();
            }, this);
    this.btnHighScores.setFrames(btScoreSelected, btScore);
    this.btnHighScores.anchor.x = 0.5;

    this.btnCredits = game.add.button(game.world.centerX, game.world.centerY + 90, 'buttons',
            function() {
                this.credits();
            }, this);
    this.btnCredits.setFrames(btCreditsSelected, btCredits);
    this.btnCredits.anchor.x = 0.5;

};

Menu.prototype.play = function() {
    this.fadeOut();
    fadeout.onComplete.add(function() {
        //chama mapa
        //  this.game.state.start('game', Game);
        console.log("play");
    });
    game.state.start('game', Game);

};

Menu.prototype.howToPlay = function() {
    this.fadeOut();
    fadeout.onComplete.add(function() {
        //this.game.state.start('HowToPlay', HowToPlay);
    });
}

Menu.prototype.highScores = function() {
    this.fadeOut();
    fadeout.onComplete.add(function() {
        //this.game.state.start('HighScore', HighScore);
    });
}

Menu.prototype.credits = function() {
    this.fadeOut();
    fadeout.onComplete.add(function() {
        this.game.state.start('Credits', Credits);
    });
};

Menu.prototype.fadeOut = function() {
    fadeout = game.add.tween(this.btnPlay).to({alpha: 0}, 500, Phaser.Easing.Linear.None, true, 0, 0, true);
    fadeout = game.add.tween(this.btnHowToPlay).to({alpha: 0}, 500, Phaser.Easing.Linear.None, true, 0, 0, true);
    fadeout = game.add.tween(this.btnHighScores).to({alpha: 0}, 500, Phaser.Easing.Linear.None, true, 0, 0, true);
    fadeout = game.add.tween(this.btnCredits).to({alpha: 0}, 500, Phaser.Easing.Linear.None, true, 0, 0, true);
};