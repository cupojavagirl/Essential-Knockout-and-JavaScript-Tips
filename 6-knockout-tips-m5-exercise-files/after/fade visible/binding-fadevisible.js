ko.bindingHandlers.fadeVisible = {
    init: function (element, valueAccessor) {
        // Start visible/invisible according to initial value
        var shouldDisplay = valueAccessor();
        $(element).toggle(shouldDisplay);
    },
    update: function (element, valueAccessor, allBindingsAccessor) {
        // On update, fade in/out
        var shouldDisplay = valueAccessor(),
            allBindings = allBindingsAccessor(),
            duration = allBindings.fadeDuration || 500; // 500ms is default duration unless otherwise specified

        shouldDisplay ? $(element).fadeIn(duration) 
            : $(element).fadeOut(duration);
    }
};
