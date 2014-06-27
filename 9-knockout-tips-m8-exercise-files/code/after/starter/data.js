var app = app || {};

app.data = (function () {
  var allPeople = ko.observableArray([
    new app.Person(1, 'John', 'Papa', '@john_papa'),
    new app.Person(2, 'Landon', 'Papa', '@landonpapa'),
    new app.Person(3, 'Ryan', 'Niemeyer', '@rpniemeyer'),
    new app.Person(4, 'Steve', 'Sanderson', '@stevensanderson'),
    new app.Person(5, 'Ward', 'Bell', '@wardbell'),
    new app.Person(6, 'Scott', 'Guthrie', '@scottgu')
  ]);
  var getPeople = function(count){
    var people = [];
    for(var i=1; i <= count; i++){
      people.push(new app.Person(i, 'John' + i, 'Papa' + i, '@john_papa' + i));
    }
    return ko.observableArray(people);
  };
	return {
		allPeople: allPeople,
    getPeople: getPeople
	};
} ());
