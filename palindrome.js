// Adds reverse a all strings
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

String.prototype.blank = function() {
  return !!this.match(/\s|^\s+$/);
}

Array.prototype.last = function() {
  return this.slice(-1);
}

// Returns true for a palindrome, false otherwise
// function palindrome(string) {
// let processedContent = string.toLowerCase();
// return processedContent === reverse(processedContent);
// }

// Defines a Phrase object
function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    return string.toLowerCase();
  }

  // Returns content processed for palindrome testing
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  // Returns true for a palindrome
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}
