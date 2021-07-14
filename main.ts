scene.setBackgroundColor(8)
scene.setBackgroundImage(img`
    8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f 8 8 8 
    8 8 8 8 8 8 8 8 8 f 8 8 8 8 8 8 8 8 8 f f 8 8 8 8 8 f f f 8 8 8 
    8 8 8 8 8 8 8 8 8 f 8 8 8 8 8 8 8 f f f f f f 8 8 8 f f f 8 8 8 
    f f f f f 8 8 8 8 f 8 8 8 8 8 8 f f f f f f f f 8 8 f f f 8 8 8 
    f f f f f 8 8 8 8 f 8 8 8 8 8 8 f f f f f f f f 8 8 f f f 8 8 8 
    `)
scene.setTileMap(img`
    . 6 6 6 6 . . . . . . . . . . f f f f f f f f . . . . . . . . 7 
    . . . . . . . 5 . . . . . . . . f f f f f f f . . . . . . 5 . 7 
    . . . . . . . . . . . . 5 . . . . . f f f . . . . . . . . . . 7 
    . . 5 . . . . f f . . . . . . . . . . . . . . . . . . . f f . 7 
    . . . . . . . f f . . . f f f . . 5 . . . 5 . . . . 5 . f f . 7 
    . . . . . . . f f . . f f f f f . . . . . . . . f . . . f f . 7 
    f f f f f . . f f . f f f f f f f . . . . . . . f . . . f f . 7 
    f f f f f . . f f . f f f f f f f . . . . . . . f . . . f f . 7 
    `, TileScale.Sixteen)
scene.setTile(5, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, false)
scene.setTile(7, img`
    f 1 f 1 f 1 f 1 f 1 f 1 f 1 f 1 
    1 f 1 f 1 f 1 f 1 f 1 f 1 f 1 f 
    f 1 f 1 f 1 f 1 f 1 f 1 f 1 f 1 
    1 f 1 f 1 f 1 f 1 f 1 f 1 f 1 f 
    f 1 f 1 f 1 f 1 f 1 f 1 f 1 f 1 
    1 f 1 f 1 f 1 f 1 f 1 f 1 f 1 f 
    f 1 f 1 f 1 f 1 f 1 f 1 f 1 f 1 
    1 f 1 f 1 f 1 f 1 f 1 f 1 f 1 f 
    f 1 f 1 f 1 f 1 f 1 f 1 f 1 f 1 
    1 f 1 f 1 f 1 f 1 f 1 f 1 f 1 f 
    f 1 f 1 f 1 f 1 f 1 f 1 f 1 f 1 
    1 f 1 f 1 f 1 f 1 f 1 f 1 f 1 f 
    f 1 f 1 f 1 f 1 f 1 f 1 f 1 f 1 
    1 f 1 f 1 f 1 f 1 f 1 f 1 f 1 f 
    f 1 f 1 f 1 f 1 f 1 f 1 f 1 f 1 
    1 f 1 f 1 f 1 f 1 f 1 f 1 f 1 f 
    `, false)
scene.setTile(6, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, false)
scene.setTile(15, img`
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    `, true)
let mySprite = sprites.create(img`
    . . . . c c c c c c . . . . . . 
    . . . c 6 7 7 7 7 6 c . . . . . 
    . . c 7 7 7 7 7 7 7 7 c . . . . 
    . c 6 7 7 7 7 7 7 7 7 6 c . . . 
    . c 7 c 6 6 6 6 c 7 7 7 c . . . 
    . f 7 6 f 6 6 f 6 7 7 7 f . . . 
    . f 7 7 7 7 7 7 7 7 7 7 f . . . 
    . . f 7 7 7 7 6 c 7 7 6 f c . . 
    . . . f c c c c 7 7 6 f 7 7 c . 
    . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
    . c 7 7 2 7 7 c f c 6 7 7 6 c c 
    c 1 1 1 1 7 6 f c c 6 6 6 c . . 
    f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
    f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
    . f 6 1 1 1 1 1 1 6 6 6 f . . . 
    . . c c c c c c c c c f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
