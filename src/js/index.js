/* 
when we click on the pokemon on the side menu we need to hide the card already opened and show the corresponding card to the pokemon that was clicked

for that, we're gonna need two elements:
1- menu
2- pokemon card

we need to create two variables in JS in order to work with the screen elements

we're gonna need to work with a click event made by the user at the pokemon menu

- remove the class 'opened' only in the opened card
- when a pokemon is clicked by the user at the menu, JS is gonna take that pokemon's ID to know what card to show
- remove the class 'active' that marks the selected pokemon
- add the 'active' class in the selected pokemon at the menu 
*/

//we need to create two variables at JS in order to work with the screen elements

const listaSelecaoPokemons = document.querySelectorAll('.menupokemon')
const pokemonscard = document.querySelectorAll('.pokemon-card')


listaSelecaoPokemons.forEach(menupokemon => {
    //we're gonna need to work with a click event made by the user at the pokemon menu
    menupokemon.addEventListener('click', () => {
        //remove the class 'opened' only in the opened card
        const openedPokemonCard = document.querySelector('.open')
        openedPokemonCard.classList.remove('open')
        
        //when a pokemon is clicked by the user at the menu, JS is gonna take that pokemon's ID to know what card to show
        const idSelectedPokemon = menupokemon.attributes.id.value

        const idPokemonCardToOpen = idSelectedPokemon + '-card'
        const pokemonCardToOpen = document.getElementById(idPokemonCardToOpen)
        pokemonCardToOpen.classList.add('open')

        //remove the class 'active' that marks the selected pokemon

        const activePokemon = document.querySelector('.active')
        activePokemon.classList.remove('active')

        //add the 'active' class in the selected pokemon at the menu
        
        const selectedPokemon = document.getElementById(idSelectedPokemon)
        selectedPokemon.classList.add('active')

    })
})