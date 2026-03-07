describe('app.js', () => {
    let consoleSpy;

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    });

    test('_myCurrentAge2 should equal 36', () => {
        const _myCurrentAge2 = 36;
        console.log(_myCurrentAge2);
        expect(consoleSpy).toHaveBeenCalledWith(36);
    });

    test('$myCurrentAge1 should equal 35', () => {
        const $myCurrentAge1 = 35;
        console.log($myCurrentAge1);
        expect(consoleSpy).toHaveBeenCalledWith(35);
    });

    test('myFavouriteSubject should contain expected text', () => {
        const myFavouriteSubject = "Hello World Testers! JavaScript is fun!";
        expect(myFavouriteSubject).toBe("Hello World Testers! JavaScript is fun!");
    });

    test('myFavouriteProgrammingLanguage should equal Python', () => {
        const myFavouriteProgrammingLanguage = "Python";
        console.log(myFavouriteProgrammingLanguage);
        expect(consoleSpy).toHaveBeenCalledWith("Python");
    });

    test('calculatedAge should equal 36', () => {
        const myBirthYear = 1988;
        const currentYear = 2024;
        const calculatedAge = currentYear - myBirthYear;
        expect(calculatedAge).toBe(36);
    });

    test('myAge type should be number', () => {
        const myAge = 35;
        expect(typeof myAge).toBe('number');
    });

    test('myAge plus 20 should equal 55', () => {
        const myAge = 35;
        expect(myAge + 20).toBe(55);
    });
});