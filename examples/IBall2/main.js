import {project} from "../../project.js"
import TileMap from "../../tilemap.js"
import ImageArray from "../../image_array.js"
import {aps, apsk} from "../../system.js"

project.getAssets = () => {
    return {
        texture: {
            tiles: "tiles.png",
            levels: "screens/all.png",
        },
        sound: {
        }
    }
}

project.init = (texture) => {
    //let tileMap = tilemapFromImage(texture.levels, 16, 16, 16, 0, 0, 1, 1)
    let tileMap = new TileMap(new ImageArray(texture.tiles, 16, 1), 13, 12, 0, 0, 1, 1)
    tileMap.array = [0,0,0,1,0,0,0,0,0,2,3,4,0,0,0,0,0,0,0,0,0,0,5,6,0,0,0,0,0,0,0,0,0,0,0,2,6,0,0,0,0,0,0,0,0,0,0
        ,0,5,3,0,0,7,0,0,0,0,8,0,9,0,0,0,0,0,0,0,0,0,0,2,3,0,0,0,0,0,0,0,0,0,0,0,5,3,0,0,0,0,0,10,0,0,0,5,3,2,6,0,0,0
        ,0,0,11,0,0,0,2,6,5,3,0,0,0,0,0,0,0,0,0,2,3,5,6,12,0,0,0,0,13,0,10,14,5,3,2,6,10,14,0,0,0,10,0,11,15,2,6,5,3
        ,11,15,0,0,0,11]

    let player = tileMap.extract(7)
    player.imageAngle = 0

        project.background = "blue"

    project.scene = [
        tileMap,
        player,
    ]

    project.actions = [
    ]

    project.update = () => {
        player.imageAngle += apsk
    }
}