var app = app || {};

//track the number of re-evaluations for a computed observable
//ko.observableArray.fn.trackReevaluations = function () {
ko.observableArray.fn.trackReevaluations = function () {
    var self = this;
    self.reevaluationCount = ko.observable(0);
    self.subscribe(function () {
        this.reevaluationCount(this.reevaluationCount() + 1);
    }, self);
    return self;
};

app.vm = (function () {
    var people = ko.observableArray().trackReevaluations();
    var Person = app.Person;
    var allNames = app.data.allNames;

    var addPeople = function () {
        var start = Date.now();
        for (var i = 0; i < allNames.length; i++) {
            //allNames.forEach(function (name) {
            var name = allNames[i];
            people.push(new Person(name.first, name.last));
        };
        logTiming(start, 'addPeople: ');
    };

    var addPeopleBetter = function () {
        var start = Date.now();
        var underlyingArray = people();
        allNames.forEach(function (name) {
            underlyingArray.push(new Person(name.first, name.last));
        });
        people.valueHasMutated();
        logTiming(start, 'addPeopleBetter: ');
    };

    var addLotsOfPeople = function () {
        var start = Date.now();
        var morePeeps = app.data.getPeople(100);
        morePeeps.forEach(function (p) {
            people.push(p);
        });
        // non ES5, if needed
        //for (var i = 0; i < morePeeps.length; i++) {
        //    people.push(morePeeps[i]);
        //}
        logTiming(start, 'addLotsOfPeople: ');
    };

    var addLotsOfPeopleBetter = function () {
        var start = Date.now();
        var underlyingArray = people();
        var morePeeps = app.data.getPeople(100);
        morePeeps.forEach(function (p) {
            underlyingArray.push(p);
        });
        logTiming(start, 'add100PeopleBetter: ');
        people.valueHasMutated();
    };

    var clear = function () {
        people([]);
    };

    var resetTracker = function() {
        people.reevaluationCount(0);
    };

    // start us off
    people.push(new Person('Scott', 'Guthrie'));

    people.subscribe(function () {
        toastr.info('People changed. Now has ' + people().length + ' records');
    });

    return {
        people: people,
        addPeople: addPeople,
        addPeopleBetter: addPeopleBetter,
        addLotsOfPeople: addLotsOfPeople,
        addLotsOfPeopleBetter: addLotsOfPeopleBetter,
        clear: clear,
        resetTracker: resetTracker
    };



    //#region internal functions
    function logTiming(start, msg) {
        console.log(msg + ' ' + (Date.now() - start) + ' ms');
    }
    //#endregion


})();

$(function () {
    ko.applyBindings(app.vm);
    toastr.success('loaded');
});
