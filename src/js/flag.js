import { Actor, Engine, Vector, Scene } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Map } from "./map.js"

export class Flag extends Actor {

    onInitialize() {
        this.graphics.use(Resources.Flag.toSprite())
        this.pos = new Vector(700, 300)
        this.scale = new Vector(.3, .3)

    }
}

