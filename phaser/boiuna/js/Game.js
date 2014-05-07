/*global State, Level, Tilemap, Platforms, Hero, Grass, SmallDragon*/

State.Game = function (game) {
    "use strict";
    this.game = game;
	this.level = new Level(game);
    this.tilemap = new Tilemap(game);
    this.platforms = new Platforms(game, this.tilemap);
	this.hero = new Hero(game, this.tilemap, this.platforms);
    this.grass = new Grass(game, this.tilemap);
	this.smallDragon = new SmallDragon(game, this.hero);
};
State.Game.prototype = {
	preload: function () {
        "use strict";
		this.level.preload();
        this.tilemap.preload();
        this.platforms.preload();
        this.hero.preload();
        this.grass.preload();
		this.smallDragon.preload();
	},
	create: function () {
        "use strict";
		this.level.create();
        this.tilemap.create();
        this.platforms.create();
		this.hero.create();
        this.grass.create();
		this.smallDragon.create();
	},
	update: function () {
        "use strict";
		this.hero.update();
		this.smallDragon.update();
	}
};