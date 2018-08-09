
// test document is loaded by checking the length of an element
// cache elements that are not going to change throughout the game

var $message = $('#message'),
    $letters = $('#spaces'),
    $guesses = $('#guesses'),
    $apples = $('#apples'),
    $replay = $('#replay');

var randomWords = (function() {
  var words = ['abacus', 'quotient', 'octothorpe', 'proselytize', 'stipend'];

  return function() {
    var word = words[Math.floor(Math.random() * words.length)];

    function without() {
      var new_arr = [],
          args = [].slice.call(arguments);

      words.forEach(function(el) {
        if (args.indexOf(el) === -1) {
          new_arr.push(el);
        }
      });

      return new_arr;
    }

    words = without(word);
    return word;
  };
})();

// unique properties for each game instance and therefore the following.
// we don't want to define constructor(?) properties on the prototype ...
// since that will be then replicated to all new game objects.
function Game() {
  this.incorrect = 0;
  this.letters_guessed = [];
  this.correct_spaces = 0;
  this.word = randomWords();
  if (!this.word) {
    this.displayMessage("Sorry I've run out of words!");
    this.toggleReplaylink(false);
    return this; // we don't want to continue below, there is no word to split
  }
  this.word = this.word.split("");
  this.init();
}

Game.prototype = {
  guesses: 6,
  createBlanks: function() {
    var spaces = (new Array(this.word.length + 1)).join('<span></span>');

    $letters.find('span').remove();
    $letters.append(spaces);
    this.$spaces = $('#spaces span'); // keep track of all the spaces
  },
  fillBlanksFor: function(letter) {
    var self = this;
    self.word.forEach(function(l, i) {
      if (letter === l) {
        self.correct_spaces++;
        self.$spaces.eq(i).text(letter);
      }
    });
  },
  processGuess: function(e) {
    var letter = String.fromCharCode(e.which);

    if (notALetter(e.which )) { return; }

    if (this.duplicateGuess(letter)) { return; }

    if ($.inArray(letter, this.word) !== -1) {
      this.fillBlanksFor(letter);
      // create a new span and render it in the guesses container that we've got cached
      this.renderGuess(letter);

      if (this.correct_spaces === this.$spaces.length) {
        this.win();
      }
    } else {
      // handles output of the guess itself and takes care of update of class on the apples container
      this.renderIncorrectGuess(letter);
    }

    if (this.incorrect === this.guesses) {
      this.lose();
    }

  },
  win: function() {
    this.unbind();
    this.displayMessage("You've won!");
    this.setGameStatus("win");
    this.toggleReplaylink(true);
  },
  lose: function() {
    this.unbind();
    this.displayMessage("Sorry you are out of guesses");
    this.setGameStatus("lose");
    this.toggleReplaylink(true);
  },
  duplicateGuess: function(letter) {
    var duplicate = this.letters_guessed.indexOf(letter) !== -1;

    if (!duplicate) { this.letters_guessed.push(letter); }

    return duplicate;
  },
  renderIncorrectGuess: function(letter) {
    this.incorrect++;
    this.renderGuess(letter);
    this.setClass();
  },
  setClass: function() {
    $apples.removeClass().addClass('guess_' + this.incorrect);
  },
  renderGuess: function(letter) {
    $('<span />', {
      text: letter
    }).appendTo($guesses);
  },
  displayMessage: function(text) {
    $message.text(text);
  },
  toggleReplaylink: function(which) {
    $replay.toggle(which);
  },
  emptyGuesses: function() {
    $guesses.find('span').remove(); // find spans in guesses container and remove
  },
  unbind: function() {
    // name spacing keypress to identify the specific event that needs to be removed.
    // removes any event with .game namespace.
    $(document).off('.game');
  },
  bind: function() {
    $(document).on('keypress.game', this.processGuess.bind(this));
  },
  setGameStatus: function(status) {
    $(document.body).removeClass();
    if (status) {
      $(document.body).addClass(status);
    }
  },
  init: function() {
    // every time a game is created an event is attached to the document, ...
    // binding additional events to the document is unnecessary.
    // the win or lose methods unbinds events here.
    this.bind();
    this.setClass();
    this.toggleReplaylink(false);
    this.createBlanks();
    this.emptyGuesses(); // everytime we start a game we want to remove the previous guesses.
    this.setGameStatus();
    this.displayMessage(''); // clear any previously left messages
  },
}

// a utililty function
function notALetter(code) {
  var a_code = 97,
      z_code = 122;

  return code < 97 || code > 122;
}

// new game created every time the page is refreshed.
new Game();

$replay.on('click', function(event) {
  event.preventDefault();
  new Game();
});
