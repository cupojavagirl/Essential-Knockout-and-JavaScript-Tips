var vm = (function () {
    var Person = function (first, last) {
        this.firstName = ko.observable(first);
        this.lastName = ko.observable(last);
        this.movie = ko.observable();
        
        this.movie.subscribe(function(val){
          console.log(val);
          val && toastr.info(val);
        })
        
    };
    
    var data = ['Iron Man', 'Iron Man 2', 'Iron Man 3', 'Avengers', 
      'LOTR: The Fellowship of the Ring',
      'LOTR: The Two Towers',
      'LOTR: The Return of the Ring',
      'Star Wars I: Phantom Menace',
      'Star Wars II: Attack of the Clones',
      'Star Wars III: Revenge of the Sith',
      'Star Wars IV: A New Hope',
      'Star Wars V: The Empire Strikes Back',
      'Star Wars VI: Return of the Jedi',
      'The Princess Bride',
      'Thor',
      'Captain America'
      ];
    var movies = ko.observableArray(data);

    var p1 = new Person('John', 'Papa');
    var p2 = new Person('Colleen', 'Papa');
    var p3 = new Person('Ella', 'Papa');
    
    var people = ko.observableArray([p1, p2, p3]);

    var vm = {
        people: people,
        movies: movies,
        moviesJSON: ko.toJSON(movies, null, 0)
    };
    
    return vm;
})();

ko.applyBindings(vm);