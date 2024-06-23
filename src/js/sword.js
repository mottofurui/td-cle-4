import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Healthbar } from "./healthbar.js"
import { Enemy } from "./enemy.js"

export class Sword extends Enemy {

    lives = 4

    constructor() {
        super()
    }

    onInitialize() {
        this.graphics.use(Resources.Enemy.toSprite())
    }
}