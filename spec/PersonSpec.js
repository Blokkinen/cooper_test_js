describe("Person", function() {

   beforeEach(function() {
       person = new Person({ gender: 'Female', age: 30, distance: 2345
       });
    });

    it("Should have gender", function() {
        expect(person.gender).toBeDefined();
        expect(person.gender).toBe('Female');
    });

    it("Should have age", function() {
        expect(person.age).toBeDefined();
        expect(person.age).toBe(30);
    });

    it("Should have ran a distance of 2345 meters", function() {
        expect(person.distance).toEqual(2345);
    });

});