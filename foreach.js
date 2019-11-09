let a = (array) => {
  array.forEach(function(element){
    console.log(element);
})
}

a(["ant", "bat", "cat", 42]);


let soliloquy = "To be, or not to be, that is the question:";
Array.from(soliloquy).forEach(function(character) {
  console.log(character);
});

let b = [8, 17, 42, 99];
b.sort(function(a,b){return a - b;});
b.forEach(function(element){
  console.log(element);
})
