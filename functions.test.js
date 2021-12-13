const {returnTwo, greeting, add} = require('./functions')




test('should equal 2', () => expect(2).toBe(2))


describe('Should return the string with the name passed in', () =>{
    test('should return James', () => expect(greeting('James')).toEqual("Hello, James."))
    test('should return Jill', () => expect(greeting('Jill')).toEqual("Hello, Jill."))
})


describe('Should return the sum', () => {
    test('should equal 14', () => expect(add(5, 9)).toEqual(14))
    test('should equal 3', () => expect(add(1,2)).toEqual(3))
})


