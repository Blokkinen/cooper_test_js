describe("CooperTest", function() {
    var person;
    var calculate;

            beforeEach(function() {
                person = new Person({gender: 'female', age: 30, distance: 2345});
                calculate = new CooperTest();
            });

            it("Should have a result of \"Above Average\"", function() {
                person.result();
                expect(person.message).toEqual("Above Average");
            });
        });