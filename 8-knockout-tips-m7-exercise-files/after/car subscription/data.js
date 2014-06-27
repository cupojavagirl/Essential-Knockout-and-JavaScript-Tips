var app = app || {};

app.data = (function () {
  var 
    allMakes = ko.observableArray([
        new app.Make("Lexus", "L"),
        new app.Make("BMW", "B")]),
		allModels = ko.observableArray([
				new app.Model("ISF", "L", "1"),
				new app.Model("IS350", "L", "2"),
				new app.Model("ES350", "L",  "3"),
				new app.Model("Z3", "B", "4"),
				new app.Model("i335", "B", "5"),
				new app.Model("i735", "B", "6")]),
		allCars = ko.observableArray([
				new app.Car().key("ASD928K1").color("red").year(2008).modelKey("1"),
				new app.Car().key("KJAS90U2").color("red").year(2011).modelKey("1"),
				new app.Car().key("J89J1233").color("black").year(2009).modelKey("1"),
				new app.Car().key("Y8M34N9").color("blue").year(2008).modelKey("1"),
				new app.Car().key("ASD3DFG2").color("yellow").year(2008).modelKey("2"),
				new app.Car().key("ASDF23RF").color("red").year(2007).modelKey("2"),
				new app.Car().key("SGS4SDG4").color("white").year(2009).modelKey("3"),
				new app.Car().key("KJD347D3").color("blue").year(2010).modelKey("3"),
				new app.Car().key("D9F8R7E7").color("yellow").year(2012).modelKey("4"),
				new app.Car().key("K3K4L6S9").color("red").year(2009).modelKey("4"),
				new app.Car().key("W1M3L4K2").color("black").year(2007).modelKey("5"),
				new app.Car().key("UU33KK22").color("blue").year(2004).modelKey("5"),
				new app.Car().key("ASD098K2").color("purple").year(2008).modelKey("6"),
				new app.Car().key("LKJ123H4").color("red").year(2011).modelKey("6")
			]);
	return {
		allMakes: allMakes,
		allModels: allModels,
		allCars: allCars
	};
} ());
