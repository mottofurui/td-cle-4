import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Tree extends Actor {

    constructor() {
        super({
            width: Resources.Tree.width, height: Resources.Tree.height,
        })
    }

    onInitialize() {
        this.graphics.use(Resources.Tree.toSprite())
        this.pos = new Vector(600, 100)
        this.scale = new Vector(.5, .5)
    }

}