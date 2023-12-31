import {defaultCanvas, mouse} from "../../src/system.js"
import Sprite from "../../src/sprite.js"
import {project} from "../../src/project.js"
import Shape from "../../src/shape.js"
import Key from "../../src/key.js"
import {ShapeType} from "../../src/shape_type.js"

project.init = (texture) => {
    let switchType = new Key("Space", "LMB", "WheelUp", "WheelDown")

    defaultCanvas()
    
    let defaultColor = "rgb(0, 128, 0)"
    let collisionColor = "rgb(128, 255, 128)"
    let mouseColor = "rgba(255, 255, 0, 128)"
    let pushedColor = "rgba(255, 255, 0, 128)"

    let circle = new Sprite(new Shape(defaultColor), 0, -2, 2, 2, ShapeType.circle)
    let box = new Sprite(new Shape(defaultColor), 0, 2, 3, 2, ShapeType.box)

    let mouseShape = new Sprite(new Shape(mouseColor), 0, 0, 1.5, 1.5, ShapeType.circle)
    let pushed = new Sprite(new Shape(pushedColor), 0, 0, 1.5, 1.5, ShapeType.circle)
    mouseShape.image.opacity = 0.5

    let shapeNumber = 0
    let shapes = [circle, box]
    let shapeTypes = [ShapeType.circle, ShapeType.box]

    project.scene.add(circle, box, pushed, mouseShape)

    project.update = () => {
        mouseShape.setPositionAs(mouse)
        pushed.setPositionAs(mouse)

        for(let shape of shapes) {
            let collision = mouseShape.collidesWithSprite(shape)
            shape.image.color = collision ? collisionColor : defaultColor
            if(collision) {
                pushed.pushFromSprite(shape)
            }
        }

        if(switchType.wasPressed) {
            shapeNumber = (shapeNumber + 1) % shapeTypes.length
            mouseShape.shapeType = shapeTypes[shapeNumber]
            pushed.shapeType = shapeTypes[shapeNumber]
        }
    }
}