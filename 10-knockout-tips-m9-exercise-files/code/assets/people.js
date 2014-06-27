﻿define(['services/logger'], function (logger) {

    var Person = function (id, first, last) {
        var self = this;
        self.id = ko.observable(id);
        self.firstName = ko.observable(first);
        self.lastName = ko.observable(last);
        self.name = ko.computed(function () {
            return this.firstName() + ' ' + this.lastName();
        }, self);
        self.photo = ko.observable('/Content/images/photos/' + getPhotoName(self.id(), 32));
    };

    var allPeople = ko.observableArray();
    var nameFilter = ko.observable('').extend({ throttle: 0 });
    var people = ko.computed(function () {
        return allPeople().filter(function (p) {
            var filter = vm.nameFilter().trim().toLowerCase();
            var first = p.firstName().toLowerCase();
            var last = p.lastName().toLowerCase();
            return !filter || first.search(filter) !== -1 || last.search(filter) !== -1;
        });
    });

    var vm = {
        allPeople: allPeople,
        nameFilter: nameFilter,
        people: people,
        activate: activate,
        title: 'People'
    };

    return vm;

    //#region Internal Methods
    function getAllPeople(){
        $.getJSON('/api/people', function (data) {
            var temp = allPeople();
            data.forEach(function (p) {
                var person = new Person(p.id, p.firstName, p.lastName);
                temp.push(person);
            });
            allPeople.valueHasMutated();
            return allPeople();
        });
    }
    
    function getPhotoName(id, i) {
        return id % i + 1 + '.jpg';
    }

    function activate() {
        logger.log('People View Activated', null, 'People', true);
        return getAllPeople();
    }
    //#endregion
});