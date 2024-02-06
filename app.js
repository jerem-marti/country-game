import { shuffle } from "lodash";
import Game from "./modules/Game";

const form = document.querySelector(`form`);
const score = document.querySelector(`#score`);
const highscore = document.querySelector(`#highscore`);

async function getCountries() {
    let rawCountries = await fetch(`https://restcountries.com/v3.1/all`);
    let jsonCountries = await rawCountries.json();
    return shuffle(jsonCountries);
}

const shuffle = (countries) => shuffle(countries);

getCountries().then(countries => {
    const game = new Game(countries);
    highscore.innerHTML = `<h1>Highscore: ${game.highscore}</h1>`;

    form.addEventListener(`submit`, (e) => {
        e.preventDefault();
        if(!game.isEnd()){
            const input = e.currentTarget.querySelector(`input`).value;
            game.answer(input);
            score.innerHTML = `<h1>Score: ${game.score}</h1>`;
            highscore.innerHTML = `<h1>Highscore: ${game.highscore}</h1>`;
        }
        else {
            alert(`Le jeu est terminé. Voici votre score : ${game.score}`);
        }
        e.currentTarget.reset();
    });
    
});