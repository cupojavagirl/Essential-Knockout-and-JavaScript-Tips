var app = app || {};

// The ViewModel
app.vm = (function () {
  var makes = app.data.allMakes; // Lexus, Toyota, etc.
  var selectedMake = ko.observable();
  var selectedModel = ko.observable();
  var selectedCar = ko.observable();
	
  // Get the list of Models for the selected Make
	var models = ko.computed(function () {
		if (!selectedMake()) { return []; }
		var selectedMakeKey = selectedMake().key();
		return ko.utils.arrayFilter(app.data.allModels(), function (item) {
			return stringStartsWith(item.makeKey(), selectedMakeKey);
		});
	});

  // Get the list of Cars for the selected Model 
  // Cars == Year + color
	var cars = ko.computed(function () {
		if (!selectedModel()) { return []; }
		var selectedModelKey = selectedModel().key();
		return ko.utils.arrayFilter(app.data.allCars(), function (item) {
			return stringStartsWith(item.modelKey(), selectedModelKey);
		});
	});
    
  var vm = {
    cars: cars,
    makes: makes,
    models: models,
    selectedMake: selectedMake,
    selectedModel: selectedModel,
    selectedCar: selectedCar
	};

  return vm;
  
  function stringStartsWith(string, startsWith) {
    string = string || '';
    if (!startsWith || !startsWith.length) { 
      return false; 
    }
    if (startsWith.length > string.length){
        return false;
    }
    return string.substring(0, startsWith.length) === startsWith;
  }
  
}());

// Whenever the selectedMake changes, reset the selectedModel 
app.vm.selectedMake.subscribe(function (item) {
  var vm = app.vm;
  item && toastr.success('selected make = ' + item.name());
});

// Whenever the selectedModel changes, reset the selectedCar
app.vm.selectedModel.subscribe(function (item) {
  var vm = app.vm;
  if (!vm.selectedMake() || !vm.selectedModel()) return;
  var msg = vm.selectedMake().name() +  ' / ' + item.name();
  item && toastr.success('selected make and model = ' + msg);
});

// Whenever the selectedCar changes
app.vm.selectedCar.subscribe(function (item) {
  var vm = app.vm;
  if (!vm.selectedMake() || !vm.selectedModel() || !vm.selectedCar()) return;
  var msg = vm.selectedMake().name() + ' / ' + vm.selectedModel().name() + ' / ' + item.desc();
  item && toastr.success('selected make,  model and car = ' + msg);
});


$(function () {
	ko.applyBindings(app.vm);
});
