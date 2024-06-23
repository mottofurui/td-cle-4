import { Actor, Engine, Vector, Color } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Enemy } from "./enemy.js"


export class Healthbar extends Actor {

    constructor() {
        super({
            color: Color.Green, width: 200, height: 20, anchor: new Vector(0, 0)
        })
    }

    // healthbarSprites = [Resources.HealthbarFull, Resources.HealthbarQuarter, Resources.HealthbarHalf, Resources.HealthbarThreeQuarter, Resources.HealthbarZero]
    // spriteIndex = 0

    // onInitialize() {
    //     this.graphics.use(Resources.HealthbarFull.toSprite())
    //     this.scale = new Vector(.1, .1)
    // }

    // changeSprite() {
    //     if (this.healthbarSprites[Resources.HealthbarZero]) {
    //         this.spriteIndex = 0
    //         this.kill()
    //         this.scene.actors[3].kill()
    //     } else {
    //         this.spriteIndex++
    //         this.graphics.use(this.healthbarSprites[this.spriteIndex].toSprite())
    //         // console.log(this.spriteIndex)
    //     }
    // }
}