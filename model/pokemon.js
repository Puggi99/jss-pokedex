class Pokemon {
    constructor(name, stats = [], ability = [], location_area_encounters = '', moves= [],types=[]) {
        this.name = name;
        this.stats = stats;
        this.ability = ability;
        this.location_area_encounters = location_area_encounters;
        this.moves = moves;
        this.types= types;

    }

    addStat(name, baseValue) {
        const newStat = new Stat(name, baseValue);
        this.stats.push(newStat);
    }

    addAbility(name, url) {
        const newAbility = new Ability(name, url);
        this.ability.push(newAbility);
    }

    addLocationArea(url) {
        const newArea = new LocationArea(url);
        this.location_area_encounters = newArea;
    }

    addMoves(name,url){
        const newMove = new Moves(name, url);
        this.moves.push(newMove);
    }

    addTypes(name,url){
        const newType = new Type(name,url)
        this.types.push(newType);
    }
}

class Stat {

    constructor(name, baseValue) {
        this.name = name;
        this.baseValue = baseValue;
    }
}


class Ability {
    constructor(name, url) {
        this.name = name;
        this.url = url;
    }

}

class LocationArea {
    constructor(url) {
        this.url = url;
    }
}

class Moves {
    constructor(name, url) {
        this.name = name;
        this.url = url;
    }
}

class Type{

    constructor(name,url){
        this.name = name;
        this.url = url;
    }
}