import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js' 
import { Sword } from './sword.js' 
import { Shield } from "./shield.js"

export class Bullet extends Actor {
    constructor() {
        super({
           width: Resources.Bullet.width, height: Resources.Bullet.height
        })
        let sprite = Resources.Bullet.toSprite()
        this.graphics.use(sprite)
        this.vel = new Vector(10, 50)
        this.pos = new Vector(640, 320)
    }
    onInitialize() {
        this.on('collisionstart', (event) => this.enemyHit(event))
    }
    enemyHit(event) {
        if (event.other instanceof Sword || event.other instanceof Shield) {
            this.kill()
            event.other.scaleHealth()
            event.other.lives = event.other.lives -1
            if (event.other.lives <= 0) {
                this.scene.addScore()
                this.scene.addGold()
                event.other.kill()
            }
            this.scene.updateLabel()
        }
    }
}