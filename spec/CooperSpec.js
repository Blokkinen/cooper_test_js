describe("Person", function() {

   beforeEach(function() {
       person = new Person({
       gender: 'Female',
           age: 30
       });
    });

    it("Should have gender", function() {
        expect(person.gender).toBe('Female');
    });

    it("Should have age", function() {
       expect(person.age).toBe(30);
    });

});