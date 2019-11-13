let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join('-');
}



// urls: Imperative version
function imperativeUrls(elements) {
  let urls =[];
  elements.forEach(function(element){
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states));

// urls: Functional version
function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}

console.log(functionalUrls(states));


function stateUrls(elements) {
  return elements.map( element => 'https://example.com/' + urlify(element));
}

console.log(stateUrls(states));

// Singles Imperative version
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element){
    if (element.split(/\s+/).length ===1) {
      singles.push(element);
    }
  });
  return singles;
}
console.log(imperativeSingles(states));

// Singles: Functional Version
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

function isDakota(elements) {
  return elements.filter(element => element.includes("Dakota"));
}

console.log(isDakota(states));

function newDakota(elements) {
  return elements.filter(element => element.split(/\s+/).length === 2);
}

console.log(newDakota(states));
