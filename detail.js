//console.log(window.location)
//console.log(window.location.search)

const urlSearchParams = new URLSearchParams(window.location.search);

//console.log(urlSearchParams)

const pokemonName = urlSearchParams.get('pokemon');


console.log(pokemonName);


PokeService.getDetail(pokemonName).then(pokemonObject => {
    console.log('data from db', pokemonObject)
    const newPokemon = createNewPokemon(pokemonObject)
    displayPokemon(newPokemon);
})

// // STATS
// for (let i = 0; i < pokemonObject.stats.length; i++) {
//     const statObject = pokemonObject.stats[i];
//     myPokemon.addStat(statObject.stat.name, statObject.base_stat)
// }
// // ABILITY
//     for (let i = 0; i < pokemonObject.abilities.length; i++) {
//         const abilityObject = pokemonObject.abilities[i];
//         myPokemon.addAbility(abilityObject.ability.name, abilityObject.ability.url)

//     }

// // AREA

//     myPokemon.addLocationArea(pokemonObject.location_area_encounters)


// // MOVES

//     for (let i = 0; i < pokemonObject.moves.length; i++) {
//         const movesObject = pokemonObject.moves[i];
//         myPokemon.addMoves(movesObject.move, movesObject.version_group_details)

//     }
//     console.log('pokemon', myPokemon);

//     displayPokemon(myPokemon)
// })





// PokeService.getDetail(pokemonName).then(pokemon=>{
//     displayPokemonName(pokemon);
//     displayPokemonHeight(pokemon)
//     displayPokemonWeight(pokemon)
// })




// function displayPokemonName(pokemon){
//     const pokemonName = document.getElementById('pokemonName-container');
//     pokemonName.innerHTML =``;
//     const pokemonText = document.createTextNode(`${pokemon.name}`);
//     pokemonName.appendChild(pokemonText);
// }

// function displayPokemonHeight(pokemon){
//     const pokemonHeight = document.getElementById('pokemon-height');
//     pokemonHeight.innerHTML = ``;
//     pokemonHeight.innerHTML += 'Height: ' + pokemon.height*10 + 'cm'
// }


// function displayPokemonWeight(pokemon){
//     const pokemonWeight = document.getElementById('pokemon-weight');
//     pokemonWeight.innerHTML = ``;
//     pokemonWeight.innerHTML += 'Weight: ' + pokemon.weight/10 + 'kg'
// }

// function displayPokemonType(pokemon){

// }

function displayPokemon(pokemon) {
    document.getElementById('pokemon-name').innerHTML = pokemon.name;
    const statsContainer = document.getElementById('pokemon-stats');

    for (const stat of pokemon.stats) {
        statsContainer.innerHTML += `<li><strong> ${stat.name}: </strong> ${stat.baseValue}</li>`
    }

    const typesContainer = document.getElementById('pokemon-types');
    for (const type of pokemon.types) {
        typesContainer.innerHTML += `<li><a href="./type.html?typeUrl=${type.url}"><strong>${type.name}</strong></a></li>`
    }
}

function createNewPokemon(pokemonObject) {
    const myPokemon = new Pokemon(pokemonObject.name)

    for (let i = 0; i < pokemonObject.stats.length; i++) {
        const statObject = pokemonObject.stats[i];
        myPokemon.addStat(statObject.stat.name, statObject.base_stat)
    }

    for (let i = 0; i < pokemonObject.types.length; i++) {
        const typeObject = pokemonObject.types[i];
        myPokemon.addTypes(typeObject.type.name, typeObject.type.url)


    }
    return myPokemon
}

