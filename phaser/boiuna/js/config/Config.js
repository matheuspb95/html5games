/*global Phaser*/

//Global
var Config = {
	global: {
		animationVelocity: 8,
		screen: {
			width: 960,
			height: 600,
			resize: function (game) {
				"use strict";
				if (window.innerHeight < 600 || window.innerWidth < 960) {
					game.scale.setExactFit();
					game.scale.refresh();
				}
			}
		}
	}
};

//LudusSplash
Config.ludusSplash = {
	dir: 'assets/images/LudusSplash_960-600.png',
	x: 0,
	y: 0,
	millis: 2000,
	nextState: 4000
};

//SponsorSplash
Config.sponsorSplash = {
	dir: 'assets/images/SponsorSplash_960-600.png',
	x: 0,
	y: 0,
	millis: 2000,
	nextState: 4000
};

//GameSplash
Config.gameSplash = {
	dir: 'assets/images/GameSplash_960-600.png',
	x: 0,
	y: 0,
	millis: 2000,
	nextState: 4000
};

//Menu
Config.menu = {
	dir: 'assets/images/MenuBackground_960-600.png',
	x: 0,
	y: 0,
	buttonPlay: {
		dir: 'assets/spritesheets/ButtonPlay_423-75.png',
		x: Config.global.screen.width * 0.5,
		y: Config.global.screen.height * 0.4,
		width: 141,
		height: 75,
		anchor: {
			x: 0.5,
			y: 0.5
		}
	},
	buttonHowToPlay: {
		dir: 'assets/spritesheets/ButtonHowToPlay_825-75.png',
		x: Config.global.screen.width * 0.5,
		y: Config.global.screen.height * 0.6,
		width: 275,
		height: 75,
		anchor: {
			x: 0.5,
			y: 0.5
		}
	},
	buttonCredits: {
		dir: 'assets/spritesheets/ButtonCredits_612-75.png',
		x: Config.global.screen.width * 0.5,
		y: Config.global.screen.height * 0.8,
		width: 204,
		height: 75,
		anchor: {
			x: 0.5,
			y: 0.5
		}
	},
	textStyle: {
		font: '25px Ms Sans Serif',
		fill: '#ffffff'
	}
};

//HowToPlay
Config.howToPlay = {
	dir: 'assets/images/HowToPlay_960-600.png',
	x: 0,
	y: 0
};

//Credits
Config.credits = {
	dir: 'assets/images/Credits_960-600.png',
	x: 0,
	y: 0
};

//VictoryScreen
Config.victoryScreen = {
	dir: 'assets/images/VictoryScreen_960-600.png',
	x: 0,
	y: 0
};

//DefeatScreen
Config.defeatScreen = {
	dir: 'assets/images/DefeatScreen_960-600.png',
	x: 0,
	y: 0
};

//Level
Config.level = {
	dir: 'assets/images/GameBackground_1920-600.png',
	x: 0,
	y: 0,
	worldBounds: {
		xi: 0,
		yi: 0,
		xf: 1920,
		yf: 600
	}
};

//Tilemap
Config.tilemap = {
	dir: 'assets/images/Tilemap.json'
};

//Platform
Config.platforms = {
	dir: 'assets/images/Terrain_150-30.png',
	layer: 'LayerMain',
	tileset: 'Terrain'
};

//Grass
Config.grass = {
	dir: 'assets/images/Grass_30-30.png',
	layer: 'LayerUpper',
	tileset: 'Grass'
};

//Hero
Config.hero = {
	dir: {
		normal: 'assets/spritesheets/HeroNormal_468-71.png',
		attack: 'assets/spritesheets/HeroAttack_124-96.png'
	},
	layer: 'LayerHero',
	gid: 12,
	health: {
		initial: 100
	},
	velocity: {
		initial: {
			x: 0,
			y: 0
		},
		run: 200,
		jump: -300
	},
	gravity: 1000,
	jump: {
		max: 25
	},
	anchor: {
		right: {
			x: 0,
			y: 0.5
		},
		left: {
			x: 0.5,
			y: 0.5
		}
	},
	scale: {
		right: {
			x: 1,
			y: 1
		},
		left: {
			x: -1,
			y: 1
		}
	},
	frame: {
		normal: {
			width: 78,
			height: 71,
			stopped: 0,
			jumping: 3,
			falling: 4,
			run: [1, 5, 2, 0]
		},
		attack: {
			width: 62,
			height: 96,
			hit: [0, 1]
		}
	}
};

//ButtonHit
Config.buttonHit = {
	dir: 'assets/spritesheets/ButtonHit_1920-150.png',
	x: 0,
	y: 450,
	frame: {
		width: 960,
		height: 150,
		over: 0,
		out: 0,
		down: 1,
		up: 0
	},
	key: Phaser.Keyboard.Z
};

//ButtonLeft
Config.buttonLeft = {
	dir: 'assets/spritesheets/ButtonLeft_960-270.png',
	x: 0,
	y: 225,
	frame: {
		width: 480,
		height: 225,
		over: 0,
		out: 0,
		down: 1,
		up: 0
	},
	key: Phaser.Keyboard.LEFT
};

//ButtonRight
Config.buttonRight = {
	dir: 'assets/spritesheets/ButtonRight_960-270.png',
	x: 480,
	y: 225,
	frame: {
		width: 480,
		height: 225,
		over: 0,
		out: 0,
		down: 1,
		up: 0
	},
	key: Phaser.Keyboard.RIGHT
};

//ButtonUp
Config.buttonUp = {
	dir: 'assets/spritesheets/ButtonUp_640-270.png',
	x: 320,
	y: 0,
	frame: {
		width: 320,
		height: 225,
		over: 0,
		out: 0,
		down: 1,
		up: 0
	},
	key: Phaser.Keyboard.UP
};

//ButtonJumpLeft
Config.buttonJumpLeft = {
	dir: "assets/spritesheets/ButtonJumpLeft_640-270.png",
	x: 0,
	y: 0,
	frame: {
		width: 320,
		height: 225,
		over: 0,
		out: 0,
		down: 1,
		up: 0
	}
};

Config.buttonJumpRight = {
	dir: "assets/spritesheets/ButtonJumpRight_640-270.png",
	x: 640,
	y: 0,
	frame: {
		width: 320,
		height: 225,
		over: 0,
		out: 0,
		down: 1,
		up: 0
	}
};

//SmallDragon
Config.smallDragon = {
	dir: 'assets/spritesheets/SmallDragon_380-52.png',
	velocity: 150,
	xi: 1920,
	yi: 0,
	damage: Config.hero.health.initial / 600,
	intervalBorning: {
		actual: 30000,
		min: 20000,
		decrement: 1000
	},
	anchor: {
		left: {
			x: 0,
			y: 0.5
		},
		right: {
			x: 0.5,
			y: 0.5
		}
	},
	scale: {
		right: {
			x: -1,
			y: 1
		},
		left: {
			x: 1,
			y: 1
		}
	},
	frame: {
		width: 95,
		height: 52,
		move: [0, 1, 2, 3]
	},
	number: 10
};

//Fire
Config.fire = {
	dir: 'assets/spritesheets/Fire_40-10.png',
	number: 100,
	animationVelocity: 24,
	frame: {
		hight: 10,
		width: 10,
		move: [0, 1, 2, 3]
	},
	range: 500,
	damage: Config.hero.health.initial / 6000,
	intervalShooting: 100,
	adjust: {
		x: 60,
		y: 5
	},
	velocity: Config.smallDragon.velocity + 100,
	lifespan: 3000
};

//Life
Config.life = {
	dir: 'assets/images/Life_20-20.png',
	x: 0,
	y: 0,
	distanceBetween: 20,
	number: 4
};

//Dragon
Config.dragon = {
	dir: 'assets/spritesheets/Boiuna_360-270.png',
    layer: 'LayerDragon',
    gid: 22,
    xf: Config.global.screen.width * 2 + 50,
	frame: {
		width: 90,
		height: 90,
        move: {
			head: [0,1,2,3],
			body: [7,6,5,4]
        }
	},
    timeGrow: 1000 / Config.global.animationVelocity,
    number: {
        pieces: 5
    }
};

//Lady
Config.lady = {
	dir: 'assets/spritesheets/Lady_153-78.png',
	frame: {
		width: 51,
		height: 78
	}
};

//Princess
Config.princess = {
	dir: 'assets/spritesheets/Princess_135-78.png',
	frame: {
		width: 45,
		height: 78
	}
};