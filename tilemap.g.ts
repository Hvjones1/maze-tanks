// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010102010101020101010101010101010101020101050201010101010101040101010203010102010101010104040401010101010101010106010404040101010103030101060101060104010101010101010101010602020601010101040101010401060106010101010102020101010104060601010101010101020101010101040106010101010401020202010101010101060101010106010101010401060601060601010101060101040101010101010101010101060101010101010101010601010101060606060606010101060606060101010601010601060601010101010601010601010606010106010101010101010101010106010101010101`, img`
. . . 2 . . . 2 . . . . . . . . 
. . . 2 . . 2 2 . . . . . . . 2 
. . . 2 2 . . 2 . . . . . 2 2 2 
. . . . . . . . . 2 . 2 2 2 . . 
. . 2 2 . . 2 . . 2 . 2 . . . . 
. . . . . . 2 2 2 2 . . . . 2 . 
. . 2 . 2 . 2 . . . . . 2 2 . . 
. . 2 2 2 . . . . . . . 2 . . . 
. . 2 . 2 . . . . 2 . 2 2 2 . . 
. . . . 2 . . . . 2 . . . . 2 . 
2 2 . 2 2 . . . . 2 . . 2 . . . 
. . . . . . . . 2 . . . . . . . 
. . 2 . . . . 2 2 2 2 2 2 . . . 
2 2 2 2 . . . 2 . . 2 . 2 2 . . 
. . . 2 . . 2 . . 2 2 . . 2 . . 
. . . . . . . . . 2 . . . . . . 
`, [myTiles.transparency16,myTiles.tile3,sprites.dungeon.floorLight1,sprites.dungeon.floorLight0,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight5,sprites.dungeon.floorLight4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
