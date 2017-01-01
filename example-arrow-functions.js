var names = ['Andrew','John','jen'];

names.forEach(function(name) {
    console.log('forEach',name);   
});

names.forEach((name) => {
    console.log('forEach',name);
});

names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';
console.log(returnMe('Andrew'));

var person = {
    name: 'Andrew',
    //greet: function() {
    //    names.forEach(function() {
    //        console.log(this.name);
    //    });
    //}
    greet: function() {
        names.forEach((name) => {
            console.log(this.name);
        });
    }
}

person.greet();

function add(a, b) {
    return a + b;
}

var addStatement = (a, b) => {
    return a + b;
}

var addExpression = (a, b) => a + b;

console.log(addExpression(6,0));