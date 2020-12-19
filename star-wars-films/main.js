import { films } from '../data/films.js'
import { getLastNumber} from '../utils/index.js'

const main = document.querySelector('main')

for (let i = 0; i < 7; i++) {
    let figure = document.createElement('figure')
    let figImg = document.createElement ('img')
    figImg.src = `https://starwars-visualguide.com/assets/img/films/${i + 1}.jpg`
    let figCaption = document.createElement('figcaption')

    const foundFilm = films.find(film => getLastNumber(film.url) === (i + 1).toString())

    figCaption.textContent = foundFilm.title
    
    
    figure.appendChild(figImg)
    figure.appendChild(figCaption)
    
    main.appendChild(figure)
}






















/* films.forEach(film => {
    console.log(film.title)
    let newTitle = document.body.appendChild(document.createElement("h1"))
    newTitle.textContent = film.title
}) */

/* people.forEach(person => {
    console.log(person.name)
    let personImg = document.createElement ('img')
    personImg.src = "https://starwars-visualguide.com/assets/img/characters/10.jpg"
    main.appendChild(personImg)
    /*  appendChild(personImg) */
//})  */

//https://starwars-visualguide.com/assets/img/films/7.jpg