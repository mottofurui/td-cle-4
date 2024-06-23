import { Actor, Engine, Vector, Scene } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class EndScreen extends Scene {

    constructor() {
        super({width: 1280, height: 720})
    }

    onActivate() {
        const endScreen = new Actor()
        endScreen.graphics.use(Resources.Endscreen.toSprite())
        endScreen.pos = new Vector(640, 360)
        endScreen.scale = new Vector(.8, .6)
        this.add(endScreen)
    }
}