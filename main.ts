namespace SpriteKind {
    export const shooter = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite4.overlapsWith(mySprite)) {
        info.changeScoreBy(3)
    } else if (mySprite4.overlapsWith(mySprite2)) {
        info.changeScoreBy(2)
    } else if (mySprite4.overlapsWith(mySprite3)) {
        info.changeScoreBy(1)
    }
})
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 
    `, SpriteKind.Player)
mySprite.setPosition(13, 57)
mySprite2 = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Player)
mySprite2.setPosition(65, 57)
mySprite3 = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Player)
mySprite3.setPosition(109, 56)
scene.setBackgroundColor(9)
mySprite4 = sprites.create(img`
    4 . . 4 . . 4 
    . 4 . 4 . 4 . 
    . . 4 4 4 . . 
    4 4 4 4 4 4 4 
    . . 4 4 4 . . 
    . 4 . 4 . 4 . 
    4 . . 4 . . 4 
    `, SpriteKind.shooter)
controller.moveSprite(mySprite4, 100, 0)
mySprite4.y = 57
mySprite4.ay = -50
mySprite4.setFlag(SpriteFlag.StayInScreen, true)
mySprite4.setFlag(SpriteFlag.BounceOnWall, true)
tiles.setTilemap(tiles.createTilemap(hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    `, [myTiles.transparency16], TileScale.Sixteen))
mySprite.setFlag(SpriteFlag.StayInScreen, true)
mySprite2.setFlag(SpriteFlag.StayInScreen, true)
mySprite3.setFlag(SpriteFlag.StayInScreen, true)
mySprite.setFlag(SpriteFlag.BounceOnWall, true)
mySprite2.setFlag(SpriteFlag.BounceOnWall, true)
mySprite3.setFlag(SpriteFlag.BounceOnWall, true)
mySprite3.vx = 57
mySprite2.vx = 57
mySprite.vx = 57
forever(function () {
    if (mySprite4.isHittingTile(CollisionDirection.Top)) {
        mySprite4.ay = 50
    } else if (mySprite4.isHittingTile(CollisionDirection.Bottom)) {
        mySprite4.ay = -50
    }
})
