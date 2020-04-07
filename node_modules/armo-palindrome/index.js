module.exports = Phrase;

// Adds reverse a all strings
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object
function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    return string.toLowerCase();
  }

  // Returns content processed for palindrome testing
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

// Returns the letters in the content
//  this.letters = function letters() {
//    let theLetters = [];
//    Array.from(this.content).forEach( function(character) {
//      if (character.match(letterRegex)) {
//        theLetters.push(character);
//      }
//    });
//    return theLetters.join("");
//  }


  this.letters = function letters() {
    const lettersRegex = /[a-z]/gi;

    //return Array.from(this.content).filter( c => c.match(/[a-z]/i)).join("");
    return ( this.content.match(lettersRegex) || [] ).join("");
  }

  // Returns true for a palindrome
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}
