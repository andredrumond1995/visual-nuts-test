const countriesMockedData = require("../countries.mocked.data.json");


const { Exercise1Service } = require("./services/exercise1.service");
const { Exercise2Service } = require("./services/exercise2.service");
const exercise1Service = new Exercise1Service();
const exercise2Service = new Exercise2Service();
(async () => {
    try {
        console.log('---- Exercise 1 ----')
        await exercise1Service.print(10)

        console.log('---- Exercise 2 ----')
        const { amount: countriesAmount } = await exercise2Service.getCountriesAmount(countriesMockedData)
        console.log(`Country amount: ${countriesAmount}`)

        const { country: countryWithMostLanguagesByParam } = await exercise2Service.getCountryWithMostLanguagesByParam(countriesMockedData, 'de')
        console.log(`Country with most official languages: ${countryWithMostLanguagesByParam}`)

        const countContriesOffialLanguages = await exercise2Service.countContriesOffialLanguages(countriesMockedData)
        console.log(`Countries languages amount:`)
        console.log(countContriesOffialLanguages)

        const { country: countryWithMostLanguages } = await exercise2Service.getContryWithHighestOffialLanguages(countriesMockedData)
        console.log(`Country with most official languages: ${countryWithMostLanguages}`)

        const monstCommonLanguages = await exercise2Service.getMostCommonOffialLanguages(countriesMockedData)
        console.log(`Countries languages amount:`)
        console.log(monstCommonLanguages)

    } catch (error) {
        console.error(error)
    }
})();
