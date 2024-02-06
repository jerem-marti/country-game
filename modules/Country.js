

class Country {
    #details;
    #names;

    constructor(jsonCountry) {
        this.#details = jsonCountry;
        this.#initNames();
    }

    #initNames() {
        const tabnames = Object.values(this.#details.translations).map(translation => translation.common.toLowerCase());
        this.#names = new Set(tabnames);
    }

    is(countryName) {
        return this.#names.has(countryName.toLowerCase());
    }

    renderFlag () {
        const container = document.querySelector(`#flag`);
        const flag = document.createElement(`h1`);

        ///////////////////CORRIGER L'AFFICHAGE DES EMOJIS !!!///////////////////////
        /*console.log(this.#details);

        flag.innerText = this.#details.flag;
        container.append(flag);*/
        console.log(this.#names);
        container.innerHTML = `<h1><img src="${this.#details.flags.svg}" alt="${this.#details.flag}"/></h1>`;
    }


}

export default Country;