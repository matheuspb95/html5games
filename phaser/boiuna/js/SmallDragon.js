var SmallDragon = function(game, hero){
	this.game = game;
	this.sprite = null;
	this.hero = hero;
};
SmallDragon.prototype = {
	preload: function() {
		this.game.load.spritesheet('small-dragon', Config.smallDragon.dir,Config.smallDragon.frame.width,Config.smallDragon.frame.height);
	},
	create: function (){
		this.sprite = this.game.add.sprite(Config.smallDragon.xi, Config.smallDragon.yi,'small-dragon');
		this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
		this.sprite.animations.add('move', [0,1],Config.global.animationVelocity,true);
		this.sprite.animations.play('move');
	},
	update: function(){
		this.game.physics.arcade.moveToObject(this.sprite,this.hero.sprite,Config.smallDragon.velocity);
		if(this.sprite.x > this.hero.sprite.x){
			this.sprite.scale = Config.smallDragon.scale.right;
		} else {
			this.sprite.scale = Config.smallDragon.scale.left;
		}
	}
};

