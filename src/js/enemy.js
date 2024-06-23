import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Healthbar } from "./healthbar.js"

export class Enemy extends Actor {

    healthbar = new Healthbar()

    constructor() {
        super({
            radius: Resources.Tower.width/2,
        })
        this.addChild(this.healthbar) 

        this.pos = new Vector(200, -100)
        this.scale = new Vector(.2, .2)

        this.actions.moveTo(new Vector(200, 200), 200).moveTo(new Vector(420, 200), 200).moveTo(new Vector(420, 510), 200).moveTo(new Vector(170, 510), 200).moveTo(new Vector(170, 630), 200).moveTo(new Vector(600, 630), 200).moveTo(new Vector(600, 320), 200).moveTo(new Vector(860, 320), 200).moveTo(new Vector(860, 80), 200).moveTo(new Vector(1170, 80), 200).moveTo(new Vector(1200, 500), 200)
    }

    scaleHealth() {
        this.lives = Math.max(0, this.lives)
        this.healthbar.scale = new Vector(this.lives / 4)
        if (this.lives < 4) {
            this.actions.clearActions()
            this.healthbar.kill()
            this.pos.x = -100
        }
     }

    onPostUpdate() {
        this.healthbar.pos = new Vector (0, -350)
     }

}