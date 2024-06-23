import { Actor, Engine, Vector, Scene, Timer } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Label, FontUnit, Font} from "excalibur";
import { Enemy } from "./enemy.js"
import { Tree } from "./tree.js"
import { Tower } from "./tower.js"
import { Cannon } from './cannon.js'
import { Sword } from './sword.js'
import { Shield } from './shield.js'

export class Map extends Scene {

    score = 0
    lives = 10
    gold = 250

    label = new Label({
        text: 'Score: 0',
        pos: new Vector(50, 50),
        font: new Font({
            family: 'impact',
            size: 24,
            unit: FontUnit.Px
        })
    })

    constructor() {

        super({width: 1280, height: 720})
    }

    onActivate() {
        const map = new Actor()
        map.graphics.use(Resources.TdMap.toSprite())
        map.pos = new Vector(640, 360)
        map.scale = new Vector(.8, .6)
        this.add(map)

        map.on("pointerup", (evt) => this.addTower(evt))

        console.log(this.Sword)

        const tree = new Tree()
        this.add(tree)


        const tower = new Tower()
        this.add(tower)

        this.enemyWave()

        this.add(this.label)
        this.updateLabel()
    }

    onPreUpdate() {
        if(this.lives === 0) {
            this.engine.goToScene('end')
        }
    }

    addTower(e) {
        if (this.gold >= 100) {
            this.gold = this.gold - 100
            const shootyTower = new Cannon(e.worldPos)
            this.add(shootyTower)
            this.updateLabel()
        } 
    }

    enemyWave() {
        let timer = new Timer({
            fcn: () => this.addEnemy(),
            interval: 1500,
            repeats: true
        })
        this.add(timer)
        timer.start()
    }

    addEnemy() {
        const sword = new Sword()
        this.add(sword)

        const shield = new Shield()
        this.add(shield)
    }

    updateLabel() {
        this.label.text = `Score: ${this.score}  Lives: ${this.lives} Gold: ${this.gold}`
    }

    addScore() {
        this.score++
        this.updateLabel()
    }

    addGold() {
        this.gold += 50
        this.updateLabel()
    }

    loseLife() {
        this.lives = this.lives - 1
        this.updateLabel()
    }
}