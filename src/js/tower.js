import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Enemy } from "./enemy.js"

export class Tower extends Actor {

    constructor() {
        super({
            width: Resources.Tower.width, height: Resources.Tower.height,
        })
    }

    onInitialize() {
        this.graphics.use(Resources.Tower.toSprite())
        this.pos = new Vector(1160, 500)
        this.scale = new Vector(.5, .5)

        this.on('collisionstart', (event) => this.adjustScore(event))
    }

    adjustScore(event) {
        if (event.other instanceof Enemy) {
            console.log(this.scene)
            this.scene.actors[3].kill()
            this.scene.loseLife()
            this.scene.updateLabel()
        }
    }

}