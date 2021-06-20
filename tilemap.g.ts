// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000001010101010101000000000101010101010100010101010100000001010101010101010101010000010100000100010101010101010101010100000001000001010101010100000101010000010000000000000001010100010100010000000000000001010000010101010101010101010101010101010000000101010101010101010100000000000001000101010000010000010000000000010001010001010000000100000000000100010101010101010101010101010100000001000101010101010101010101000001010101010101010101010000000000000000000000000000000000000000`, img`
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
`, [myTiles.transparency16,sprites.castle.tilePath2], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`0a00100000000002010103000000000000040101000000000000000401010000000000000004010100000000000000040101000000000000000401010000000000000004010100000000000000040101000000000000000401010000000000000004010100000000000000040101000000000000000401010000000000000004010100000000000000040101000000000000000401010000000000000000010100000000`, img`
2 2 2 2 . . 2 2 2 2 
2 2 2 2 . . 2 2 2 2 
2 2 2 2 . . 2 2 2 2 
2 2 2 2 . . 2 2 2 2 
2 2 2 2 . . 2 2 2 2 
2 2 2 2 . . 2 2 2 2 
2 2 2 2 . . 2 2 2 2 
2 2 2 2 . . 2 2 2 2 
2 2 2 2 . . 2 2 2 2 
2 2 2 2 . . 2 2 2 2 
2 2 2 2 . . 2 2 2 2 
2 2 2 2 . . 2 2 2 2 
2 2 2 2 . . 2 2 2 2 
2 2 2 2 . . 2 2 2 2 
2 2 2 2 . . 2 2 2 2 
2 2 2 2 . . 2 2 2 2 
`, [myTiles.transparency16,sprites.vehicle.roadVertical,myTiles.tile1,myTiles.tile2,myTiles.tile5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
