import GameObject from "./GameObject.js";// can be taken by a player and spawn every X secondsexport defaultclass SimpleObject extends GameObject {	constructor(g, x, y) {		super(g, x, y);				this.respawnTime = 0; // auto-respawn the object after take by a player	}		handleCollisions(player, callback) {		// player eat object		if (super.handleCollisions(player, callback)) {			// "remove" it			this.sprite.visible = false;						// respawn every this.respawntime			if (this.respawntime > 0) {				var that = this;				this.timers.push(setTimeout(function(){					that.sprite.visible = true;				}, this.respawntime * 1000));			}		}	}}