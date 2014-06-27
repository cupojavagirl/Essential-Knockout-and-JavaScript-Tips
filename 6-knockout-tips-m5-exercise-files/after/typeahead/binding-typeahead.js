ko.bindingHandlers.typeahead = {
  init: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
    var $element = $(element);
	var allBindings = allBindingsAccessor();
	//var value = ko.utils.unwrapObservable(allBindings.value);
	var source = ko.utils.unwrapObservable(valueAccessor());
	var items = ko.utils.unwrapObservable(allBindings.items) || 4;
		
	var valueChange =  function(item){
		//console.log('item = ' + item);
		return item;
	};
    
    var highlighter = function(item){
      var matchSpan = '<span style="color: blue;font-weight:bold">';
      var query = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
      return item.replace(new RegExp('(' + query + ')', 'ig'), function ($1, match) {
        return matchSpan + match + '</span>';
      });
    };
		
	var options = {
		source : source,
		items: items,
		updater: valueChange,
		highlighter: highlighter
	};

	$element
		.attr('autocomplete', 'off')
		.typeahead(options);
	}
};
