import Country from "./Country";

class Game {
    #score = 0;
    #highscore = localStorage.getItem(`progweb-country-game-highscore`) ?? 0;

    constructor(countries) {
        this.countries = countries;
        this.countryIndex = 0;
        this.#updateCountry();
    }

    #incremantScore() { 
        this.#score += 1;
        if(this.#score > this.#highscore){
            this.#highscore = this.#score;
            localStorage.setItem(`progweb-country-game-highscore`, this.#highscore);

        }
    }
    get score () { return this.#score; }
    get highscore () { return this.#highscore }

    isEnd() { return this.countryIndex + 1 >= this.countries.length; }

    #next() {
        if(!this.isEnd()){
            this.countryIndex += 1;
            this.#updateCountry();
        }
    }

    #updateCountry() {
        this.currentCountry = new Country(this.countries[this.countryIndex]);
        this.currentCountry.renderFlag();
    }

    answer(answer) {
        if(this.currentCountry.is(answer)){
            this.#incremantScore();
        }
        this.#next();
    }

}

export default Game;