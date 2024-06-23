import { Actor, Engine, Vector, Timer } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Enemy } from "./enemy.js"
import { Bullet } from './bullet.js'


export class Cannon extends Actor {

    constructor(worldpos){
        super({
            radius: Resources.Cannon.width/2*2,
            pos:worldpos,
            anchor:new Vector(0.5, 0.5)
        })
    }

    onInitialize() {
        this.graphics.use(Resources.Cannon.toSprite())
        this.scale = new Vector(.1, .1)

        this.on('collisionstart', (event) => this.shoot(event))
        this.on('collisionend', (event) => this.stopTimer(event))

        this.enableCapturePointer = true
        this.pointer.useGraphicsBounds = true

        console.log(this.scene.actors)
    }

    shoot(event) {
        if (event.other instanceof Enemy) {

            event.other.id = new Timer ({
                fcn:() => this.shot(event),
                interval: 300,
                repeats: true,
            })
            this.scene.add(event.other.id)
            event.other.id.start()

        }
    }

    //functions for bullet

    shot(event) {
        let bullet = new Bullet()
        bullet.actions.meet(event.other, 100)
        this.scene.add(bullet)
    }

    stopTimer(event) {
        if (event.other instanceof Enemy) {
            event.other.id.stop()
        }
    }
}