var app = app || {};

app.Make = function (name, key) {
  var self = this;
  self.key = ko.observable(key);
	self.name = ko.observable(name);
};

app.Model = function (name, makeKey, key) {
	var self = this;
	self.key = ko.observable(key);
	self.name = ko.observable(name);
	self.makeKey = ko.observable(makeKey);
};

app.Car = function () {
	var self = this;
	self.key = ko.observable();
	self.color = ko.observable();
	self.year = ko.observable();
	self.modelKey = ko.observable();
	self.desc = ko.computed(function () {
		return self.year() + " " + self.color();
	}, self);
};