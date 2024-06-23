import { Actor, Engine, Vector, Scene } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Flag } from "./flag.js"

export class StartScreen extends Scene {
    
    constructor() {
        super({width: 1280, height: 720})
    }

    onActivate() {
        const startScreen = new Actor()
        startScreen.graphics.use(Resources.Startscreen.toSprite())
        startScreen.pos = new Vector(640, 360)
        startScreen.scale = new Vector(.8, .6)
        this.add(startScreen)

        const playButton = new Flag()
        this.add(playButton)

        
        playButton.on("pointerup", (evt) => this.play(evt))
    }

    play() {
        this.engine.goToScene('level')
    }
}