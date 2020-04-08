let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(element.toLowerCase().split(/\s+/).join("-"));
  });
  return urls;
}

// console.log(imperativeUrls(states));

// Functional version
function functionalUrls(elements) {
  return elements.map(element => element.toLowerCase().split(/\s+/).join("-"));
}
// console.log(functionalUrls(states));

// Returns url-friendly version of a string
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

// with urlify function

// First imperative version
function imperativeUrlify(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}
// console.log(imperativeUrlify(states));

// Then functional version
function functionalUrlify(elements) {
  return elements.map(element => urlify(element));  
}
// console.log(functionalUrlify(states));

// Excercise to return https://example.com/<urlified form>

function fullUrl(string) {
  return `https://example.com/${string}`
}
function functionalFullUrl(elements) {
  return elements.map(element => fullUrl(urlify(element)));
}

// console.log(functionalFullUrl(states)); 

// Introducing filter
// Single out single word states
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function (element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}
// console.log(imperativeSingles(states));

function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
// console.log(functionalSingles(states));

// Exercise two filter functions for Dakotas
// First with String#includes 

function includesDakota(elements) {
  return elements.filter(element => element.includes('Dakota'));
}
// console.log(includesDakota(states));

// Then with regex split length == 2
function splitDakota(elements) {
  return elements.filter(element => element.split(/\s+/).length === 2 );
}
// console.log(splitDakota(states));

// Towars Reduce!
// example 1 - sum
let numbers = [1,2,3,4,5,6,7,8,9,10];

// sum: Imperative
function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
    total += n;
  });
  return total;
}
// console.log(imperativeSum(numbers));

//
function functionalSum(elements) {
  return elements.reduce((total, n) => {return total += n});
}
// console.log(functionalSum(numbers));

// Recude example 2
// State name lengths into a plain object, ass array

// lengths: Imperative solution
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));

// lengths: Functional solution
function functionalLengths(elements) {
  return elements.reduce((lengths, state) => {
    lengths[state] = state.length; return lengths;
  }, {});
}
console.log(functionalLengths(states));