const { countryArrayValidator } = require("../shared/validators/country.array.validator.joi");
class Exercise2Service {
    async getCountriesAmount(countries) {
        await this.verifyCountriesArray(countries);

        const countriesFiltered = countries.filter((country, index, self) => index === self.findIndex((contryToBeChecked) => contryToBeChecked.country === country.country));

        return { countries: countriesFiltered, amount: countriesFiltered.length };
    }

    async getCountryWithMostLanguagesByParam(countries, countryAcronym) {
        const { countries: countriesFiltered } = await this.getCountriesAmount(countries);
        const country = countriesFiltered.filter((country) => country.languages.includes(countryAcronym)).reduce((prev, current) => (prev?.languages?.length > current?.languages?.length ? prev : current), {});
        return country;
    }

    async countContriesOffialLanguages(countries) {
        const { countries: countriesFiltered } = await this.getCountriesAmount(countries);
        const countriesMapped = countriesFiltered.map((country) => ({ country: country.country, offialLanguagesAmount: country?.languages?.length }));
        return countriesMapped;
    }

    async getContryWithHighestOffialLanguages(countries) {
        const countriesFiltered = await this.countContriesOffialLanguages(countries);
        return countriesFiltered.reduce((prev, current) => (prev?.offialLanguagesAmount > current?.offialLanguagesAmount ? prev : current), {});
    }

    async getMostCommonOffialLanguages(countries) {
        const languages = [];
        const { countries: countriesFiltered } = await this.getCountriesAmount(countries);
        for (const country of countriesFiltered) {
            country.languages.forEach((language) => {
                if (!languages.find((l) => l.language === language)) {
                    languages.push({ language: language, amount: 1 });
                } else {
                    const languageIndex = languages.findIndex((l) => l.language === language);
                    languages[languageIndex]["amount"] += 1;
                }
            });
        }
        return languages.sort((a, b) => b.amount - a.amount);
    }

    async verifyCountriesArray(countries) {
        const { error } = countryArrayValidator.validate(countries);
        if (error) throw error;
    }
}

module.exports = { Exercise2Service };
