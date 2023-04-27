//console.log(window.location)
//console.log(window.location.search)

const urlSearchParams = new URLSearchParams(window.location.search);

//console.log(urlSearchParams)

const pokemonName = urlSearchParams.get('pokemon');


console.log(pokemonName);


PokeService.getDetail(pokemonName).then(pokemonObject => {
    console.log('data from db', pokemonObject)
    const myPokemon = new Pokemon(pokemonObject.name)

// STATS
    for (let i = 0; i < pokemonObject.stats.length; i++) {
        const statObject = pokemonObject.stats[i];
        myPokemon.addStat(statObject.stat.name, statObject.base_stat)
    }
// ABILITY
    for (let i = 0; i < pokemonObject.abilities.length; i++) {
        const abilityObject = pokemonObject.abilities[i];
        myPokemon.addAbility(abilityObject.ability.name, abilityObject.ability.url)
        
    }

// AREA

    myPokemon.addLocationArea(pokemonObject.location_area_encounters)


// MOVES

    for (let i = 0; i < pokemonObject.moves.length; i++) {
        const movesObject = pokemonObject.moves[i];
        myPokemon.addMoves(movesObject.move, movesObject.version_group_details)
        
    }
    console.log('pokemon', myPokemon);

    displayPokemon(myPokemon)
})


function displayPokemon(pokemon){
   const title = document.getElementById('pokemonName-container')
   title.appendChild(pokemon)
}

