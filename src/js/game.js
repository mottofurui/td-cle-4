import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Label, FontUnit, Font} from "excalibur";
import { Resources, ResourceLoader } from './resources.js'
import { Enemy } from "./enemy.js"
import { Map } from "./map.js"
import { Tree } from "./tree.js"
import { Tower } from "./tower.js"
import { Cannon } from './cannon.js'
import { Sword } from './sword.js'
import { Shield } from './shield.js'
import { StartScreen } from './start-screen.js';
import { EndScreen } from './end-screen.js';

export class Game extends Engine {

    constructor() {
        super({width: 1280, height: 720})

        this.start(ResourceLoader).then(() => this.startGame())
        this.showDebug(true)
    }

    startGame() {
        this.add('start', new StartScreen())
        this.add('level', new Map())
        this.add('end', new EndScreen())
        this.goToScene('start')
    }
}
new Game()
