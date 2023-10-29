import Img from "./image.js"

export default class ImageArray {
    constructor(texture, columns, rows, xMul = 0.5, yMul = 0.5
                , widthMul = 1.0, heightMul = 1.0, border = 0) {
        this.texture = texture
        this.columns = columns
        this.rows =  rows
        this.xMul = xMul
        this.yMul = yMul
        this.heightMul = heightMul
        this.widthMul = widthMul
        let quantity = columns * rows
        let width = Math.floor(texture.width / columns)
        let height = Math.floor(texture.height / rows)
        let images = Array(quantity)
        for(let i = 0; i < quantity; i++) {
            images[i] = new Img(texture, (i % columns) * width, Math.floor(i / columns) * height
                , width - border, height - border, xMul, yMul, widthMul, heightMul)
        }
        this._images = images
    }
}