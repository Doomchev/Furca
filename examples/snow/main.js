import {project} from "../../project.js"
import Layer from "../../layer.js"
import Move from "../../actions/sprite/move.js"
import Shape from "../../shape.js"
import {currentCanvas} from "../../canvas.js"
import Interval from "../../actions/interval.js"
import Generator, {ShapeType} from "../../actions/generator.js"
import Img from "../../image.js"
import {rad, rnd} from "../../system.js"
import SetBounds from "../../actions/sprite/set_bounds.js"

project.getAssets = () => {
    return {
        texture: {
            flake: "snowflake.png",
        },
        sound: {
        }
    }
}

project.init = (texture) => {
    let flakes = new Layer()
    let generator = new Generator(new Img(texture.flake), new Shape(0, currentCanvas.topY - 3, currentCanvas.width + 3
        , 2), ShapeType.box)

    project.background = "rgb(9, 44, 84)"

    project.scene = [
        flakes
    ]

    project.actions = [
        new Move(flakes),
        new SetBounds(flakes, new Shape(0, 0, currentCanvas.width + 6, currentCanvas.height + 6)),
    ]

    let interval = new Interval(0.05)

    project.update = () => {
        if(interval.active()) {
            let flake = generator.execute()
            flake.size = rnd(0.5, 2)
            flake.angle = rad(90)
            flake.speed = rnd(0.5, 2)
            flakes.add(flake)
        }
    }
}