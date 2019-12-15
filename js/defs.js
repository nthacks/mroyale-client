var tileDefs = {
    0:  {'name': 'AIR'},
    1:  {'name': 'SOLID STANDARD'},
    2:  {'name': 'SOLID BUMPABLE'},
    3:  {'name': 'SOLID BREAKABLE NORMAL'},
    4:  {'name': 'SOLID DAMAGE'},
    5:  {'name': 'SEMISOLID'},
    6:  {'name': 'SEMISOLID WEAK'},
    7:  {'name': 'WATER STANDARD'},
    8:  {'name': 'WATER SURFACE'},
    9:  {'name': 'WATER CURRENT', 'extraDataName': 'Strength (0=full force left, 255=full force right)'},
    17: {'name': 'ITEM BLOCK STANDARD', 'extraDataName': 'Content', 'extraDataType': 'objId'},
    18: {'name': 'COIN BLOCK STANDARD'},
    19: {'name': 'COIN BLOCK MULTI', 'extraDataName': 'Coin Count'},
    21: {'name': 'ITEM BLOCK INVISIBLE', 'extraDataName': 'Content', 'extraDataType': 'objId'},
    22: {'name': 'COIN BLOCK INVISIBLE'},
    24: {'name': 'VINE BLOCK'},
    81: {'name': 'WARP TILE', 'extraDataName': 'Target Warp ID'},
    82: {'name': 'WARP PIPE SLOW', 'extraDataName': 'Target Warp ID'},
    83: {'name': 'WARP PIPE RIGHT SLOW', 'extraDataName': 'Target Warp ID'},
    84: {'name': 'WARP PIPE FAST', 'extraDataName': 'Target Warp ID'},
    85: {'name': 'WARP PIPE RIGHT FAST', 'extraDataName': 'Target Warp ID'},
    86: {'name': 'LEVEL END WARP', 'extraDataName': 'Target Level ID'},
    160:{'name': 'FLAGPOLE', 'extraDataName': 'Coin Award (0=no, 1=yes)'},
    240:{'name': 'VOTE BLOCK'},
};

var objDefs = {
    1:   {'name': 'PLAYER'},
    17:  {'name': 'GOOMBA'},
    18:  {'name': 'KOOPA'},
    19:  {'name': 'KOOPA TROOPA'},
    21:  {'name': 'FLYING FISH'},
    22:  {'name': 'UNSPELLABLE PLANT'},
    25:  {'name': 'BOWSER'},
    33:  {'name': 'FIRE TRAP'},
    34:  {'name': 'FIRE BLAST'},
    35:  {'name': 'LAUNCHER'},
    36:  {'name': 'BULLET'},
    49:  {'name': 'HAMMER BRO'},
    81:  {'name': 'MUSHROOM'},
    82:  {'name': 'FIRE FLOWER'},
    83:  {'name': 'ONEUP'},
    84:  {'name': 'STAR'},
    85:  {'name': 'AXE'},
    86:  {'name': 'POISON MUSHROOM'},
    97:  {'name': 'COIN'},
    100: {'name': 'GOLD FLOWER'},
    145: {'name': 'PLATFORM'},
    146: {'name': 'BUS PLATFORM'},
    149: {'name': 'SPRING'},
    161: {'name': 'FIREBALL PROJECTILE'},
    162: {'name': 'FIRE BREATH PROJECTILE'},
    163: {'name': 'HAMMER PROJECTILE'},
    177: {'name': 'FLAG'},
    253: {'name': 'TEXT'},
    254: {'name': 'CHECKMARK'},
};
