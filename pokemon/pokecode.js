const pokeGrid = document.querySelector('.pokemonGrid')

async function loadData() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
    const data = await response.json()
    populatePokePage(data)
}

function populatePokePage(data) {
    const allPokemon = data.results
    for (const pokemon of allPokemon) {
        let pokeCard = document.createElement('div')
        pokeCard.className = 'pokeCard'
        let pokeName = document.createElement('h3')
        pokeName.textContent = pokemon.name

        pokeCard.appendChild(pokeName)
        pokeGrid.appendChild(pokeCard)
    }

}

loadData()






// async function getAPIData(url) {
//     try {
//         const response = await fetch(url)
//         const data = await response.json()
//         return data
//     } catch (error) {
//         console.error(error)
//     }
// }

// //now, use the async getAPIData functions
// function loadPage() {
//     getAPIData('https://pokeapi.co/api/v2/pokemon/1').then
//     (async(data) => {
//         for (const pokemon of data.results) {
//             await getAPIData(pokemon.url).then((pokeData) => {
//                 populatePokeCard(pokeData)
//             })
//     }
//     }

// const pokeGrid = document.querySelector('.pokemonGrid')

// function populatePokeCard(singlePokemon) {
//     let pokeScene = document.createElement('div')
//     let pokeCard = document.createElement('div')
//     let pokeFront = document.createElement('div')
//     let pokeBack = document.createElement('div')

//     let frontLabel = document.createElement('p')
//     frontLabel.textContent = singlePokemon.name

//     pokeFront.appendChild(frontLabel)
//     pokeCard.appendChild(pokeFront)
//     pokeCard.appendChild(pokeBack)
//     pokeScene.appendChild(pokeCard)
//     pokeGrid.appendChild(pokeScene)
// }

// loadPage()