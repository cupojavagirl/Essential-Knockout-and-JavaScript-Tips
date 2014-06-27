var app = app || {};

app.vm = (function(){
  var people = app.data.getPeople(10);
  var selectedPerson = ko.observable();
  
  var vm = {
    people: people,
    selectedPerson: selectedPerson,
    selectPerson: selectPerson,
    removePerson: removePerson
  };
  
  return vm;

  function selectPerson(person) {
    selectedPerson(person);
    toastr.info('Selected ' + person.firstName() + ' ' + person.lastName());
  }  

  function removePerson(person, event) {
    var msg = 'Removed ' + person.firstName() + ' ' + person.lastName();
    people.remove(person);
    if(person === selectedPerson()){
      selectedPerson(undefined);
    }
    toastr.warning(msg);
  }  

})();

$(function () {
  ko.applyBindings(app.vm); 
});