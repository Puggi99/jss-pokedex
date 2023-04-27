//console.log(window.location)
//console.log(window.location.search)

const urlSearchParams = new URLSearchParams(window.location.search);

//console.log(urlSearchParams)

const pokemonName = urlSearchParams.get('pokemon');


console.log(pokemonName);


PokeService.getDetail(pokemonName).then(pokemon => {
    console.log(pokemon);
})
