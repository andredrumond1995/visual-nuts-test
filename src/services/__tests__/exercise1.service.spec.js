const { Exercise1Service } = require("../exercise1.service");

const mockExercise1Service = Exercise1Service 
const mockedExercise1Service = new mockExercise1Service() 
describe('Exercise 1', () =>{
    test('Exercise 1 - should print successfully 100 times', async () => {
        const limit = 15
        const sut = await mockedExercise1Service.print(limit)
        expect(sut).toBeUndefined()
    })
})