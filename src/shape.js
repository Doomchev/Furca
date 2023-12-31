import {Renderable} from "./renderable.js"
import {ShapeType} from "./shape_type.js"
import {ctx} from "./canvas.js"

export default class Shape extends Renderable {
    constructor(color, opacity = 1.0, xMul = 0.5, yMul = 0.5, widthMul = 1.0, heightMul = 1.0) {
        super()
        this.color = color
        this.opacity = opacity
        this.xMul = xMul
        this.yMul = yMul
        this.widthMul = widthMul
        this.heightMul = heightMul
    }

    drawResized(sx, sy, swidth, sheight, shapeType) {
        let newWidth = swidth * this.widthMul
        let newHeight = sheight * this.heightMul
        let newX = -newWidth * this.xMul
        let newY = -newHeight * this.yMul

        let oldStyle = ctx.fillStyle
        ctx.fillStyle = this.color
        ctx.save()
        ctx.translate(sx, sy)
        ctx.globalAlpha = this.opacity
        switch(shapeType) {
            case ShapeType.circle:
                ctx.beginPath()
                ctx.arc(0.5 * swidth, 0.5 * sheight, 0.5 * swidth, 0, 2.0 * Math.PI)
                ctx.fill()
                break
            case ShapeType.box:
                ctx.fillRect(0, 0, swidth, sheight)
                break
        }
        ctx.fillStyle = oldStyle
        ctx.globalAlpha = 1.0
        ctx.restore()
    }

    drawRotated(sx, sy, swidth, sheight, shapeType, angle) {
        this.drawResized(sx - 0.5 * swidth, sy - 0.5 * sheight, swidth, sheight, shapeType)
    }
}