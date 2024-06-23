import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Healthbar } from "./healthbar.js"
import { Enemy } from "./enemy.js"

export class Shield extends Enemy {
    lives = 4

    constructor() {
        super()
    }

    onInitialize() {
        this.graphics.use(Resources.EnemyShield.toSprite())
    }
}