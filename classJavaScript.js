class Person {

    setName(f, l) {
        this.firstName = f;
        this.lastName = l;
    }

    getName() {
        return this.firstName + " " + this.lastName;
    }
}

let person = new Person();
person.setName('Arya', 'Stark');
// console.log(person.getName());
// console.log(person.firstName);

var personModule = (() => {
    let firstName;
    let lastName;
    return {
        setName(f, l) {
            firstName = f;
            lastName = l;
        },
        getName() {
            return firstName + " " + lastName;
        }
    }
})();
personModule.setName("Jon", "Snow");
// console.log(personModule.getName());


var personModule2 = (function () {

    var firstName;
    var lastName;

    function setName(f, l) {
        firstName = f;
        lastName = l;
    }

    function getName() {
        return firstName + " " + lastName;
    }

    return {
        setName: setName,
        getName: getName
    }

})();

personModule2.setName("S", "A");
// console.log(personModule2.getName());


var countDigitOne = function(n) {
    for (let i=0;i<= n;i++){
        if (i.toString().includes("1")){
            console.log(i);
        };
    }
};

// countDigitOne(13);