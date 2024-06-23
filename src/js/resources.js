import { ImageSource, Sound, Resource, Loader } from 'excalibur'

const Resources = {
    Enemy: new ImageSource('images/enemy-sword.png'),
    TdMap: new ImageSource('images/real-td-map-no-obj.jpg'),
    Tree: new ImageSource('images/tree-real-size.png'),
    Tower: new ImageSource('images/tower-real-size.png'),
    Cannon: new ImageSource('images/cannon.png'),
    BlastCannon: new ImageSource('images/blast-cannon.png'),
    EnemyShield: new ImageSource('images/enemy-shield.png'),
    HealthbarFull: new ImageSource('images/hb-full.png'),
    HealthbarQuarter: new ImageSource('images/hb-quarter.png'),
    HealthbarHalf: new ImageSource('images/hb-half.png'),
    HealthbarThreeQuarter: new ImageSource('images/hb-three-quarter.png'),
    HealthbarZero: new ImageSource('images/hb-zero.png'),
    Endscreen: new ImageSource('images/end-screen.jpg'),
    Startscreen: new ImageSource('images/intro-screen.jpg'),
    Flag: new ImageSource('images/play-button.png'),
    Bullet: new ImageSource('images/bullet.png'),
}
const ResourceLoader = new Loader([
    Resources.Enemy,
    Resources.TdMap,
    Resources.Tree,
    Resources.Tower,
    Resources.Cannon,
    Resources.BlastCannon,
    Resources.EnemyShield,
    Resources.HealthbarFull,
    Resources.HealthbarQuarter,
    Resources.HealthbarHalf,
    Resources.HealthbarThreeQuarter,
    Resources.HealthbarZero,
    Resources.Endscreen,
    Resources.Startscreen,
    Resources.Flag,
    Resources.Bullet
])

export { Resources, ResourceLoader }