var vm = (function () {
    var Person = function (first, last) {
        this.firstName = ko.observable(first);
        this.lastName = ko.observable(last);
        this.child = {};
        this.pets = {};
    };

    var p1 = new Person('John', 'Papa');
    var p2 = new Person('Colleen', 'Papa');
    var p2a = new Person('Ella', 'Papa');
    p2.child = ko.observable(p2a);
    p2a.child = ko.observable(p2);
    p2.pets = ko.observableArray([p1, p1]);
    var people = ko.observableArray([p1, p2]);

    var vm = {
        people: people
    };

    return vm;
})();

ko.applyBindings(vm);