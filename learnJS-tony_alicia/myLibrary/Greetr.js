
// mini Library

// createing a IIF and passing the global and jquery object . $ is same as jQuery.

(function(global, jQuery) {



  var Greeter = function(fname, lname, language) {

    // return function constructor
    return new Greeter.init(fname, lname, language);
  }

  var supportedLangs = ['en', 'es'];

  var formalGreetings = {
    en: "Greetings",
    es: "Saludos"
  };

  var greetings = {
    en: "Hello",
    es: "Hola"
  };

  var logMessage = {
    en: "Logged in",
    es: "Inicio sesion"
  };

  Greeter.prototype = {

    fullName: function() {
      return this.fname + ' ' + this.lname;
    },

    validate: function() {
      if(supportedLangs.indexOf(this.language) === -1) {
        throw "Invalid Language";
      }
    },

    greeting: function() {
      return greetings[this.language] + ' ' + this.fname + '!' ;
    },

    formalGreeting: function() {
      return formalGreetings[this.language] + ', ' + this.fullName();
    },

    greet:function(formal) {
      var msg;

      //if undefined or null, it will be coerced to false.
      if(formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      if(console) {
        console.log(msg);
      }

      // 'this' refers to calling object at execution time
      // makes the method chainable
      return this;
    },

    log: function() {
      if(console) {
        console.log(logMessage[this.language] + ': ' + this.fullName());
      }

      return this;
    },

    setLang: function(lang) {
      this.language = lang;
      this.validate();
      return this;
    },

    HTMLGreeting: function(selector, formal) {
      if(!$) {
        throw "JQuery is not loaded."
      }
      if(!selector) {
        throw "Missing JQuery selector."
      }
      var msg;
      if(formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      $(selector).html(msg);

      return this;
    }

  };

  Greeter.init = function(fname, lname, language) {

    // decalring a self varible which always points to Greeter Object;
    var self = this;
    // this is function constructor.
    self.fname = fname || '';
    self.lname = lname || '';
    self.language = language || 'en';
  }

  Greeter.init.prototype = Greeter.prototype;

  global.Greeter = global.G$ = Greeter;


})(window, jQuery);
