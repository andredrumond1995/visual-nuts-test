const countriesMockedData = require("../../../countries.mocked.data.json");
const { Exercise2Service } = require("../exercise2.service");

const mockExercise2Service = Exercise2Service;
const mockedExercise2Service = new mockExercise2Service();
describe("Exercise 2", () => {
    test("Exercise 2 - should print number of countries", async () => {
        const sut = await mockedExercise2Service.getCountriesAmount(countriesMockedData);
        const { amount: countriesAmount } = sut;
        expect(countriesAmount).toBe(5);
    });

    test("Exercise 2 - should get country with most languages by param", async () => {
        const sut = await mockedExercise2Service.getCountryWithMostLanguagesByParam(countriesMockedData, "de");
        const { country: countryWithMostLanguages } = sut;
        expect(countryWithMostLanguages).toBe("BE");
    });

    test("Exercise 2 - should count countries official languages", async () => {
        const [sut] = await mockedExercise2Service.countContriesOffialLanguages(countriesMockedData);
        expect(sut).toHaveProperty("offialLanguagesAmount");
    });

    test("Exercise 2 - should get country with highest number of official languages", async () => {
        const sut = await mockedExercise2Service.getContryWithHighestOffialLanguages(countriesMockedData);
        const { country: countryWithMostLanguages } = sut;
        expect(countryWithMostLanguages).toBe("BE");
    });

    test("Exercise 2 - should get most common language", async () => {
        const [sut] = await mockedExercise2Service.getMostCommonOffialLanguages(countriesMockedData);
        expect(sut).toHaveProperty("amount");
    });

    test("Exercise 2 - should thrown an error and go to catch block", async () => {
        const wrongCountriesData = [...countriesMockedData, { contryi: 1, languages: [1, 2] }];
        try {
            await mockedExercise2Service.getCountriesAmount(wrongCountriesData);
        } catch (error) {
            console.log(error);
            expect(error).not.toBeUndefined();
        }
    });
});
